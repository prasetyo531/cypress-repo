// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { BASE_URLS } from '@helper/route';
import { API_ENDPOINT } from '@const/api';

Cypress.Commands.add("loginAndSetToken", () => {

  // Step 1: Authenticate
  cy.request({
    method: "POST",
    url: BASE_URLS.API_BIG_FLIP + API_ENDPOINT.big_web_api.auth,
    form: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: {
      email: "fliptech.test+legal01@gmail.com",
      password: "P@ssword1234",
      visitor_id: "DuMmYVisiTOr",
      request_id: "DuMmY.RequESt",
    },
  }).then((authRes) => {
    const token = authRes.body.token || authRes.body.data?.token;

    expect(token, "Auth token exists").to.exist;
    cy.log("auth exists"+ token);

    // Step 2: Call new-login with token
    cy.request({
      method: "POST",
      url: BASE_URLS.API_BIG_FLIP + API_ENDPOINT.big_web_api.nlogin,
      form: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: {
        company_id: "legal01",
        visitor_id: "DuMmYVisiTOr",
        request_id: "DuMmY.RequESt",
      },
    }).then((loginRes) => {
      const finalToken = loginRes.body.token || loginRes.body.data?.token;
      const role = loginRes.body.actions_rule.message || loginRes.body.data?.actions_rule.message;

      expect(finalToken, "Final token exists from new-login").to.exist;
      cy.log(finalToken);
      cy.log(role);

      cy.window().then((win) => {
        win.localStorage.setItem("bf-token", finalToken);
        win.localStorage.setItem("bf-role", role);

        expect(win.localStorage.getItem("bf-token")).to.equal(finalToken);
        expect(win.localStorage.getItem("bf-role")).to.equal(role);
    });
   });
  });
});

Cypress.Commands.add("loginAndSetToken", () => {

  // Step 1: Authenticate
  cy.request({
    method: "POST",
    url: BASE_URLS.API_BIG_FLIP + API_ENDPOINT.big_web_api.auth,
    form: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: {
      email: "fliptech.test+legal01@gmail.com",
      password: "P@ssword1234",
      visitor_id: "DuMmYVisiTOr",
      request_id: "DuMmY.RequESt",
    },
  }).then((authRes) => {
    const token = authRes.body.token || authRes.body.data?.token;

    expect(token, "Auth token exists").to.exist;
    cy.log("auth exists"+ token);

    // Step 2: Call new-login with token
    cy.request({
      method: "POST",
      url: BASE_URLS.API_BIG_FLIP + API_ENDPOINT.big_web_api.nlogin,
      form: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: {
        company_id: "legal01",
        visitor_id: "DuMmYVisiTOr",
        request_id: "DuMmY.RequESt",
      },
    }).then((loginRes) => {
      const finalToken = loginRes.body.token || loginRes.body.data?.token;
      const role = loginRes.body.actions_rule.message || loginRes.body.data?.actions_rule.message;

      expect(finalToken, "Final token exists from new-login").to.exist;
      cy.log(finalToken);
      cy.log(role);

      cy.window().then((win) => {
        win.localStorage.setItem("bf-token", finalToken);
        win.localStorage.setItem("bf-role", role);

        expect(win.localStorage.getItem("bf-token")).to.equal(finalToken);
        expect(win.localStorage.getItem("bf-role")).to.equal(role);
    });
   });
  });
});