export const BASE_URLS = {
    BIG_FLIP: Cypress.env('base_url'),
    API_BIG_FLIP: Cypress.env('api_base_url')
  };
  
  /******** Visit ********/
  export function visit(routes) {
    cy.visit(routes);
  }
  
  /******** Visit per Site ********/
  export function visitWeb(routes) {
    cy.visit(BASE_URLS.BIG_FLIP + routes);
  }

  export function visitApi(routes) {
    cy.visit(BASE_URLS.API_BIG_FLIP + routes);
  }
  
  /******** Reload Location ********/
  export function reload() {
    cy.reload();
  }
  
  export function forceReload() {
    cy.reload(true);
  }
  