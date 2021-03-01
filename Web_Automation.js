describe('NoCommerce', function () {
    it('Verify Title', function () {
        cy.visit('https://www.nopcommerce.com/en/demo')
        cy.title().should('eq', 'Store Demo - nopCommerce')
    })

    it('Verify Title-NegativeTest', function () {
        cy.visit('https://www.nopcommerce.com/en/demo')
        cy.title().should('eq', 'Sign In FraudLens Dental Payment Integrity')
    })
})