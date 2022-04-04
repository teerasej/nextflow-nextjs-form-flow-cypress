/// <reference types="cypress" />

describe('Navigation to signin page', () => {
    it('should navigate to the signin page', () => {
        cy.visit('/')

        cy.get('a[href*="signin"]').click()

        cy.url().should('include', '/signin')

        cy.get('title').contains('Sign In')
    })
})