class StrukturInstansiPage {
  accessPage() {
    cy.visit("https://portal.desa.id/sandbox/user/unit");
    cy.wait(1000);
    cy.get(
      'div[class*="col-md-12 col-lg-4 bg-white p-8 rounded shadow mb-4"]'
    ).should("be.visible");
  }

  search(value) {
    cy.get("#kt_filter_search").type(value).should("have.value", value);
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(3000);
  }

  create(name, kode) {
    cy.get('button[class*="btn btn-primary mt-5"]').click();
    cy.wait(500);
    cy.get('input[placeholder*="Masukan nama Instansi"]')
      .type(name)
      .should("have.value", name);
    cy.get('input[placeholder*="Masukan Kode Instansi"]')
      .type(kode)
      .should("have.value", kode);
    cy.get(
      'div[class*="el-select__selected-item el-select__placeholder is-transparent"]'
    )
      .eq(0)
      .click();
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    cy.realPress("Tab");
    cy.wait(500);
    cy.realPress("Tab");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
  }

  update() {
    cy.get(
      'button[class*="btn btn-sm btn-icon btn-bg-transparent btn-active-color-primary"]'
    )
      .eq(0)
      .click();
    cy.wait(500);
    cy.get('button[class*="btn btn-primary"]').eq(1).click();
    cy.wait(500);
  }

  detail() {
    cy.get(
      'button[class*="btn btn-sm btn-icon btn-bg-transparent btn-active-color-primary"]'
    )
      .eq(1)
      .click();
    cy.wait(500);
    cy.get(
      'h5[class*="modal-title text-uppercase text-start text-white"]'
    ).should("be.visible");
  }
}

module.exports = new StrukturInstansiPage();
