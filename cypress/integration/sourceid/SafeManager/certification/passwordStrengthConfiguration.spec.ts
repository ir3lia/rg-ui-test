import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

describe('初始化密码规则配置', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
    cy.createrUser('JH0111', '教工0111', '111111111111111111');
  });
  it('初始化密码规则配置', () =>{
    //点击一级菜单认证
    cy.get(
        'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(4)'
        ).click();
    //点击二级菜单认证安全策略
    cy.contains("认证安全策略").click();
    //点击三级菜单密码按钮
    cy.contains("密码安全").click();
    cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-password-security > section > article > article > form > section.init_pwd_rule > article > nz-form-item:nth-child(4) > nz-form-control > div > span').type('111');
    //点击保存按钮
    cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-password-security > section > article > article > form > article.btnGroup > div > button.subBtn.btn.firstBtn.ant-btn.ant-btn-primary').click();
    //点击确定按钮
    cy.get(".ant-btn.ng-star-inserted.ant-btn-primary").last().click({force:true});
    //点击退出按钮
    cy.get('body > app-root > app-header-layout > div > div > div.title-user > div > button').click();
    cy.get('body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div:nth-child(1) > nz-input-group > input').clear()
    //输入用户名密码
    cy.get('body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div:nth-child(1) > nz-input-group > input').type('JH0111');
    cy.get('body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div:nth-child(2) > nz-input-group > input').type('111111');
    //点击登录
    cy.get('body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div.login-normal-button.ant-row > div > button').click();
    });
    after(() => {
      cy.deleteUser('JH0111');
    });
});