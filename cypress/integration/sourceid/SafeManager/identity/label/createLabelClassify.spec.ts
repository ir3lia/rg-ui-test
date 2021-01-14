import { passWord, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';
const labelButton = () => cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li:nth-child(3) > span'
  )
describe('添加标签分类', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
  });
  it('添加标签分类成功', () => {
    cy.allure().owner("liaofeifei")
    cy.wait(1000);
    //点击身份按钮
    identity();
    labelButton().click();
    //点击新增分类按钮
    cy.get('.button-list').children().first().click();
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('测试分类');
    cy.get('.flex-end.ng-star-inserted').children('button').first().click();
    cy.contains('测试分类').should('have.text', ' 测试分类 ');
  });
  it('标签分类已存在', () => {
    labelButton().click();
    cy.allure().owner("liaofeifei")
    cy.wait(1000);
    //点击新增分类按钮
    cy.get('.button-list').children().first().click();
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('测试分类');
    cy.get('.flex-end.ng-star-inserted').children('button').first().click();
    cy.contains('测试分类').should('have.text', ' 测试分类 ');
    cy.get('.button-list').children().first().click();
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('测试分类');
    cy.get('.flex-end.ng-star-inserted').children('button').first().click();
    cy.get('.icon-net-error').next().should('have.text', ' 标签分类名称测试分类已存在,请重新输入 ');
  });
  it('标签分类名称为空', () => {
    cy.allure().owner("liaofeifei")
    labelButton().click();
    cy.wait(1000);
    //点击新增分类按钮
    cy.get('.button-list').children().first().click();
    cy.get('.flex-end.ng-star-inserted').children('button').first().click();
    cy.get('.icon-net-error').next().should('have.text', ' 请输入分类名称 ');
  });
  it('标签分类名称只允许输入20个字符', () => {
    cy.allure().owner("liaofeifei")
    //identity()
    labelButton().click();
    cy.wait(1000);
    //点击新增分类按钮
    cy.get('.button-list').children().first().click();
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('发挥教师的和封建时代和封建时代和附件是飞非').should('have.value', "发挥教师的和封建时代和封建时代和附件是飞");
  });
  afterEach('删除标签分类', () => {
    //点击身份按钮
    cy.visit('/linkid-admin');
    cy.wait(2000);
    identity();
    cy.wait(1000);
    labelButton().click({ force: true });
    cy.wait(2000);
    cy.get('.text-ellipse.node-text-link.inl-block.ng-star-inserted')
      .last()
      .then($ts => {
        if ($ts.text().includes('测试分类')) {
          cy.get('.custom-node.category-node.ng-star-inserted').last().trigger('mouseover');
          cy.get('.icon-authentication-app-delete').last().click({ force: true });
          cy.dialogButton(1);
          cy.wait(1000);
          cy.get('.ant-modal-confirm-title').children().first().should('have.text', '已删除标签分类');
          cy.dialogButton(0);
        } else {
          cy.log('无可删除分类');
        }
      });
  });
});
