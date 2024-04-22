describe('Form input', () => {
beforeEach(() => {
       cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200, 
        body: {
          "urls": [
          {
          "id": 1,
          "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          "short_url": "http://localhost:3001/useshorturl/1",
          "title": "Awesome photo"
          }
      ]}  
    })
      cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201, 
      body: {
        "title": "This is the title",
        "long_url": "This is the URL to shorten",
        "id": 2, 
        "short_url": "This is short"
      }
    })
    cy.visit('http://localhost:3000/')
    
})
 it('Should show user posted data', () => {
    cy.get("input[placeholder='Title...']").type('This is the title')
      cy.get("input[placeholder='URL to Shorten...']").type('This is the URL to shorten')
      cy.get('button').contains('Shorten Please!').click()
      cy.get('.url').should('have.length', 2)
      cy.get('.url').first().contains('h3', 'Awesome photo')
      cy.get('.url').first().contains('a', 'http://localhost:3001/useshorturl/1')
      cy.get('.url').first().contains('p', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
      cy.get('.url').last().contains('h3', 'This is the title')
      cy.get('.url').last().contains('a', 'This is short')
      cy.get('.url').last().contains('p', 'This is the URL to shorten')
    })
})