const DesaPage = require("../../support/pages/DesaPage");
const KecamatanPage = require("../../support/pages/KecamatanPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC05 - Delete Data Kecamatan", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Delete Data Kecamatan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KecamatanPage.accessPage();
      KecamatanPage.search("Name kecamatan");
      KecamatanPage.delete();
    });
  });
});
