const KabupatenPage = require("../../support/pages/KabupatenPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC01 - View Data Kabupaten", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Data Kabupaten", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KabupatenPage.accessPage();
    });
  });

  it("TC02 - Search Data Kabupaten", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KabupatenPage.accessPage();
      KabupatenPage.search("KAB. ACEH TENGGARA");
    });
  });
});
