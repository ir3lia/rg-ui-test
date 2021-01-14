import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { createUser, identity } from '../../../../../support/commonPath.po';

describe('添加用户', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
    cy.createrUser('test033', 'test033', '360425199510212451');
  });
  it('教职工添加用户成功', () => {
    //点击身份按钮
    identity()
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li.ng-tns-c7-2.ant-menu-submenu-open.ant-menu-submenu.ant-menu-submenu-selected.ant-menu-submenu-inline.ng-star-inserted > ul > ul > li.ant-menu-item-selected.ant-menu-item.ng-star-inserted > span'
    ).click();
    //点击新增用户按钮
    createUser().click()
    //输入工号
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(1) > div > nz-form-item > div > nz-form-control > div > span > input'
    ).type('test34');
    //输入姓名
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(3) > div > nz-form-item > div > nz-form-control > div > span > input'
    ).type('test34');
    //选择国籍
    cy.locateElementsBasedOnContent("请选择国籍")
    cy.selectThedropDownBox(0)
    //选择身份证件类型
    cy.locateElementsBasedOnContent("请选择身份证件类型")
    cy.selectThedropDownBox(0)
    //输入身份证号
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(8) > div > nz-form-item > div > nz-form-control > div > span > input'
    ).type('360425199510215486');
    //选择性别
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(9) > div > nz-form-item > div > nz-form-control > div > span > nz-radio-group > label:nth-child(1) > span.ant-radio > input'
    ).click();
    //选择日期
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(11) > div > nz-form-item > div > nz-form-control > div > span > nz-date-picker > nz-picker > span > input'
    ).click();
    cy.get('#cdk-overlay-20 > div > date-range-popup > div > div > div > calendar-input > div > div > input').type(
      '2020-11-04'
    );
    //选择政治面貌
    cy.locateElementsBasedOnContent("请选择政治面貌")
    cy.selectThedropDownBox(0)
    //输入移动电话
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(17) > div > nz-form-item > div > nz-form-control > div > span > input'
    ).type('12312312');
    //选择教职工状态
    cy.locateElementsBasedOnContent("请选择教职工状态")
    cy.selectThedropDownBox(0)
    //点击保存
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div.page-btn-margin-bottom.ant-row.ng-star-inserted > div:nth-child(2) > button.ant-btn.ant-btn-primary'
    ).click();
    //判断是否修改成功
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div.ng-star-inserted > rs-result > div > div:nth-child(2) > div > span'
    ).should('have.text', '开户成功');
  });

  it('学工号已存在', () => {
    //点击身份按钮
    identity()
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li.ng-tns-c7-2.ant-menu-submenu-open.ant-menu-submenu.ant-menu-submenu-selected.ant-menu-submenu-inline.ng-star-inserted > ul > ul > li.ant-menu-item-selected.ant-menu-item.ng-star-inserted > span'
    ).click();
    //点击新增用户按钮
    createUser().click({ force: true })
    //输入工号
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(1) > div > nz-form-item > div > nz-form-control > div > span > input'
    ).type('test033');
    //输入姓名
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(3) > div > nz-form-item > div > nz-form-control > div > span > input'
    ).type('test033');
    //选择国籍
    cy.locateElementsBasedOnContent("请选择国籍")
    cy.selectThedropDownBox(0)
    //选择身份证件类型
    cy.locateElementsBasedOnContent("请选择身份证件类型")
    cy.selectThedropDownBox(0)
    //输入身份证号
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(8) > div > nz-form-item > div > nz-form-control > div > span > input'
    ).type('360425199510215486');
    //选择性别
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(9) > div > nz-form-item > div > nz-form-control > div > span > nz-radio-group > label:nth-child(1) > span.ant-radio > input'
    ).click();
    //选择日期
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(11) > div > nz-form-item > div > nz-form-control > div > span > nz-date-picker > nz-picker > span > input'
    ).click();
    cy.get('#cdk-overlay-37 > div > date-range-popup > div > div > div > calendar-input > div > div > input').type(
      '2020-11-04'
    );
    //选择政治面貌
    cy.locateElementsBasedOnContent("请选择政治面貌")
    cy.selectThedropDownBox(0)
    //输入移动电话
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(17) > div > nz-form-item > div > nz-form-control > div > span > input'
    ).type('12312312');
    //选择教职工状态
    cy.locateElementsBasedOnContent("请选择教职工状态")
    cy.selectThedropDownBox(0)
    //点击保存
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div.page-btn-margin-bottom.ant-row.ng-star-inserted > div:nth-child(2) > button.ant-btn.ant-btn-primary'
    ).click();
    //判断是否修改成功
    cy.get(
      'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(2) > app-preview-edit > div > rs-form > nz-spin > div > div.ant-spin-container > div > div > form > div:nth-child(1) > div.page-group-body > div > rs-dynamic-form-cell:nth-child(1) > div > nz-form-item > div > nz-form-control > div > nz-form-explain > div'
    ).should('have.text', ' 工号已存在 ');
  });

  after(() => {
    cy.deleteUser('test033');
    cy.deleteUser('test34');
  });
});
