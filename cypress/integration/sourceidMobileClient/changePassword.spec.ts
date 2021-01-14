import { passWord, userName } from '../../support/common.po';

describe('手机自助单修改密码', () => {
  before('前置条件', () => {
    cy.mobileLogin(userName, passWord, '/login');
  });
  it('修改成功', () => {
    cy.viewport('iphone-6');
    cy.get('body > app-root > app-main > div > div:nth-child(4) > div:nth-child(1) > div.item-security-class').click();
    cy.get('#list-item > div.am-list-line > div.am-list-content > p').first().click({ force: true });
    cy.wait(1000);
    cy.get(
      'body > app-root > app-modify-password > div:nth-child(2) > section:nth-child(1) > list > div > article > div > app-input-password-eye > article > listitem > div.am-list-line > div.am-list-content > div > app-input-item > div > div.am-input-control > div > input'
    ).type(passWord);
    cy.get(
      'body > app-root > app-modify-password > div:nth-child(2) > section:nth-child(2) > list > div > article:nth-child(1) > div > app-input-password-eye > article > listitem > div.am-list-line > div.am-list-content > div > app-input-item > div > div.am-input-control > div > input'
    ).type(passWord);
    cy.get(
      'body > app-root > app-modify-password > div:nth-child(2) > section:nth-child(2) > list > div > article:nth-child(2) > div > app-input-password-eye > article > listitem > div.am-list-line > div.am-list-content > div > app-input-item > div > div.am-input-control > div > input'
    ).type(passWord);
    cy.contains('确定').click();
    cy.get('.success-page-title').should('have.text', '修改成功');
    cy.contains('返回登录').click();
  });
  it('原密码错误', () => {
    cy.wait(2000);
    cy.mobileLogin(userName, passWord, '/login');
    cy.get('body > app-root > app-main > div > div:nth-child(4) > div:nth-child(1) > div.item-security-class').click();
    cy.get('#list-item > div.am-list-line > div.am-list-content > p').first().click();
    cy.wait(1000);
    cy.get(
      'body > app-root > app-modify-password > div:nth-child(2) > section:nth-child(1) > list > div > article > div > app-input-password-eye > article > listitem > div.am-list-line > div.am-list-content > div > app-input-item > div > div.am-input-control > div > input'
    ).type('123456789');
    cy.get(
      'body > app-root > app-modify-password > div:nth-child(2) > section:nth-child(2) > list > div > article:nth-child(1) > div > app-input-password-eye > article > listitem > div.am-list-line > div.am-list-content > div > app-input-item > div > div.am-input-control > div > input'
    ).type(passWord);
    cy.get(
      'body > app-root > app-modify-password > div:nth-child(2) > section:nth-child(2) > list > div > article:nth-child(2) > div > app-input-password-eye > article > listitem > div.am-list-line > div.am-list-content > div > app-input-item > div > div.am-input-control > div > input'
    ).type(passWord);
    cy.contains('确定').click();
    cy.get('.am-toast-text-info').should('have.text', '原密码错误');
  });
  it('新密码与确认密码不一致', () => {
    cy.viewport('iphone-6');
    cy.visit('/cas-success-mobile/user-center/index');
    cy.get('body > app-root > app-main > div > div:nth-child(4) > div:nth-child(1) > div.item-security-class').click();
    cy.get('#list-item > div.am-list-line > div.am-list-content > p').first().click();
    cy.wait(1000);
    cy.get(
      'body > app-root > app-modify-password > div:nth-child(2) > section:nth-child(1) > list > div > article > div > app-input-password-eye > article > listitem > div.am-list-line > div.am-list-content > div > app-input-item > div > div.am-input-control > div > input'
    ).type(passWord);
    cy.get(
      'body > app-root > app-modify-password > div:nth-child(2) > section:nth-child(2) > list > div > article:nth-child(1) > div > app-input-password-eye > article > listitem > div.am-list-line > div.am-list-content > div > app-input-item > div > div.am-input-control > div > input'
    ).type('123456789');
    cy.get(
      'body > app-root > app-modify-password > div:nth-child(2) > section:nth-child(2) > list > div > article:nth-child(2) > div > app-input-password-eye > article > listitem > div.am-list-line > div.am-list-content > div > app-input-item > div > div.am-input-control > div > input'
    ).type(passWord);
    cy.contains('确定').click();
    cy.get('.am-toast-text-info').should('have.text', '确认密码与新密码不一致，请确认后重新输入');
  });
});
