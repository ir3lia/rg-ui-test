import { passWord, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

const labelButton = () => cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li:nth-child(3) > span'
  )
describe('修改标签分类', () => {
  before(() => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
  });
  it('修改标签分类成功', () => {
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
    labelButton().click({ force: true });
    cy.wait(1000)
    cy.get('.custom-node.category-node.ng-star-inserted').last().trigger('mouseover');
    cy.get('.operator.ng-star-inserted').last().children().eq(1).click({ force: true });
    cy.wait(1000)
    cy.get('.flex-end.ng-star-inserted').children('button').first().click({force:true});
    cy.contains('测试分类').should('have.text', ' 测试分类 ');

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
