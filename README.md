
# E-Commerce Web Automation Testing

## Project Overview

An end-to-end UI automation framework developed
using Playwright and JavaScript to validate
critical e-commerce workflows.

## Application Under Test

Automation Exercise

https://www.automationexercise.com/

## Technology Stack

- JavaScript
- Playwright Test
- Node.js
- GitHub
- GitHub Actions

## Framework Architecture

- Page Object Model (POM)
- Reusable Fixtures
- Data-Driven Testing
- Parallel Execution
- Cross-Browser Testing
- HTML Reporting
- Trace Capture
- Screenshots and Video
- CI/CD Integration

## Modules Covered

1. Homepage
2. Registration
3. Login
4. Product Listing
5. Product Search
6. Product Details
7. Shopping Cart
8. Product Quantity
9. Checkout
10. Payment Form

## Test Coverage

Positive and negative scenarios covering
login, registration, product search,
cart operations and checkout.

## Execution

Install dependencies:

npm install

Install browsers:

npx playwright install

Run all tests:

npx playwright test

Run Chromium tests:

npx playwright test --project=chromium

Generate HTML report:

npx playwright show-report

## Reporting

- HTML execution reports
- Failure screenshots
- Trace files
- Video evidence

## CI/CD

GitHub Actions executes automated tests
on pushes and pull requests.
