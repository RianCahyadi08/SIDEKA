const HomePage = require("../../support/pages/HomePage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC07 - Data Pengguna", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Daftar Pengguna", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPengguna();
    });
  });

  it("TC02 - Search Data Daftar Pengguna", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPengguna();
      HomePage.search("admegov", 0);
    });
  });

  it("TC03 - Export Data Daftar Pengguna", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPengguna();
      HomePage.btnExport(0);
    });
  });
});
