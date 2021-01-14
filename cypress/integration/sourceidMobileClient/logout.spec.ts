import { passWord, userName } from '../../support/common.po';

describe('手机端登出', () => {
    before('前置条件', () => {
        cy.mobileLogin(userName,passWord,"/login")
      });
    it('登出成功', () => {
        cy.title().should('contain', '个人中心');
        cy.get("body > app-root > app-main > div > div.btn-main-logout").click()
        cy.get("#phone-content > div:nth-child(2) > button").should("have.text","返回统一认证")
        cy.get("#phone-content > div:nth-child(2) > button").click()
        cy.title().should('contain', '统一身份认证平台');
    });
})