describe('Positions Component', () => {
    beforeEach(() => {
        // Mock the API response for positions data
        cy.intercept('GET', 'http://localhost:3000/allPositions', {
            statusCode: 200,
            body: [
                { product: 'Product A', name: 'Stock A', qty: 10, avg: 100, price: 110, day: 5, isLoss: false },
                { product: 'Product B', name: 'Stock B', qty: 20, avg: 200, price: 210, day: 10, isLoss: true },
            ],
        }).as('getPositions');

        // Visit the positions page
        cy.visit('/positions');
    });

    it('should render the Positions component', () => {
        // Check if the component is rendered
        cy.get('.title').should('contain', 'Positions');
    });

    it('should display the correct title with the number of positions', () => {
        // Check if the title includes the number of positions
        cy.get('.title').should('contain', 'Positions (2)');
    });

    it('should fetch and display the positions data in the table', () => {
        // Wait for the API call to complete
        cy.wait('@getPositions');

        // Check if the table headers are correct
        cy.get('thead th').eq(0).should('contain', 'Product');
        cy.get('thead th').eq(1).should('contain', 'Instrument');
        cy.get('thead th').eq(2).should('contain', 'Qty.');
        cy.get('thead th').eq(3).should('contain', 'Avg.');
        cy.get('thead th').eq(4).should('contain', 'LTP');
        cy.get('thead th').eq(5).should('contain', 'P&L');
        cy.get('thead th').eq(6).should('contain', 'Chg.');

        // Check if the table rows contain the correct data
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', 'Product A');
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', 'Stock A');
        cy.get('tbody tr').eq(0).find('td').eq(2).should('contain', '10');
        cy.get('tbody tr').eq(0).find('td').eq(3).should('contain', '100.00');
        cy.get('tbody tr').eq(0).find('td').eq(4).should('contain', '110.00');
        cy.get('tbody tr').eq(0).find('td').eq(5).should('contain', '100.00');
        cy.get('tbody tr').eq(0).find('td').eq(6).should('contain', '5');

        cy.get('tbody tr').eq(1).find('td').eq(0).should('contain', 'Product B');
        cy.get('tbody tr').eq(1).find('td').eq(1).should('contain', 'Stock B');
        cy.get('tbody tr').eq(1).find('td').eq(2).should('contain', '20');
        cy.get('tbody tr').eq(1).find('td').eq(3).should('contain', '200.00');
        cy.get('tbody tr').eq(1).find('td').eq(4).should('contain', '210.00');
        cy.get('tbody tr').eq(1).find('td').eq(5).should('contain', '200.00');
        cy.get('tbody tr').eq(1).find('td').eq(6).should('contain', '10');
    });

    it('should apply the correct CSS class for profit and loss in P&L and Chg. columns', () => {
        // Wait for the API call to complete
        cy.wait('@getPositions');

        // Check if the P&L and Chg. columns have the correct CSS classes
        cy.get('tbody tr').eq(0).find('td').eq(5).should('have.class', 'profit'); // P&L for Stock A (profit)
        cy.get('tbody tr').eq(0).find('td').eq(6).should('have.class', 'profit'); // Chg. for Stock A (profit)

        cy.get('tbody tr').eq(1).find('td').eq(5).should('have.class', 'loss'); // P&L for Stock B (loss)
        cy.get('tbody tr').eq(1).find('td').eq(6).should('have.class', 'loss'); // Chg. for Stock B (loss)
    });
});