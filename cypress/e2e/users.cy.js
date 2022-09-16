describe("empty spec", () => {
  it("passes", () => {
    cy.visit(Cypress.env("HOST"));
  });
});
