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
})