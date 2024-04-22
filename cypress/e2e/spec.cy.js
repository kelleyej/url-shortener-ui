
describe('Homepage view', () => {
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
 
     cy.visit('http://localhost:3000/')
})

  it('Shows user the homepage', () => {
    cy.get('h1').contains('URL Shortener')
    cy.get('form').should('exist')
    cy.get('input').first().should('have.attr', 'placeholder', 'Title...')
    cy.get('input').last().should('have.attr', 'placeholder', 'URL to Shorten...')
    cy.get('form').contains('button', 'Shorten Please!')
    cy.get('.url').should('have.length', 1)
    cy.get('h3').contains('Awesome photo')
    cy.get('a').contains('http://localhost:3001/useshorturl/1')
    cy.get('p').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    })
})