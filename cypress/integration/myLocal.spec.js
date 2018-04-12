describe("Navigate to Homepage and check 'My Local' section", function() {

    it("Change region from 'My Local' and verify news shown", function(done) {
        cy
        .visit("http://www.cbc.ca/")
        .get('.moreStories .regionButton').scrollIntoView().click()
       // Demonstrate 'SELECT' command where user can select desire result from the list
    //   .get(".moreStories .regionsListItem [type='radio']").then(($el) => {
    //       $el.get(0).click()
    //   })
       cy.get(".moreStories .regionsList > li")
       
       .each(($el, index, $list) => {
            //const value = cy.wrap($el).text()
                cy.get()
                cy.wrap($el).click({force : true})
                const region = cy.wrap($el).text()
                .get('.moreStoriesList .regionNameWrapper a').contains(text)
                .get('.moreStories .regionButton').click()

            
        
            })
            

       })

    })
