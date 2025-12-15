const KabupatenPage = require("../../support/pages/KabupatenPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC05 - Delete Data Kabupaten", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Delete Data Kabupaten", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KabupatenPage.accessPage();
      KabupatenPage.search("Name kabupaten");
      KabupatenPage.delete();
    });
  });
});
