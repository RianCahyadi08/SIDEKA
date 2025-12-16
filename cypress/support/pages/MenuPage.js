class ProvinsiPage {
  accessPage() {
    cy.visit("https://portal.desa.id/sandbox/user/menu");
    cy.wait(1000);
    cy.get(
      'div[class*="col-md-12 col-lg-4 bg-white p-8 rounded shadow mb-4"]'
    ).should("be.visible");
  }

  search(value) {
    cy.get("#kt_filter_search").type(value).should("have.value", value);
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(2000);
  }

  btnTambahData() {
    cy.get('a[class*="btn btn-primary mt-5"]').click();
    cy.wait(1000);
  }

  setNameMenu(value) {
    cy.get('input[name="label_menu"]').type(value).should("have.value", value);
  }

  setTautan(value) {
    cy.get('input[name="tautan"]').type(value).should("have.value", value);
  }

  createMenu(name, tautan) {
    this.btnTambahData();
    this.setNameMenu(name);
    this.setTautan(tautan);
    cy.get('button[class*="btn btn-primary"]').eq(1).click();
    cy.wait(500);
  }

  update() {
    cy.get('i[class*="fas fa-edit"]').eq(0).click();
    cy.wait(500);
    cy.get('button[class*="btn btn-primary"]').eq(1).click();
    cy.wait(500);
  }

  detail() {
    cy.get('i[class*="fas fa-eye"]').eq(0).click();
    cy.wait(500);
  }

  delete() {
    cy.get('i[class*="fas fa-trash"]').eq(0).click();
    cy.wait(1000);
    cy.realPress("Enter");
  }
}

module.exports = new ProvinsiPage();
