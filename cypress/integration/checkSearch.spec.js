describe("Search Page Tests", function() {

    beforeEach(function() {
        cy
        .visit("http://www.cbc.ca/search")
    })

    it("Search for valid keyword and verify search text ", function() {
        cy
        .get('.searchBoxArea #gn-search')
        .type('trump')
        .get('.searchBoxArea .searchButton').click()
        .get('.resultsDescription').contains('Showing results')
    })

    it("Search for valid keyword and verify search text ", function() {
        cy
        .get('.searchBoxArea #gn-search')
        .type('trup')
        .get('.searchBoxArea .searchButton').click()
        .get('.resultsDescription').contains('No results found')
    })
})

    
    // cy
    // .get('.searchFilterList > li:nth-child(1)').nextAll()
    // .each(($el, index, $list) => {
        
        
    //     cy.wrap($el).click()
    //     const categoryName = cy.get('.searchFilterButton').its('data-filtertype')
    //     console.log(categoryName)
    //     //cy.get('.resultsDescription').contains(categoryName.toLowerCase())
           
    
    //    })


    //.get('.resultsDescription').contains('news')
    
    //})
    
    //.get('.card-content-top .headline').should('contain' , 'CBC').first().click()
    // .visit("http://www.cbc.ca/life/home/this-terrifying-clown-house-could-be-yours-1.410").then((resp) => {
    // if ((resp.status).to.eq(404)) {
    //     console.log("error")
    // }
    // cy
//      cy.get('.searchFilterList > li:nth-child(2)').click()
//    cy
//    .get('.searchFilterList > li:nth-child(2) .searchFilterButton').within(($el) => {
//        cy.wrap($el).getText().should('eq', 'News')
//    })


    
//     const u = "News".toLowerCase();
//     cy.get('.resultsDescription').contains(u)
// console.log(t.toLowerCase)
    //console.log(categoryName)
    // cy.get('.resultsDescription').contains('News')


    
