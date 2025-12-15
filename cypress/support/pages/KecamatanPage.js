class KecamatanPage {
  accessPage() {
    cy.visit("https://portal.desa.id/sandbox/user/kecamatan");
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
    cy.get('button[class*="btn btn-primary"]').click();
    cy.wait(500);
  }

  select(param) {
    cy.get(
      'div[class*="el-select__selected-item el-select__placeholder is-transparent"]'
    )
      .eq(param)
      .click();
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
  }

  setKodeKec(value) {
    cy.get('input[placeholder*="Masukan Kode Daerah"]')
      .type(value)
      .should("have.value", value);
    cy.wait(500);
  }

  setNameKec(value) {
    cy.get('input[placeholder*="Masukan Nama Daerah"]')
      .type(value)
      .should("have.value", value);
    cy.wait(500);
  }

  createKec(no, kode, name) {
    this.btnTambahData();
    this.select(no);
    cy.realPress("Tab");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    this.setKodeKec(kode);
    this.setNameKec(name);
    cy.get('button[class*="btn btn-primary"]').eq(1).click();
    cy.wait(500);
  }

  update() {
    cy.get(
      'i[class*="far fa-edit text-info me-3 pe-auto el-tooltip__trigger el-tooltip__trigger"]'
    )
      .eq(0)
      .click();
    cy.wait(500);
    cy.get('button[class*="btn btn-primary"]').eq(1).click();
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

module.exports = new KecamatanPage();
