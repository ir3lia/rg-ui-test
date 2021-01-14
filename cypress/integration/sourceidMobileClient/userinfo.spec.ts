import { passWord, userName } from '../../support/common.po';

describe('手机自助单修改密码', () => {
  before('前置条件', () => {
    cy.createrUser('14242320', '王丽莎', '111111111111111111');
    cy.mobileLogin('14242320', '111111', '/login');
  });
  it('获取成功', () => {
    cy.viewport('iphone-6');
    cy.get('.item-user-class').click();
    cy.get('.user-info-item-content').eq(0).should("have.text","14242320")
    cy.get('.user-info-item-content').eq(1).should("have.text","王丽莎")
    cy.get('.user-info-item-content').eq(2).should("have.text","男性")
    cy.get('.user-info-item-content').eq(3).should("have.text","2020/11/02")
  });
  after("",() => {
      cy.deleteUser("14242320")
  })
});
