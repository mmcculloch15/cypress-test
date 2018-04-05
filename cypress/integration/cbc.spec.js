it('Visits the cbc', () => {
    cy.server()
    cy.route(mockAvailabilityCall('test'))
    cy.visit('http://feed.cbc.ca/cookies/settings')
})

  function mockAvailabilityCall(fixture) {
        return {
            method: 'GET',
            url: 'cookie-jar/api/cookies/list',
            response: `fixture:../fixtures/${fixture}`
        }
    }