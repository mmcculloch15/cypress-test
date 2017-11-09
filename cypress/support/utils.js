export function setGroceryCookies() {
    cy.setCookie('deliveryCatchment', '3065', {domain: 'www.walmart.ca'})
    cy.setCookie('walmart.nearestPostalCode', 'K1C1T1', {domain: 'www.walmart.ca'})
    cy.setCookie('walmart.shippingPostalCode', 'K1C1T1', {domain: 'www.walmart.ca'})
}

export function inputSlotDetails() {
    cy.get('#pickup-by-first-name').type('Hello')
    cy.get('#pickup-by-last-name').type('World')
    cy.get('#pickup-by-phone').type('1234567890')
}