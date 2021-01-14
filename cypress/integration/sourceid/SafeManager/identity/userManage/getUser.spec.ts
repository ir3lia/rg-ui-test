import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

describe('查看用户', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
    cy.createrUser('JH001', '教职工001', '341227111111111111');
  });
  it('查看用户详情成功', () =>{
    //点击身份按钮
    identity()
    cy.wait(2000)
    //查询用户JH001
    cy.get('.ant-form-item-control').first().children().type("JH001");
    cy.wait(1000)
    //点击查询按钮
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-source-st-sf > div.ruishan-st-sf > rs-query > div > div.query-div-right.ant-col-4 > div > ul > li > button'
      ).click();
    //点击详情按钮
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-list > div > rs-st > nz-table > div > nz-spin > div > div.ant-spin-container > div > div > div > div > div.ant-table-body.ng-star-inserted > table > tbody > tr:nth-child(1) > td.ant-table-td-right-sticky.ng-star-inserted > a:nth-child(2) > span > div'
      ).click({force:true});
    //判断是否查看成功
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-detail > div > rs-person-detail > nz-spin > div > div.ant-spin-container > div.page-h2-group > div'
      ).should('have.text',' 教职工管理详情信息 ');

      
  });
  after(() => {
    cy.deleteUser('JH001');
  });
  
  
});