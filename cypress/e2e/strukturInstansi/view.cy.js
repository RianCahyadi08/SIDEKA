const LoginPage = require("../../support/pages/LoginPage");
const StrukturInstansiPage = require("../../support/pages/StrukturInstansiPage");

describe("SC01 - View Data Struktur  Instansi", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Data Struktur  Instansi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      StrukturInstansiPage.accessPage();
    });
  });

  it("TC02 - Search Data Struktur  Instansi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      StrukturInstansiPage.accessPage();
      StrukturInstansiPage.search("kabupaten agam");
    });
  });
});
