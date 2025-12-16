const LoginPage = require("../../support/pages/LoginPage");
const SistemPengelolaanPage = require("../../support/pages/SistemPengelolaanPage");

describe("SC03 - Kelola Daftar Bagian Beranda", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Daftar Bagian Beranda", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      SistemPengelolaanPage.accessPage();
      SistemPengelolaanPage.kelola();
    });
  });

  it("TC02 - Edit Data", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      SistemPengelolaanPage.accessPage();
      SistemPengelolaanPage.updateKelola();
    });
  });

  it.only("TC03 - Hapus Data", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      SistemPengelolaanPage.accessPage();
      SistemPengelolaanPage.deleteKelola();
    });
  });
});
