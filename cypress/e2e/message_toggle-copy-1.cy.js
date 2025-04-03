describe('Message Toggle Functionality', () => {
  it('should display "Hello, World!" initially', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Hello, World!').should('be.visible');
  });

  it('should toggle the message between "Hello, World!" and "Goodbye, World!" on button click', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Toggle Message').click();
    cy.contains('Goodbye, World!').should('be.visible');
    cy.wait(500); // Adjust the time as needed
    cy.contains('Toggle Message').click();
    cy.contains('Hello, World!').should('be.visible');
  });
});