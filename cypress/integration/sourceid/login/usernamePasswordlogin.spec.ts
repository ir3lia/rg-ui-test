import { beforeEach } from 'mocha';

import { passWord, ssoUrl, userName } from '../../../support/common.po';
import { getPassWordInput, getUserNameInput, loginButton } from '../../../support/commonPath.po';

describe('用户名密码认证成功', () => {
  beforeEach('前置条件',()=>{
    cy.visit(ssoUrl+"/logout")
    cy.visit("/logout")
  });
  it('登录成功，跳转到自助页面', () => {  
    //访问浏览器，输入地址，默认地址在
    cy.visit('/login');
    cy.title().should('contain', '统一身份认证平台');
    getUserNameInput().clear().type(userName).should('have.value', userName);
    getPassWordInput().type(passWord);
    loginButton().click({ force: true });
    cy.url().should('include', '/cas-success/user-center/user-info');
  });
  it('用户名密码错误', () => {
    cy.visit('/login');
    cy.title().should('contain', '统一身份认证平台');
    getUserNameInput().clear().type('1234567').should('have.value', '1234567');
    getPassWordInput().type('123123');
    loginButton().click({ force: true });
    cy.get('.error-msg').should('contain', '用户名或密码错误，请确认后重新输入');
  });
});
