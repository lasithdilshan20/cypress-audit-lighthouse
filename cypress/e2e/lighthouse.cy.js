describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.lighthouse(
        {
          performance: 40,
          accessibility: 40,
          'best-practices': 40,
          seo: 40,
        },
        {
          formFactor: 'desktop',
          screenEmulation: {
            mobile: false,
            disable: false,
            width: Cypress.config('viewportWidth'),
            height: Cypress.config('viewportHeight'),
            deviceScaleRatio: 1,
          },
        },
    )
  })
})