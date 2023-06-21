/// <reference types="cypress" />

describe("Testes para a home", () => {
  it("Deve renderizar 4 vagas", () => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    cy.get(".ListaVagas_vagas_gmNZn > li").should("have.length", 4);
  });

  it("Deve filtrar por fullstack", () => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    cy.get(".FormVagas_campo_E1ppF").type("fullstack{enter}");
    cy.get('button[type="submit"]').click();
    cy.get(".ListaVagas_vagas_gmNZn > li").should("have.length", 1);
  });
});
