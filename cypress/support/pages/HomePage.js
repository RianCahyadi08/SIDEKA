class HomePage {
  accessHome() {
    cy.visit("https://portal.desa.id/sandbox/user/home");
    cy.get(
      'div[class*="card text-white rounded-2 px-6 py-6 d-flex flex-row justify-content-start align-items-center btn-report flex-wrap"]'
    )
      .eq(0)
      .should("be.visible");
  }

  detailCountPemohon() {
    cy.get('i[class*="fas fa-eye"]').eq(0).click();
    cy.wait(500);
  }

  detailCountPermohonan() {
    cy.get('i[class*="fas fa-eye"]').eq(1).click();
    cy.wait(500);
  }

  detailCountJenisIzin() {
    cy.get('i[class*="fas fa-eye"]').eq(2).click();
    cy.wait(500);
  }

  detailCountPegawai() {
    cy.get('i[class*="fas fa-eye"]').eq(3).click();
    cy.wait(500);
  }

  detailCountKota() {
    cy.get('i[class*="fas fa-eye"]').eq(4).click();
    cy.wait(500);
  }

  detailCountPengguna() {
    cy.get('i[class*="fas fa-eye"]').eq(5).click();
    cy.wait(500);
  }
}

module.exports = new HomePage();
