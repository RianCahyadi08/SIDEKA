const KabupatenPage = require("../../support/pages/KabupatenPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC02 - Create New Data Kabupaten", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Create Data Kabupaten", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KabupatenPage.accessPage();
      KabupatenPage.createKabupaten(0, "KK001", "Name kabupaten");
    });
  });
});
