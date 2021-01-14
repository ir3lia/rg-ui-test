import { passWord, ssoUrl, userName } from '../../../support/common.po';
import { securityCenterButton } from '../../../support/commonPath.po';

//定义元素变量：在上面定义一个元素作为变量，在用例中直接传入变量即可
export const changePasswordButton = () =>
  cy.get(
    'body > app-root > app-index > section > main > section > app-safecenter > article > section:nth-child(2) > article.modifyOpt > section.modify > a'
  );
export const oldPasswordInput = () =>
  cy.get(
    'body > app-root > app-index > section > main > section > app-modify-password-by-password > section > form > nz-form-item:nth-child(1) > nz-form-control > div > span > lib-password > nz-input-group > input'
  );
export const newPasswordInput = () =>
  cy.get(
    'body > app-root > app-index > section > main > section > app-modify-password-by-password > section > form > nz-form-item:nth-child(2) > nz-form-control > div > span > lib-password > nz-input-group > input'
  );
export const confirmPasswordInput = () =>
  cy.get(
    'body > app-root > app-index > section > main > section > app-modify-password-by-password > section > form > nz-form-item:nth-child(3) > nz-form-control > div > span > lib-password > nz-input-group > input'
  );
export const confirmButton = () =>
  cy.get(
    'body > app-root > app-index > section > main > section > app-modify-password-by-password > section > form > nz-form-item.labelRemoveCol.ant-row.ant-form-item > nz-form-control > div > span > article > lib-status-change-button > button'
  );

export const passwordButton = () => cy.get('.password-list-li-right').first();
describe('自助修改密码', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/login');
    // 用户名密码登录
    // 获取Cookies
    // cy.getCookies()
    //   .should('have.length', 5)
    //   .then(cookies => {
    //     expect(cookies[0]).to.have.property('name', 'isPortal');
    //     expect(cookies[1]).to.have.property('name', 'SESSION');
    //     expect(cookies[2]).to.have.property('name', 'TGC');
    //     expect(cookies[3]).to.have.property('name', 'rg_objectid');
    //     expect(cookies[4]).to.have.property('name', 'SESSION');
    //   });
  });

  it('修改成功', () => {
    securityCenterButton().click({force:true});
    changePasswordButton().click({force:true});
    passwordButton().click({force:true});
    oldPasswordInput().type(passWord);
    newPasswordInput().type('12345aA!');
    confirmPasswordInput().type('12345aA!');
    confirmButton().click({force:true});
    cy.get(
      'body > app-root > app-index > section > main > section > app-modifypasswordsuccess > app-success-page-template > article > section > h1'
    ).should('have.text', '修改成功');
    cy.get(
      'body > app-root > app-index > section > main > section > app-modifypasswordsuccess > app-success-page-template > article > section > p'
    ).should('have.text', ' 您的密码已经修改成功，请使用新密码重新登录账户。 ');
    cy.get(
      'body > app-root > app-index > section > main > section > app-modifypasswordsuccess > app-success-page-template > article > section > button'
    ).click({ force: true });
    // cy.visit("/logout")
    // cy.visit(ssoUrl+"/logout")
  });

  it('原密码错误', () => {
    //刷新浏览器
    cy.reload();
    //前面用例修改密码成功，已经登出，需要重新登录
    cy.UsernamePasswordLogin(userName, passWord, '/login');
    securityCenterButton().click({ force: true });
    changePasswordButton().click({force:true});
    passwordButton().click({force:true});
    oldPasswordInput().type('12345678');
    newPasswordInput().type('12345aA!');
    confirmPasswordInput().type('12345aA!');
    confirmButton().click({force:true});
    cy.get(
      'body > app-root > app-index > section > main > section > app-modify-password-by-password > section > form > nz-form-item.ant-row.ant-form-item.ant-form-item-with-help > nz-form-control > div > nz-form-explain > div > app-form-item-error-message > p > span'
    ).should('have.text', ' 原密码错误 ');
  });
  it('新密码与确认密码不一致', () => {
    securityCenterButton().click({force:true});
    changePasswordButton().click({force:true});
    passwordButton().click({force:true});
    oldPasswordInput().type(passWord);
    newPasswordInput().type('123456aA!');
    confirmPasswordInput().type('12345aA!');
    cy.get(
      'body > app-root > app-index > section > main > section > app-modify-password-by-password > section > form > nz-form-item.ant-row.ant-form-item.ant-form-item-with-help > nz-form-control > div > nz-form-explain > div > app-form-item-error-message > p > span'
    ).should('have.text', ' 确认密码与新密码不一致，请确认后重新输入 ');
  });
});
