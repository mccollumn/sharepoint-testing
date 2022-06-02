// @ts-check
/// <reference types="cypress" />

describe("SharePoint Video Tracking Testing", function () {
  const PAGE_URL =
    "https://webtrendsdev.sharepoint.com/sites/Video/SitePages/Hero.aspx";

  /**
   * Before visiting SharePoint, we first need to authenticate
   */
  before(() => {
    // cy.spAuth().visit(`${Cypress.env('appUrl')}`);

    cy.visitSP(PAGE_URL);
  });

  /**
   * After all tests
   */
  // after(() => {
  //   // Wait 1sec for the video
  //   cy.wait(1000);
  // });

  /**
   * Check if the homepage can be opened
   */
  it("Validate page title", () => {
    cy.title().should("eq", "Hero");
  });

  it("Confirm a page view event fired", () => {
    cy.intercept("*/dcs.gif*").as("dcsRequest");
    cy.wait("@dcsRequest").then((interception) => {
      assert.isNotNull(interception.response.body, "dcs request was made");
    });
  });
});
