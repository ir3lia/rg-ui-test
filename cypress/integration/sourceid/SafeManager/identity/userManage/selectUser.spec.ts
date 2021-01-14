import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

describe('查询用户', () => {
  before(() => {
    cy.createrUser('test20201214', '测试20201214', '360425199510212451');
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
  });
  it('查询用户成功', () => {
    //点击身份按钮
    identity();
    cy.wait(3000)
    cy.get('.ant-form-item-control').first().children().type("test20201214");
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-source-st-sf > div.ruishan-st-sf > rs-query > div > div.query-div-right.ant-col-4 > div > ul > li > button'
    ).click({force : true})
    //判断是否查询成功
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-list > div > rs-st > nz-table > div > nz-spin > div > div.ant-spin-container > div > div > div > div > div.ant-table-body.ng-star-inserted > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.ng-star-inserted'
      ).should('have.text','测试20201214');
  });
  after(() => {
    cy.deleteUser('test20201214');
  });
});
