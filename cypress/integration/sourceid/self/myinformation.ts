import { passWord, userName } from '../../../support/common.po';


describe('查看我的信息', () => {
  before('登录', () => {
    cy.UsernamePasswordLogin(userName, passWord, '/login');
  });
  it('点击我的信息', () => {
    cy.get('body > app-root > app-index > section > main > app-sidebar-self-service > nav > ul > li:nth-child(1) > div > div > span')
      .click()

    cy.get('body > app-root > app-index > section > main > section > app-userinfo > article > section.user-info-box > h1')
    .should("have.text","基本信息")

    cy.get('body > app-root > app-index > section > main > section > app-userinfo > article > section.user-info-box > article > h1')
    .should("have.text"," 备注")
    
   
   
});
})
