describe('Signup Page Test', () => {
    it('should successfully sign up with valid credentials', () => {
        cy.visit('/signup')

        const uniqueUsername = `testuser_${Date.now()}`
        const uniqueEmail = `testuser${Date.now()}@example.com`

        cy.get('#username').type(uniqueUsername)
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type('testpassword')

        cy.intercept('POST', '**/auth/signup').as('signupRequest')

        cy.get('button[type="submit"]').click()

        cy.wait('@signupRequest').then((interception) => {
            console.log('Intercepted Response:', interception.response)

            expect(interception.response.statusCode).to.eq(201)
            cy.url().should('include', '/login')
        })
    })
})
