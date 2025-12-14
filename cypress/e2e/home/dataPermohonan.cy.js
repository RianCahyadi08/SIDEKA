const HomePage = require("../../support/pages/HomePage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC03 - Data Permohonan", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Daftar Status Permohonan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPermohonan();
    });
  });

  it("TC02 - Filter Data Tabel Daftar Status Permohonan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPermohonan();
      HomePage.filter(0);
    });
  });

  it("TC03 - Search Data Daftar Status Permohonan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPermohonan();
      HomePage.search("Surat Keterangan Usaha - Manual", 0);
    });
  });

  it("TC04 - Export Data Daftar Status Permohonan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPermohonan();
      HomePage.btnExport(0);
    });
  });
});
