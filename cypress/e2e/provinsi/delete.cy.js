const LoginPage = require("../../support/pages/LoginPage");
const Provinsipage = require("../../support/pages/Provinsipage");

describe("SC05 - Delete Data Provinsi", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Delete Data Provinsi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Provinsipage.accessPage();
      Provinsipage.search("name provinsi");
      Provinsipage.delete();
    });
  });
});
