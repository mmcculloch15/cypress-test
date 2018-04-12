describe("Verify API response and title on the page using API", function() {

        it('Visits the cbc and click on first card', () => {
   
                cy.visit('https://cbc.ca').get('.cardRegular.sclt-featuredcard1').click()
        
               
                //Add dynamic id here    
                cy.request("json/cmlink/1.4606453").then((resp) => {
                        const title = resp.body.headline
                        expect(resp.status).to.eq(200)
                        cy.get('.detailHeadline ').should('have.text', title)
                        })
                })
})


    
  
