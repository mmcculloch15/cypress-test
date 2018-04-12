// it('Visits the cbc', () => {
//   	cy.server()
// 	cy.route(mockAvailabilityCall('landing'))
//     cy.visit('https://cbc.ca').get('.cardRegular.sclt-featuredcard1').click()
//     cy.contains('palak');
//     console.log("palak");
//   })

//   function mockAvailabilityCall(fixture) {
// 	    return {
// 	        method: 'GET',
// 	        url: 'json/cmlink/1.4605579',
// 	        response: `fixture:../fixtures/${fixture}`
// 	    }
// 	}

describe('spying', function () {
    beforeEach(function () {
      // We use cy.visit({onBeforeLoad: ...}) to spy on
      // window.fetch before any app code runs
      cy.visit('/', {
        onBeforeLoad (win) {
          cy.spy(win, 'fetch')
        }
      })
    })

it('Visits the cbc', () => {
  	cy.server()
	
    cy.visit('https://cbc.ca').get('.cardRegular.sclt-featuredcard1').click()
   
  })

  function mockAvailabilityCall(fixture) {
	    return {
	        method: 'GET',
	        url: 'json/cmlink/1.4605579',
	        response: `fixture:../fixtures/${fixture}`
	    }
  }
})