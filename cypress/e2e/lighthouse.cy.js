describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')

      const thresholds = {
          performance: 30,
          accessibility: 40,
          'best-practices': 30,
          seo: 30,
      }
      const opts = {
          formFactor: 'desktop',
          screenEmulation: {
              mobile: false,
              disable: false,
              width: Cypress.config('viewportWidth'),
              height: Cypress.config('viewportHeight'),
              deviceScaleRatio: 1,
          },
      }

      cy.url()
          .then((url) => {
              cy.task('lighthouse', {
                  url,
                  thresholds,
                  opts,
              })
          })
          .then((report) => {
              //const { errors, results, txt } = report
              // our custom code in the plugins file has summarized the report
              cy.log(report.txt)
          })
  })
})