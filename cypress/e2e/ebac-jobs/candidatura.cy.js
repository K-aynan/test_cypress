/// <reference types="cypress" />

describe("Testes para a página de candidatura", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });

  it("Deve lever o usuário até o formulário de inscrição", () => {
    cy.get(".Vaga_vagaLink_DeFkk").first().click();
    cy.get("input").should("have.length", 7);
    cy.screenshot("tela-inscricao");
  });

  it("Deve lever o usuário até o formulário de inscrição", () => {
    cy.get(".Vaga_vagaLink_DeFkk").first().click();
    cy.get('input[name="nome-completo"]').type("kaynansilva");
    cy.get('input[name="email"]').type("kaynansilva@teste.com");
    cy.get('input[name="telefone"]').type("11 12345678");
    cy.get('input[name="endereco"]').type(
      "rua jeste, bairro cypress, são paulo-sp"
    );
    cy.get("#linux").check();
    cy.get('select[name="escolaridade"]').select("outros");
    cy.get(".Aplicacao_button_tw2AE").click();

    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Obrigado pela sua candidatura!");
    });

    cy.screenshot("tela-inscricao-preenchido");
  });
});
