// going-signin-page.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Sign In', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('should navigate to the signin page', () => {


        cy.get('a[href*="signin"]').click()

        cy.url().should('include', '/signin')

        cy.get('title').contains('Sign In')
    })

    context('should process the form', () => {

        beforeEach(() => {
            cy.get('a[href*="signin"]').click()
            cy.url().should('include', '/signin')
            cy.get('title').contains('Sign In')
        })

        it('should go to protected page', () => {
            cy.get('#username').type('admin')
            cy.get('#password').type('1234')
            cy.get(':submit').click()
            cy.url().should('include', '/protected')
        })

        it('should should warning if username password not found', () => {
            
            cy.get(':submit').click()
            cy.url().should('include', '/signin')
            cy.contains('Username or Password not found').should('be.visible')
        })
    })
})