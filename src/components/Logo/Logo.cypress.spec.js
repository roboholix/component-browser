describe("Logo", () => {
  it("renders correctly", () => {

    /* eslint-disable no-undef */
    cy.visit("/#Logo");

    cy.get(".logo-container").should("contain", "Component Browser");

    /* eslint-enable no-undef */

  });
});
