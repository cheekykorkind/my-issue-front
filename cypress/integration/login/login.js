describe('test1', () => {
  // beforeEach(() => {

  // });

  it('test1 it', () => {
    cy.visit(`${Cypress.env('T_BASE_DOMAIN')}/login`)
    // cy.contains("Welcome to Next.js!", { timeout: 20000 })
  });
})