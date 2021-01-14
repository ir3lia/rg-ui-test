import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

//定义元素变量：在上面定义一个元素作为变量，在用例中直接传入变量即可
//点击二级菜单组织管理
const ClickOrganizationManagement = () =>
  cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li:nth-child(4) > span'
  );
//点击“删除”按钮
const deletebutton = () =>
cy.get(
  'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-list > app-main-constructor > article > section.main-content.ant-row > article > h2 > h3 > div.btn-list > button:nth-child(2)'
);


describe('查看手工定义组织成功', () => {
  beforeEach('前置条件', () => {
    cy.UsernamePasswordLogin('admin', '12345aA!', '/linkid-admin');
  });

  it('查看手工定义组织成功', () => {
    cy.createorganization('上海研发中心', '官方', 'SHYFZX', 'manual', '上海研发中心负责SID产品的研发与测试');
    identity();
    ClickOrganizationManagement().click();
    cy.get(' body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-list > app-main-constructor > article > section.main-content.ant-row > div > div > section > div > ul').click();
    cy.contains("上海研发中心").click({ force: true });
    deletebutton().click();
    cy.dialogButton(1);
    cy.dialogButton(0);
  });
});
