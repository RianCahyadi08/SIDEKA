const HomePage = require("../../support/pages/HomePage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC04 - Data Jenis Izin", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Daftar Jenis Izin", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountJenisIzin();
    });
  });

  it("TC02 - Search Data Daftar Jenis Izin", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountJenisIzin();
      HomePage.search("Surat Keterangan Usaha - TTE", 0);
    });
  });

  it("TC03 - Export Data Daftar Jenis Izin", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountJenisIzin();
      HomePage.btnExport(0);
    });
  });
});
