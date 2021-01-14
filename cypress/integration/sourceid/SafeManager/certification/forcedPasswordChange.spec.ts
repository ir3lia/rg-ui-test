import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

describe('强制修改密码策略', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
    cy.createrUser('JH0111', '教工0111', '111111111111111111');
  });
  it('强制修改密码策略', () =>{
    //点击一级菜单认证
    cy.get(
        'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(4)'
        ).click();
    //点击二级菜单认证安全策略
    cy.contains("认证安全策略").click();
    //点击三级菜单密码按钮
    cy.contains("密码安全").click();
    cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-password-security > section > article > article > form > section.init_pwd_rule > article > nz-form-item:nth-child(4) > nz-form-control > div > span').type('111');
    //点击开启强制修改密码
    cy.get(".ant-radio-inner").eq(21).click({force:true});
    //点击保存
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
    //判断是否是修改密码页面
    cy.get(
        'body > app-root > app-web-main > div > div.password-content > div > app-web-change > div.password-title.ant-row > div'
        ).should('have.text',' 修改密码 ');
    //输入原密码、新密码、确认密码
    cy.get('.ant-form-item-children').first().type('111111');
    cy.get('.ant-form-item-children').eq(1).type('12345aA!');
    cy.get('.ant-form-item-children').last().type('12345aA!');
    //点击确定
    cy.contains('提交').click();
    //点击重新登录按钮
    cy.contains(' 重新登录').click();
    // cy.get('body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div:nth-child(1) > nz-input-group > input').clear()
    // //输入管理员账号密码
    // cy.get('body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div:nth-child(1) > nz-input-group > input').type('admin');
    // cy.get('body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div:nth-child(2) > nz-input-group > input').type('12345aA!');
    // //点击登录
    // cy.get('body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div.login-normal-button.ant-row > div > button').click();
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
    cy.get(
        'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(4)'
        ).click();
    //点击二级菜单认证安全策略
    cy.contains("认证安全策略").click();
    //点击三级菜单密码按钮
    cy.contains("密码安全").click();
    //关闭强制修改密码策略
    cy.get(".ant-radio-inner").eq(22).click({force:true});
    //点击保存
    cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-password-security > section > article > article > form > article.btnGroup > div > button.subBtn.btn.firstBtn.ant-btn.ant-btn-primary').click();
    //点击确定按钮
    cy.get(".ant-btn.ng-star-inserted.ant-btn-primary").last().click({force:true});

  });
  after(() => {
    cy.deleteUser('JH0111');
  });

});