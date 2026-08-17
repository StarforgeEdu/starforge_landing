import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('presents the product, supplied plans, and direct contact actions', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'From first lesson to final decision.',
  )
  await expect(page.getByText('Technology built for the people shaping tomorrow.').first()).toBeVisible()
  await expect(page.getByRole('link', { name: /Book a demo/i }).first()).toHaveAttribute(
    'href',
    'https://t.me/starforge_edu',
  )

  for (const [name, price] of [
    ['Basic', '$100'],
    ['Pro', '$159'],
    ['Max', '$200'],
  ]) {
    const plan = page.locator('.plan').filter({ has: page.getByRole('heading', { name }) })
    await expect(plan).toContainText(price)
  }

  await expect(page.getByRole('link', { name: '+998 99 035 88 49' })).toHaveAttribute(
    'href',
    'tel:+998990358849',
  )
  await expect(page.getByRole('heading', { name: 'Schedule the mock. Share one code. Start together.' })).toBeVisible()
  await expect(page.getByText('Coming soon · Desktop IELTS tools')).toBeVisible()
  await expect(page.getByText('Family', { exact: true }).first()).toBeVisible()
  await expect(page.locator('body')).toHaveJSProperty('scrollWidth', await page.evaluate(() => document.body.clientWidth))
})

test('has no serious or critical automated accessibility violations', async ({ page }) => {
  await page.goto('/')

  const results = await new AxeBuilder({ page }).analyze()
  const blocking = results.violations.filter((violation) =>
    ['serious', 'critical'].includes(violation.impact),
  )

  expect(blocking).toEqual([])
})

test('mobile navigation opens, receives focus, and closes with Escape', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'Mobile interaction only')
  await page.goto('/')

  const toggle = page.locator('.menu-toggle')
  await expect(toggle).toHaveAccessibleName('Open navigation menu')
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  await expect(toggle).toHaveAccessibleName('Close navigation menu')
  await expect(page.locator('#mobile-menu')).toHaveAttribute('aria-hidden', 'false')
  await expect(page.getByRole('link', { name: 'Platform' })).toBeFocused()

  await page.keyboard.press('Escape')
  await expect(page.locator('#mobile-menu')).toHaveAttribute('aria-hidden', 'true')
  await expect(toggle).toBeFocused()
  await expect(page.locator('body')).toHaveJSProperty('scrollWidth', await page.evaluate(() => document.body.clientWidth))
})

test('back-to-top control returns the page to the opening', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop', 'Desktop interaction coverage is sufficient')
  await page.goto('/')

  await page.locator('#pricing').scrollIntoViewIfNeeded()
  const backToTop = page.getByRole('button', { name: 'Back to top' })
  await expect(backToTop).toHaveAttribute('aria-hidden', 'false')
  await backToTop.click()
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(8)
})

test('keeps internal navigation out of the public URL', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop', 'One browser size covers URL behavior')
  await page.goto('/')

  await page.getByRole('link', { name: 'Pricing', exact: true }).click()
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(1000)
  await expect(page).toHaveURL('http://127.0.0.1:4173/')
})
