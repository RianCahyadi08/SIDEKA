const HomePage = require("../../support/pages/HomePage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC02 - Pemohon", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Tabel Pemohon Tab (Jenis Pemohon)", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPemohon();
    });
  });

  it("TC02 - Filter Data Tabel Pemohon Tab (Jenis Pemohon)", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPemohon();
      HomePage.filter();
    });
  });

  it("TC03 - Search Data Tabel Pemohon Tab (Jenis Pemohon)", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPemohon();
      HomePage.search("Ammar", 0);
    });
  });

  it("TC04 - Export Data Jenis Pemohon Tab (Jenis Pemohon)", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPemohon();
      HomePage.btnExport(0);
    });
  });

  it("TC05 - View Detail Data Daftar Status Pemohon Aktif Tab (Status Pemohon Aktif)", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPemohon();
      HomePage.tabStatusPemohonActive();
    });
  });

  it("TC06 - Search Data Daftar Status Pemohon Aktif Tab (Status Pemohon Aktif)", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPemohon();
      HomePage.tabStatusPemohonActive();
      HomePage.search("Ammar", 1);
    });
  });

  it("TC07 - Export Data Daftar Status Pemohon Aktif Tab (Status Pemohon Aktif)", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
      HomePage.detailCountPemohon();
      HomePage.tabStatusPemohonActive();
      HomePage.btnExport(1);
    });
  });
});
