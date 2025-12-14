const HomePage = require("../../support/pages/HomePage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC05 - Data Pegawai", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Daftar Pegawai", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPegawai();
    });
  });

  it("TC02 - Search Data Daftar Pegawai", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPegawai();
      HomePage.search("Pegawai Desa", 0);
    });
  });

  it("TC03 - Export Data Daftar Pegawai", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPegawai();
      HomePage.btnExport(0);
    });
  });
});
