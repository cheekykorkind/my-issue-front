describe('test2', () => {
  // beforeEach(() => {
    
  // });
    
  it('test selectbox', () => {
    cy.visit(`http://localhost:3000/selectbox`)
    cy.get('[id=demo-customized-select]').click()
    cy.get('[id=demo-customized-select-item]').parent().find('li').contains('Twenty').click()
    cy.get('[id=demo-customized-select]').contains('Twenty')
  });  
})