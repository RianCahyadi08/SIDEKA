const LoginPage = require("../../support/pages/LoginPage");
const StrukturInstansiPage = require("../../support/pages/StrukturInstansiPage");

describe("SC04 - View Detail Struktur Instansi", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Struktur Instansi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      StrukturInstansiPage.accessPage();
      StrukturInstansiPage.detail();
    });
  });
});
