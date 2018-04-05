it('Visits the cbc', () => {
  	cy.server()
	cy.route(mockAvailabilityCall('landing'))
    cy.visit('https://cbc.ca').get('.cardRegular.sclt-featuredcard1').click()
    cy.contains('palak');
    console.log("palak");
  })

  function mockAvailabilityCall(fixture) {
	    return {
	        method: 'GET',
	        url: 'json/cmlink/1.4605579',
	        response: `fixture:../fixtures/${fixture}`
	    }
	}