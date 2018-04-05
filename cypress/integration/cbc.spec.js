it('Visits the cbc', () => {
    cy.server()
    cy.route(mockAvailabilityCall('test'))
    cy.visit('https://cbc.ca').get('.cardRegular.sclt-featuredcard1').click()
    cy.contains('palak');
  })

  function mockAvailabilityCall(fixture) {
        return {
            method: 'GET',
            url: 'aggregate_api/v1/items',
            response: `fixture:../fixtures/${fixture}`
        }