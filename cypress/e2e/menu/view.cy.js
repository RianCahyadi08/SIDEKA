const LoginPage = require("../../support/pages/LoginPage");
const Menupage = require("../../support/pages/Menupage");

describe("SC01 - View Page Menu", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Data Menu", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Menupage.accessPage();
    });
  });

  it("TC02 - Search Data Menu", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Menupage.accessPage();
      Menupage.search("Desa");
    });
  });
});
