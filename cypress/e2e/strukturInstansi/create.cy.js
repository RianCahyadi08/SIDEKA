const LoginPage = require("../../support/pages/LoginPage");
const StrukturInstansiPage = require("../../support/pages/StrukturInstansiPage");

describe("SC02 - Create New Data Struktur Instansi", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Create Data Struktur Instansi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      StrukturInstansiPage.accessPage();
      StrukturInstansiPage.create("name instansi", "KSI01");
    });
  });
});
