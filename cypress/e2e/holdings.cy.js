describe('Holdings Component', () => {
    beforeEach(() => {
        // Mock the API response
        cy.intercept('GET', 'http://localhost:3000/allHoldings', {
            statusCode: 200,
            body: [
                { name: 'Stock A', qty: 10, avg: 100, price: 110, net: 10, day: 5, isLoss: false },
                { name: 'Stock B', qty: 20, avg: 200, price: 210, net: 20, day: 10, isLoss: true },
            ],
        }).as('getHoldings');

        // Visit the holdings page
        cy.visit('/holdings');
    });

    it('should render the Holdings component', () => {
        // Check if the component is rendered
        cy.get('[data-testid="holdings"]').should('exist');
    });

    it('should display the correct title with the number of holdings', () => {
        // Check if the title is correct and includes the number of holdings
        cy.get('.title').should('contain', 'Holdings (2)');
    });

    it('should fetch and display the holdings data in the table', () => {
        // Wait for the API call to complete
        cy.wait('@getHoldings');

        // Check if the table headers are correct
        cy.get('thead th').eq(0).should('contain', 'Instrument');
        cy.get('thead th').eq(1).should('contain', 'Qty.');
        cy.get('thead th').eq(2).should('contain', 'Avg. cost');
        cy.get('thead th').eq(3).should('contain', 'LTP');
        cy.get('thead th').eq(4).should('contain', 'Cur. val');
        cy.get('thead th').eq(5).should('contain', 'P&L');
        cy.get('thead th').eq(6).should('contain', 'Net chg.');
        cy.get('thead th').eq(7).should('contain', 'Day chg.');

        // Check if the table rows contain the correct data
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', 'Stock A');
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', '10');
        cy.get('tbody tr').eq(0).find('td').eq(2).should('contain', '100.00');
        cy.get('tbody tr').eq(0).find('td').eq(3).should('contain', '110.00');
        cy.get('tbody tr').eq(0).find('td').eq(4).should('contain', '1100.00');
        cy.get('tbody tr').eq(0).find('td').eq(5).should('contain', '100.00');
        cy.get('tbody tr').eq(0).find('td').eq(6).should('contain', '10');
        cy.get('tbody tr').eq(0).find('td').eq(7).should('contain', '5');

        cy.get('tbody tr').eq(1).find('td').eq(0).should('contain', 'Stock B');
        cy.get('tbody tr').eq(1).find('td').eq(1).should('contain', '20');
        cy.get('tbody tr').eq(1).find('td').eq(2).should('contain', '200.00');
        cy.get('tbody tr').eq(1).find('td').eq(3).should('contain', '210.00');
        cy.get('tbody tr').eq(1).find('td').eq(4).should('contain', '4200.00');
        cy.get('tbody tr').eq(1).find('td').eq(5).should('contain', '200.00');
        cy.get('tbody tr').eq(1).find('td').eq(6).should('contain', '20');
        cy.get('tbody tr').eq(1).find('td').eq(7).should('contain', '10');
    });

    it('should display the correct total investment, current value, and P&L', () => {
        // Wait for the API call to complete
        cy.wait('@getHoldings');

        // Check the total investment
        cy.get('.row .col').eq(0).find('h5').should('contain', '29,875.55');
        cy.get('.row .col').eq(0).find('p').should('contain', 'Total investment');

        // Check the current value
        cy.get('.row .col').eq(1).find('h5').should('contain', '31,428.95');
        cy.get('.row .col').eq(1).find('p').should('contain', 'Current value');

        // Check the P&L
        cy.get('.row .col').eq(2).find('h5').should('contain', '1,553.40 (+5.20%)');
        cy.get('.row .col').eq(2).find('p').should('contain', 'P&L');
    });

    it('should render the VerticalGraph component', () => {
        // Check if the VerticalGraph component is rendered
        cy.get('[data-testid="vertical-graph"]').should('exist');
    });
});