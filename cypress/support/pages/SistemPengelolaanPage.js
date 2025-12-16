class SistemPengelolaanPage {
  accessPage() {
    cy.visit("https://portal.desa.id/sandbox/user/cms-landing-page");
    cy.wait(4000);
    cy.get('div[class*="header-text text-start"]').should("be.visible");
  }

  search(value) {
    cy.get("#kt_filter_search").type(value).should("have.value", value);
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(3000);
  }

  update() {
    cy.get('i[class*="far fa-edit text-success me-3 pe-auto"]').eq(0).click();
    cy.wait(500);
    cy.get('button[class*="el-button el-button--primary"]').click();
    cy.wait(500);
  }

  kelola() {
    cy.get('button[class*="btn btn-icon btn-sm hover-scale"]').eq(1).click();
    cy.wait(1000);
  }

  updateKelola() {
    this.kelola();
    cy.get('i[class*="far fa-edit text-success me-3 pe-auto"]').click();
    cy.wait(500);
    cy.get('button[class*="el-button el-button--primary"]').eq(1).click();
    cy.wait(500);
  }

  deleteKelola() {
    this.kelola();
    cy.wait(500);
    cy.get(
      'button[class*="btn btn-icon btn-sm hover-scale el-tooltip__trigger el-tooltip__trigger"]'
    )
      .eq(1)
      .click();
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
      'button[class*="btn btn-icon btn-sm hover-scale el-tooltip__trigger el-tooltip__trigger"]'
    )
      .eq(3)
      .click();
    cy.wait(500);
  }
}

module.exports = new SistemPengelolaanPage();
