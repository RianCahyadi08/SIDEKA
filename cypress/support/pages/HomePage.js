class HomePage {
  accessHome() {
    cy.visit("https://portal.desa.id/sandbox/user/home");
    cy.get(
      'div[class*="card text-white rounded-2 px-6 py-6 d-flex flex-row justify-content-start align-items-center btn-report flex-wrap"]'
    )
      .eq(0)
      .should("be.visible");
    cy.realPress("Escape");
  }

  detailCountPemohon() {
    cy.get('i[class*="fas fa-eye"]').eq(0).click({ force: true });
    cy.wait(500);
    cy.realPress("Escape");
  }

  filter() {
    cy.get(
      'div[class*="el-select__wrapper is-filterable el-tooltip__trigger el-tooltip__trigger"]'
    ).click();
    cy.wait(500);
    cy.realPress("Enter");
    cy.realPress("Escape");
  }

  search(value, no) {
    cy.get('input[id*="kt_filter_search"]')
      .eq(no)
      .type(value)
      .should("have.value", value);
    cy.wait(500);
    cy.realPress("Escape");
  }

  btnExport(no) {
    cy.get('button[class*="btn btn-primary mr-2"]').eq(no).click();
    cy.wait(1000);
    cy.realPress("Escape");
  }

  tabStatusPemohonActive() {
    cy.get('a[class="nav-link"]').contains("Status Pemohon Aktif").click();
    cy.wait(1000);
    cy.realPress("Escape");
  }

  detailCountPermohonan() {
    cy.get('i[class*="fas fa-eye"]').eq(1).click();
    cy.wait(500);
    cy.realPress("Escape");
  }

  detailCountJenisIzin() {
    cy.get('i[class*="fas fa-eye"]').eq(2).click();
    cy.wait(500);
    cy.realPress("Escape");
  }

  detailCountPegawai() {
    cy.get('i[class*="fas fa-eye"]').eq(3).click();
    cy.wait(500);
    cy.realPress("Escape");
  }

  detailCountKota() {
    cy.get('i[class*="fas fa-eye"]').eq(4).click();
    cy.wait(500);
    cy.realPress("Escape");
  }

  detailCountPengguna() {
    cy.get('i[class*="fas fa-eye"]').eq(5).click();
    cy.wait(500);
    cy.realPress("Escape");
  }
}

module.exports = new HomePage();
