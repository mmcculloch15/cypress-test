it('rollback pricing', () => {
    cy.server()
    cy.route(mockAvailabilityCall('availability-pip'))
    cy.visit('https://www.walmart.ca/en/ip/127191')
    cy.get('#product-purchase-cartridge .price-was').contains('1,200')
})

it('mocking preorder', () => {
    cy.server()
    cy.route(mockAvailabilityCall('availability-pip-preorder'))
    cy.visit('https://www.walmart.ca/en/ip/127191')
    cy.get('#favourite-a2c-container button.preorder').should('exist')
    cy.get('#favourite-a2c-container .preorder span.date').should('exist')
})

it('mocking not sold', () => {
    cy.server()
    cy.route(mockAvailabilityCall('availability-pip-notsold'))
    cy.visit('https://www.walmart.ca/en/ip/127191')
    cy.get('#favourite-a2c-container button.not-eligible').should('exist')
})


function mockAvailabilityCall(fixture) {
    return {
        method: 'POST',
        url: 'ws/en/products/availability-pip',
        response: `fixture:../fixtures/${fixture}`
    }
}