describe('Login Page Test', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should successfully log in with valid credentials', () => {
        const username = `testuser_${Date.now()}`;
        const email = `${username}@example.com`;
        const password = 'password123';

        cy.request('POST', 'http://localhost:3000/auth/signup', { username, email, password });

        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/dashboard');
    });

    it('should show an error for invalid credentials', () => {
        cy.get('#email').type('wronguser@example.com');
        cy.get('#password').type('wrongpassword');
        cy.get('button[type="submit"]').click();

        cy.get('.alert-danger').should('contain', 'Invalid credentials');
    });

    it('should show validation error for empty fields', () => {
        cy.get('button[type="submit"]').click();

        cy.get('.alert-danger').should('contain', 'Email is required');
        cy.get('.alert-danger').should('contain', 'Password is required');
    });
});
