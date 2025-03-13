describe('Orders Component', () => {
    beforeEach(() => {
        // Mock the API response for orders data
        cy.intercept('GET', 'http://localhost:3000/allOrders', {
            statusCode: 200,
            body: {
                orders: [
                    { name: 'Stock A', qty: 10, price: 100, mode: 'BUY', date: '2023-10-01T12:00:00Z' },
                    { name: 'Stock B', qty: 20, price: 200, mode: 'SELL', date: '2023-10-02T12:00:00Z' },
                ],
            },
        }).as('getOrders');

        // Visit the orders page
        cy.visit('/orders');
    });

    it('should render the Orders component', () => {
        // Check if the component is rendered
        cy.get('.orders-section').should('exist');
    });

    it('should display the correct title', () => {
        // Check if the title is correct
        cy.get('.orders-title').should('contain', 'Your Orders');
    });

    it('should fetch and display orders data in the table', () => {
        // Wait for the API call to complete
        cy.wait('@getOrders');

        // Check if the table headers are correct
        cy.get('.orders-table thead th').eq(0).should('contain', 'Stock');
        cy.get('.orders-table thead th').eq(1).should('contain', 'Quantity');
        cy.get('.orders-table thead th').eq(2).should('contain', 'Price');
        cy.get('.orders-table thead th').eq(3).should('contain', 'Type');
        cy.get('.orders-table thead th').eq(4).should('contain', 'Date');

        // Check if the table rows contain the correct data
        cy.get('.orders-table tbody tr').eq(0).find('td').eq(0).should('contain', 'Stock A');
        cy.get('.orders-table tbody tr').eq(0).find('td').eq(1).should('contain', '10');
        cy.get('.orders-table tbody tr').eq(0).find('td').eq(2).should('contain', '₹100.00');
        cy.get('.orders-table tbody tr').eq(0).find('td').eq(3).should('contain', 'BUY');
        cy.get('.orders-table tbody tr').eq(0).find('td').eq(4).should('contain', '10/1/2023, 5:30:00 PM'); // Adjusted for IST

        cy.get('.orders-table tbody tr').eq(1).find('td').eq(0).should('contain', 'Stock B');
        cy.get('.orders-table tbody tr').eq(1).find('td').eq(1).should('contain', '20');
        cy.get('.orders-table tbody tr').eq(1).find('td').eq(2).should('contain', '₹200.00');
        cy.get('.orders-table tbody tr').eq(1).find('td').eq(3).should('contain', 'SELL');
        cy.get('.orders-table tbody tr').eq(1).find('td').eq(4).should('contain', '10/2/2023, 5:30:00 PM'); // Adjusted for IST
    });

    it('should apply the correct CSS class for BUY and SELL types', () => {
        // Wait for the API call to complete
        cy.wait('@getOrders');

        // Check if the correct CSS classes are applied
        cy.get('.orders-table tbody tr').eq(0).find('td').eq(3).should('have.class', 'buy'); // BUY
        cy.get('.orders-table tbody tr').eq(1).find('td').eq(3).should('have.class', 'sell'); // SELL
    });

    it('should display a message when there are no orders', () => {
        // Mock an empty orders response
        cy.intercept('GET', 'http://localhost:3000/allOrders', {
            statusCode: 200,
            body: { orders: [] },
        }).as('getEmptyOrders');

        // Visit the orders page again
        cy.visit('/orders');

        // Wait for the API call to complete
        cy.wait('@getEmptyOrders');

        // Check if the "no orders" message is displayed
        cy.get('.no-orders').should('contain', '📢 You haven\'t placed any orders yet.');
    });
});