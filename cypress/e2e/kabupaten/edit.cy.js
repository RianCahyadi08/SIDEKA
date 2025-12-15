const KabupatenPage = require("../../support/pages/KabupatenPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC03 - Edit Data Kabupaten", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Edit Data Kabupaten", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KabupatenPage.accessPage();
      KabupatenPage.update();
    });
  });
});
