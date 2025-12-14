const HomePage = require("../../support/pages/HomePage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC01 - View Home", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Home", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      HomePage.accessHome();
    });
  });
});
