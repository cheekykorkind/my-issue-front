  
describe('test1', () => {
    // beforeEach(() => {
      
    // });
    
    it('test1 it', () => {
      cy.visit(`http://192.168.33.16:3000/`)
      cy.contains("Welcome to Next.js!", { timeout: 20000 })
    });  
  })