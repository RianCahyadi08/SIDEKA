const LoginPage = require("../../support/pages/LoginPage");
const Provinsipage = require("../../support/pages/Provinsipage");

describe("SC02 - Create New Data Provinsi", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Create Data Provinsi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Provinsipage.accessPage();
      Provinsipage.createProvinsi("KP0", "Name provinsi");
    });
  });
});
