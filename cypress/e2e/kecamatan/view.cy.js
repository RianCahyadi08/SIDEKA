const KecamatanPage = require("../../support/pages/KecamatanPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC01 - View Data Kecamatan", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Data Kecamatan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KecamatanPage.accessPage();
    });
  });

  it("TC02 - Search Data Kecamatan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KecamatanPage.accessPage();
      KecamatanPage.search("Bakongan");
    });
  });
});
