const LoginPage = require("../../support/pages/LoginPage");
const SistemPengelolaanPage = require("../../support/pages/SistemPengelolaanPage");

describe("SC01 - View Data Sistem Pengelolaan Konten Laman Landas", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Data Sistem Pengelolaan Konten Laman Landas", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      SistemPengelolaanPage.accessPage();
    });
  });

  it("TC02 - Search Data Sistem Pengelolaan Konten Laman Landas", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      SistemPengelolaanPage.accessPage();
      SistemPengelolaanPage.search("Pemerintahan Berbasis Digital");
    });
  });
});
