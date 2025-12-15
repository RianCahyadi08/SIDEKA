const KecamatanPage = require("../../support/pages/KecamatanPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC04 - View Detail Data Kecamatan", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Kecamatan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KecamatanPage.accessPage();
      KecamatanPage.detail();
    });
  });
});
