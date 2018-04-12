// it('Visits the cbc', () => {
//     cy.server()
//     cy.route(mockAvailabilityCall('test'))
//     cy.visit('http://feed.cbc.ca/cookies/settings')
// })

//   function mockAvailabilityCall(fixture) {
//         return {
//             method: 'GET',
//             url: 'cookie-jar/api/cookies/list',
//             response: `fixture:../fixtures/${fixture}`
//         }
//     }

describe('stub test', function() {
    beforeEach(function() {
        cy.visit('/', {
            onBeforeLoad (win) {
                cy.spy(win, 'fetch')
            }
        })
    })
    it('requests landing page data', function() {
        cy.window.its('fetch').should('be.calledWith', '/json/cmlink/1.4606893')
    })
})