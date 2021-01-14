
describe('手机端用户名密码认证', () => {
    before('前置条件', () => {
      cy.createrUser("14242320","王丽莎","111111111111111111")
      });
    it("用户存在",()=>{
      cy.viewport("iphone-6")
      cy.visit("/login")
      cy.get("body > app-root > div > app-login-normal > div > form > div.phone-normal-action.action-color.ant-row > span").click()
      cy.get("body > app-root > app-phone-main > div > app-nav-bar > header > navbar > div.am-navbar-title > h1").should("have.text","找回密码")
      cy.get("body > app-root > app-phone-main > div > app-name > div.am-list > div > app-input-item > div > div.am-input-control > div > input").type("14242320")
      cy.get("body > app-root > app-phone-main > div > app-name > div.padding-content > button").click()
      cy.get("body > app-root > app-phone-main > div > app-way-of-find-back-pwd > div > div.header").should("have.text"," 请选择一种找回密码的方式 ")
    })
    it("用户不存在",()=>{
      cy.viewport("iphone-6")
      cy.visit("/login")
      cy.get("body > app-root > div > app-login-normal > div > form > div.phone-normal-action.action-color.ant-row > span").click()
      cy.get("body > app-root > app-phone-main > div > app-nav-bar > header > navbar > div.am-navbar-title > h1").should("have.text","找回密码")
      cy.get("body > app-root > app-phone-main > div > app-name > div.am-list > div > app-input-item > div > div.am-input-control > div > input").type("3424234")
      cy.get("body > app-root > app-phone-main > div > app-name > div.padding-content > button").click()
      cy.get(".am-toast-text-info").should("have.text","学工号不存在")
    })
    it("学工号输入为空",()=>{
      cy.viewport("iphone-6")
      cy.visit("/login")
      cy.get("body > app-root > div > app-login-normal > div > form > div.phone-normal-action.action-color.ant-row > span").click()
      cy.get("body > app-root > app-phone-main > div > app-nav-bar > header > navbar > div.am-navbar-title > h1").should("have.text","找回密码")
      cy.get("body > app-root > app-phone-main > div > app-name > div.padding-content > button").click()
      cy.get(".am-toast-text-info").should("have.text","请输入学工号")
    })
    after("后置条件", () => {
      cy.deleteUser("14242320")
      });
})