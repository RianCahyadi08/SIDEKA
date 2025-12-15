const LoginPage = require("../../support/pages/LoginPage");
const Provinsipage = require("../../support/pages/Provinsipage");

describe("SC01 - View Data Kecamatan", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Data Provinsi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Provinsipage.accessPage();
    });
  });

  it("TC02 - Search Data Provinsi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Provinsipage.accessPage();
      Provinsipage.search("ACEH");
    });
  });
});
