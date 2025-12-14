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

  forgotPassword(email) {
    cy.get('a[class*="link-primary text-hover-primary fs-7"]').click();
    cy.wait(500);
    cy.get('input[name="email"]').type(email).should("have.value", email);
    cy.wait(500);
    cy.get('button[class*="btn btn-primary"]').click();
    cy.wait(1000);
  }

  logout() {
    cy.get('i[class*="far fa-user fs-3 text-primary-custom"]').click();
    cy.wait(500);
    cy.get('a[class*="active-link exact-active-link menu-link px-5"]').click();
    cy.wait(500);
    cy.get(
      'button[class*="swal2-confirm btn btn-md btn-success swal2-styled"]'
    ).click();
    cy.wait(500);
  }
}

module.exports = new LoginPage();
