import { setGroceryCookies, inputSlotDetails } from '../support/utils'

it('testing', () => {
    cy.server()
    cy.fixture('../fixtures/availability-pip').as('@avail')
    cy.route({
        method: 'POST',
        url: 'ws/en/products/availability-pip', 
        response: 'fixture:../fixtures/availability-pip',
        force404: true
    }).as('@pip')
    cy.visit('https://www.walmart.ca/en/ip/127191')
})