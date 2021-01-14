
import { passWord, ssoUrl, userName } from "../../../../../support/common.po";
import { identity } from "../../../../../support/commonPath.po";

//前置条件：登出管理端，用户名密码登录成功
describe('添加正式岗位', () => {
    beforeEach('前置条件', () => {
      cy.visit(ssoUrl + '/logout');
      cy.visit('/logout');
      cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
    });
  
  
  
  //用例：添加正式岗位
    it('添加正式岗位', () => {
      
      // 点击身份菜单
      identity();

      //点击正式岗位管理
     cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li:nth-child(5) > span').click()

     //点击正式岗位管理页面左上角+号
     cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-index > app-main-constructor > article > section.main-content.ant-row > div > div > h3 > span.icon-authentication-strategy-rule-add').click() 

     //输入岗位名称
     cy.get('#content-wrapper > section > article > app-form-build > form > section:nth-child(1) > div:nth-child(1) > nz-form-item > nz-form-control > div > span > input')
     .type('正科')

     //输入岗位编号
     cy.get('#content-wrapper > section > article > app-form-build > form > section:nth-child(1) > div:nth-child(2) > nz-form-item > nz-form-control > div > span > input')
     .type('zhengke0002')

     //点击请选择岗位类型下拉框
     cy.get('#content-wrapper > section > article > app-form-build > form > section:nth-child(2) > div:nth-child(1) > nz-form-item > nz-form-control > div > span > nz-tree-select > div > div > div')
     .click()

     //选择管理岗位
     cy.get('[class="ant-tree ant-tree-icon-hide ant-select-tree"]').eq(0).children().eq(1).click()

      //点击保存
     cy.get('#content-wrapper > section > article > app-form-build > form > div > article > button.ant-btn.ant-btn-primary').click()

     //点击正式岗位管理
     cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li:nth-child(5) > span').click()

      //选中添加的岗位
     cy.contains("正科").click({ force: true });

     //点击删除按钮
     cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-index > app-main-constructor > article > section.main-content.ant-row > article > h2 > h3 > button').click()

      //点击确认按钮
     cy.get('.ant-modal-confirm-btns').children().eq(1).click()
     
    
    });

  });
  