import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'

const outputDir = process.argv[2] || '.impeccable/review/round'
const url = process.argv[3] || 'http://127.0.0.1:4173'

await mkdir(outputDir, { recursive: true })

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  headless: true,
})

const views = [
  { name: 'desktop', viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 },
  { name: 'mobile', viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 },
]

const report = []

for (const view of views) {
  const context = await browser.newContext({
    viewport: view.viewport,
    deviceScaleFactor: view.deviceScaleFactor,
    reducedMotion: 'no-preference',
  })
  const page = await context.newPage()
  const errors = []

  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`)
  })
  page.on('pageerror', (error) => errors.push(`page: ${error.message}`))

  await page.goto(url, { waitUntil: 'networkidle' })
  await page.screenshot({ path: `${outputDir}/${view.name}-viewport.png` })
  await page.screenshot({ path: `${outputDir}/${view.name}-full.png`, fullPage: true })

  for (const section of ['platform', 'day-flow', 'ielts', 'pricing', 'contact']) {
    await page.evaluate(() => document.activeElement?.blur())
    await page.locator(`#${section}`).screenshot({ path: `${outputDir}/${view.name}-${section}.png` })
  }

  if (view.name === 'desktop') {
    await page.locator('#pricing').scrollIntoViewIfNeeded()
    await page.waitForTimeout(360)
    await page.screenshot({ path: `${outputDir}/desktop-scrolled-nav-back-to-top.png` })
    await page.getByRole('button', { name: 'Back to top' }).click()
    await page.waitForFunction(() => window.scrollY < 8)
  }

  if (view.name === 'mobile') {
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.getByRole('button', { name: 'Open navigation menu' }).click()
    await page.waitForTimeout(320)
    await page.screenshot({ path: `${outputDir}/mobile-menu-open.png` })
    await page.keyboard.press('Escape')
    await page.waitForTimeout(220)

    const cdp = await context.newCDPSession(page)
    await cdp.send('Animation.enable')
    await cdp.send('Animation.setPlaybackRate', { playbackRate: 0.1 })
    await page.getByRole('button', { name: 'Open navigation menu' }).click()
    await page.waitForTimeout(1200)
    await page.screenshot({ path: `${outputDir}/mobile-menu-10pct.png` })
    await cdp.send('Animation.setPlaybackRate', { playbackRate: 1 })
  }

  report.push({
    view: view.name,
    viewport: view.viewport,
    documentWidth: await page.evaluate(() => document.documentElement.scrollWidth),
    clientWidth: await page.evaluate(() => document.documentElement.clientWidth),
    documentHeight: await page.evaluate(() => document.documentElement.scrollHeight),
    errors,
  })

  await context.close()
}

await browser.close()
process.stdout.write(`${JSON.stringify(report, null, 2)}\n`)
