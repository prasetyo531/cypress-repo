import { BASE_URLS } from "../../bdd/helper/route";
import { API_ENDPOINT } from "../../bdd/const/api";

export function loginAndSetTokenViaAPI() {
  return cy.request({
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
    cy.log("Auth Response:", JSON.stringify(authRes.body));
    const token = authRes.body.token;
    expect(token, "Auth token exists").to.exist;

    return cy.request({
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
      const finalToken = loginRes.body.token;
      const role = loginRes.body.actions_rule.message;

      expect(finalToken, "Final token exists from new-login").to.exist;

      return cy.window().then((win) => {
        win.localStorage.setItem("bf-token", finalToken);
        win.localStorage.setItem("bf-role", role);

        expect(win.localStorage.getItem("bf-token")).to.equal(finalToken);
        expect(win.localStorage.getItem("bf-role")).to.equal(role);
      });
    });
  });
}
