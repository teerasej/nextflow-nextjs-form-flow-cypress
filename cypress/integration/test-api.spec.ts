// test-api.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Network request to API', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should get 200 from API', () => {

        cy.request('POST', 'api/signin', { username: 'admin', password: '1234' })
            .then(
                (response) => {

                    expect(response.status).equal(200)
                })
    })

    it('Should get 400 from API', () => {

        cy.request({method:'POST', failOnStatusCode: false, url:'api/signin', body: {} })
            .then(
                (response) => {

                    expect(response.status).equal(400)
                })
    })


})