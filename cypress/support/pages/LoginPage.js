class LoginPage {
  setName(value) {
    cy.get('input[name="username"]').type(value).should("have.value", value);
  }

  setPassword(value) {
    cy.get('input[name="password"]').type(value).should("have.value", value);
  }

  clickBtnMasuk() {
    cy.get(
      'button[class*="btn btn-lg border border-white btn-primary w-100 mb-5 hover-scale"]'
    ).click();
  }

  login(name, password) {
    this.setName(name);
    this.setPassword(password);
    this.clickBtnMasuk();
    cy.wait(1000);
  }
}

module.exports = new LoginPage();
