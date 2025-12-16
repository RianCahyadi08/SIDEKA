class PeranPage {
  accessPage() {
    cy.visit("https://portal.desa.id/sandbox/user/peran");
    cy.wait(1000);
    cy.get('div[class*="header-text text-start"]').should("be.visible");
  }

  search(value) {
    cy.get("#kt_filter_search").type(value).should("have.value", value);
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(3000);
  }

  btnTambahData() {
    cy.get('i[class*="fas fa-plus text-white"]').click({ force: true });
    cy.wait(500);
  }

  setLabelPeran(value) {
    cy.get('input[name="label_peran"]').type(value).should("have.value", value);
  }

  setPathHome(value) {
    cy.get('input[name="home_path"]').type(value).should("have.value", value);
  }

  selectInstansi() {
    cy.get(
      'div[class*="el-select__selected-item el-select__placeholder is-transparent"]'
    ).click();
    cy.wait(1000);
    cy.realPress("Enter");
  }

  createPeran(namePeran, pathHome) {
    this.btnTambahData();
    this.setLabelPeran(namePeran);
    this.setPathHome(pathHome);
    this.selectInstansi();
    cy.get('button[class*="btn btn-primary mt-5"]').click();
    cy.wait(500);
  }

  update() {
    cy.get(
      'i[class*="far fa-edit text-info me-3 pe-auto el-tooltip__trigger el-tooltip__trigger"]'
    )
      .eq(0)
      .click();
    cy.wait(500);
    cy.get('button[class*="btn btn-primary mt-5"]').click();
    cy.wait(500);
  }

  detail() {
    cy.get(
      'i[class*="fas fa-eye text-primary me-3 pe-auto el-tooltip__trigger el-tooltip__trigger"]'
    )
      .eq(0)
      .click();
    cy.wait(500);
  }

  delete() {
    cy.get(
      'i[class*="far fa-trash-alt text-danger pe-auto el-tooltip__trigger el-tooltip__trigger"]'
    ).click();
    cy.wait(1000);
    cy.realPress("Enter");
  }
}

module.exports = new PeranPage();
