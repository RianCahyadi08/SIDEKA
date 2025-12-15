const KecamatanPage = require("../../support/pages/KecamatanPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC02 - Create New Data Kecamatan", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Create Data Kecamatan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KecamatanPage.accessPage();
      KecamatanPage.createKec(0, "KC001", "Name kecamatan");
    });
  });
});
