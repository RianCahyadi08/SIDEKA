const LoginPage = require("../../support/pages/LoginPage");
const Provinsipage = require("../../support/pages/Provinsipage");

describe("SC04 - View Detail Data Provinsi", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Provinsi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Provinsipage.accessPage();
      Provinsipage.detail();
    });
  });
});
