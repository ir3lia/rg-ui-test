import { passWord, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

const labelButton = () =>
  cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li:nth-child(3) > span'
  );
describe('新增标签', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
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
  
  it('新增标签成功', () => {
    cy.allure().owner("liaofeifei")
    cy.get('.button-list').children().last().click({ force: true });
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('测试标签');
    cy.contains('请选择归属部门').click({ force: true });
    cy.get('[role="tree"]').eq(3).children().first().children().click();
    cy.contains('请选择所属分类').click({ force: true });
    cy.get('[role="tree"]').eq(4).children().last().children().click();
    cy.contains('保存').click({ force: true });
    cy.get('.ant-modal-confirm-title').children().should('have.text', '标签基本信息保存成功');
    cy.dialogButton(0);
    cy.wait(1000)
    cy.get('.text-ellipse.node-text-link.inl-block.ng-star-inserted').last().should('have.text', ' 测试标签 ');
  });
  it('标签已存在', () => {
    cy.allure().owner("liaofeifei")
    cy.get('.button-list').children().last().click({ force: true });
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('测试标签');
    cy.contains('请选择归属部门').click({ force: true });
    cy.get('[role="tree"]').eq(3).children().first().children().click();
    cy.contains('请选择所属分类').click({ force: true });
    cy.get('[role="tree"]').eq(4).children().last().children().click();
    cy.contains('保存').click({ force: true });
    cy.get('.ant-modal-confirm-title').children().should('have.text', '标签基本信息保存成功');
    cy.dialogButton(0);
    cy.wait(1000)
    cy.get('.text-ellipse.node-text-link.inl-block.ng-star-inserted').last().should('have.text', ' 测试标签 ');

    cy.get('.button-list').children().last().click({ force: true });
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('测试标签');
    cy.contains('请选择归属部门').click({ force: true });
    cy.get('[role="tree"]').eq(3).children().first().children().click();
    cy.contains('请选择所属分类').click({ force: true });
    cy.get('[role="tree"]').eq(4).children().last().children().click();
    cy.contains('保存').click({ force: true });
    cy.get('.icon-net-error').next().should('have.text', ' 标签名重复，请重新输入。 ');
  });
  it('标签名称为空', () => {
    cy.allure().owner("liaofeifei")
    labelButton().click({force:true});
    cy.get('.button-list').children().last().click({ force: true });
    cy.contains('请选择归属部门').click({ force: true });
    cy.get('[role="tree"]').eq(3).children().first().children().click();
    cy.contains('请选择所属分类').click({ force: true });
    cy.get('[role="tree"]').eq(4).children().last().children().click();
    cy.contains('保存').click({ force: true });
    cy.get('.icon-net-error').next().should('have.text', ' 请输入标签名称 ');
  });
  it('所属部门为空', () => {
    cy.allure().owner("liaofeifei")
    labelButton().click({force:true});
    cy.get('.button-list').children().last().click({ force: true });
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('测试标签');
    cy.contains('请选择所属分类').click({ force: true });
    cy.get('[role="tree"]').eq(4).children().last().children().click();
    cy.contains('保存').click({ force: true });
    cy.get('.icon-net-error').next().should('have.text', ' 请选择归属部门 ');
  });
  it('所属分类为空', () => {
    cy.allure().owner("liaofeifei")
    labelButton().click({force:true});
    cy.get('.button-list').children().last().click({ force: true });
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('测试标签');
    cy.contains('请选择归属部门').click({ force: true });
    cy.get('[role="tree"]').eq(3).children().first().children().click();
    cy.contains('保存').click({ force: true });
    cy.get('.icon-net-error').next().should('have.text', ' 请选择所属分类 ');
  });
  it('标签名称只允许输入20个字符', () => {
    cy.allure().owner("liaofeifei")
    labelButton().click({force:true});
    cy.get('.button-list').children().last().click({ force: true });
    cy.wait(1000)
    cy.get('.ant-input.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted').type('发挥教师的和封建时代和封建时代和附件是飞非').should("have.value","发挥教师的和封建时代和封建时代和附件是飞");
  });
  
  after('删除标签分类', () => {
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
          cy.log('无可删除标签分类');
        }
      });
  });
  afterEach('删除标签', () => {
    cy.get('.text-ellipse.node-text-link.inl-block.ng-star-inserted')
      .last()
      .then($ts => {
        if ($ts.text().includes('测试标签')) {
          cy.get('.text-ellipse.node-text-link.inl-block.ng-star-inserted').last().click({ force: true });
          cy.get('.ant-btn.ng-star-inserted').first().click({ force: true });
          cy.dialogButton(1);
          cy.wait(1000);
          cy.get('.ant-modal-confirm-title').children().first().should('have.text', '标签已删除成功！');
          cy.dialogButton(0);
        } else {
            cy.log('无可删除标签');
          }
      });
  });
});
