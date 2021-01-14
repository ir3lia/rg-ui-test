import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

describe('删除用户', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
    cy.createrUser('test20201210', 'test20201210', '360425199510212451');
  });
  it('删除用户成功', () =>{
    //点击身份按钮
    identity()
    cy.get("body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li.ng-tns-c7-2.ant-menu-submenu-open.ant-menu-submenu.ant-menu-submenu-selected.ant-menu-submenu-inline.ng-star-inserted > ul > ul > li.ant-menu-item.ng-star-inserted.ant-menu-item-selected > span").click({force : true})
    cy.wait(1000)
    //输入查询条件学工号
    cy.get('.ant-form-item-control').first().children().type('test20201210');
    //点击查询按钮
    cy.get(
      "body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-source-st-sf > div.ruishan-st-sf > rs-query > div > div.query-div-right.ant-col-4 > div > ul > li > button"
      ).click();
    //点击删除按钮
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-list > div > rs-st > nz-table > div > nz-spin > div > div.ant-spin-container > div > div > div > div > div.ant-table-body.ng-star-inserted > table > tbody > tr:nth-child(1) > td.ant-table-td-right-sticky.ng-star-inserted > a:nth-child(4) > span > div'
      ).click({force:true});
      cy.wait(1000)
    //点击删除提示框确定
    cy.get(
      '#cdk-overlay-8 > nz-modal > div > div.ant-modal-wrap.modal-md > div.ant-modal.ant-modal-confirm.ant-modal-confirm-warning > div > div > div > div.ant-modal-confirm-btns > button.ant-btn.ng-star-inserted.ant-btn-primary'
      ).click();
    //判断是否删除成功
    cy.get(
      '#cdk-overlay-9 > nz-modal > div > div.ant-modal-wrap > div.ant-modal.ant-modal-confirm.ant-modal-confirm-success > div > div > div > div.ant-modal-confirm-body > span'
      ).should('have.text','删除成功');
  })

});