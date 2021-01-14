import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

describe('重置教职工密码-指定密码', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
    cy.createrUser('JH001', '教职工001', '341227111111111111');
  });
  it('重置教职工密码-指定密码', () =>{
    //点击身份按钮
    identity()
    //查询用户JH001
    cy.wait(2000)
    cy.get('.ant-form-item-control').first().children().type('JH001');
    //点击查询按钮
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-source-st-sf > div.ruishan-st-sf > rs-query > div > div.query-div-right.ant-col-4 > div > ul > li > button'
      ).click();
    //点击详情按钮
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-list > div > rs-st > nz-table > div > nz-spin > div > div.ant-spin-container > div > div > div > div > div.ant-table-body.ng-star-inserted > table > tbody > tr:nth-child(1) > td.ant-table-td-right-sticky.ng-star-inserted > a:nth-child(5) > span > div'
      ).click({force:true});
    //输入指定的新密码
    cy.get('.ng-untouched.ng-pristine.ng-invalid.ant-input.ng-star-inserted').type('12345aA!');
    //点击确定按钮
    cy.get(".ant-modal-footer.ng-star-inserted").last().children().eq(1).click({force:true});
    //判断是否重置成功
    cy.get(
        '.ant-modal-confirm-title'
    ).children().should('have.text','修改密码成功');
    cy.dialogButton(0)   
  });
  after(() => {
    cy.deleteUser('JH001');
  });
  
  
});