  
describe('test1', () => {
    // beforeEach(() => {
      
    // });
    
    it('test1 it', () => {
      cy.visit(`http://localhost:3000/`)
      cy.contains("Hello World", { timeout: 20000 })
    });  
  })