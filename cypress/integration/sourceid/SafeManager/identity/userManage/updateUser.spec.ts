import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

describe('修改用户', () => {
    before(() => {
      cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
      cy.createrUser('JH20201204', '教工20201204', '341227111111111111');
    });
    it('修改教职工',() =>{
        //点击身份
        identity()
        cy.get("body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li.ng-tns-c7-2.ant-menu-submenu-open.ant-menu-submenu.ant-menu-submenu-selected.ant-menu-submenu-inline.ng-star-inserted > ul > ul > li.ant-menu-item.ng-star-inserted.ant-menu-item-selected > span").click({force : true})
        cy.wait(1000)
        //输入工号
        cy.get('.ant-form-item-control').first().children().type("JH20201204");
        //点击查询按钮
        cy.get(
            'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-source-st-sf > div.ruishan-st-sf > rs-query > div > div.query-div-right.ant-col-4 > div > ul > li > button'
          ).click();
        //点击编辑按钮
        cy.get(
            'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list >    div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-list > div > rs-st > nz-table > div > nz-spin > div > div.ant-spin-container > div > div > div > div > div.ant-table-body.ng-star-inserted > table > tbody > tr:nth-child(1) > td.ant-table-td-right-sticky.ng-star-inserted > a:nth-child(3) > span > div'
          ).click({force:true});
        //点击提交按钮
        cy.get(
            'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div.page-btn-margin-bottom.ant-row.ng-star-inserted > div:nth-child(2) > button.ant-btn.ant-btn-primary'
            ).click();   
        //判断是否修改成功
        cy.get(
            'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div.ng-star-inserted > rs-result > div > div:nth-child(2) > div > span'
            ).should('have.text','编辑成功');
    });
    
        after(() => {
            cy.deleteUser('JH20201204');
    });
});