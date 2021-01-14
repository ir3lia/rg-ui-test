import { passWord, ssoUrl, userName } from '../../support/common.po';

describe('手机端用户名密码认证', () => {
  beforeEach('前置条件', () => {
    cy.viewport('iphone-6');
    cy.visit(ssoUrl + '/logout');
    cy.visit('/logout');
  });
  it('认证成功', () => {
    cy.visit('/login');
    cy.title().should('contain', '统一身份认证平台');
    cy.get('body > app-root > div > app-login-normal > div > form > div:nth-child(1) > nz-input-group > input')
      .clear()
      .type(userName);
    cy.get(
      'body > app-root > div > app-login-normal > div > form > div:nth-child(2) > div > nz-input-group > input'
    ).type(passWord);
    cy.get(
      'body > app-root > div > app-login-normal > div > form > div.phone-normal-button.ant-row > div > button'
    ).click();
    cy.title().should('contain', '个人中心');
  });
  it('用户名不存在', () => {
    cy.visit('/login');
    cy.title().should('contain', '统一身份认证平台');
    cy.get('body > app-root > div > app-login-normal > div > form > div:nth-child(1) > nz-input-group > input')
      .clear()
      .type('1231313');
    cy.get(
      'body > app-root > div > app-login-normal > div > form > div:nth-child(2) > div > nz-input-group > input'
    ).type(passWord);
    cy.get(
      'body > app-root > div > app-login-normal > div > form > div.phone-normal-button.ant-row > div > button'
    ).click();
    cy.get('.phone-toast-class').should('have.text', ' 用户名或密码错误，请确认后重新输入 ');
  });
  it('密码错误', () => {
    cy.visit('/login');
    cy.title().should('contain', '统一身份认证平台');
    cy.get('body > app-root > div > app-login-normal > div > form > div:nth-child(1) > nz-input-group > input')
      .clear()
      .type(userName);
    cy.get(
      'body > app-root > div > app-login-normal > div > form > div:nth-child(2) > div > nz-input-group > input'
    ).type('123131314');
    cy.get(
      'body > app-root > div > app-login-normal > div > form > div.phone-normal-button.ant-row > div > button'
    ).click();
    cy.get('.phone-toast-class').should('have.text', ' 用户名或密码错误，请确认后重新输入 ');
  });
});
