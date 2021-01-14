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
//点击“部门管理”按钮
const DepartmentManagementButton = () =>
  cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-list > app-main-constructor > article > section.main-content.ant-row > article > h2 > h3 > div.btn-list > button:nth-child(3)'
  );
//定位到新建组织“上海研发中心”
const Positioning = () =>
  cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-department-manage > app-main-constructor > article > section.main-content.ant-row > div > div > section > div > div > app-org-tree > nz-tree > ul > nz-tree-node > li'
  );
//点击部门右侧的“+”
const NewButtonsForDepartments = () =>
  cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-department-manage > app-main-constructor > article > section.main-content.ant-row > div > div > section > div > div > app-org-tree > nz-tree > ul > nz-tree-node > li > article > section.org-root-node-operator.operator > i'
  );
//填写部门名称
const DepartmentName = () =>
  cy.get(
    '#content-wrapper > div > app-org-index > article > app-form-build > form > section:nth-child(1) > div:nth-child(1) > nz-form-item > nz-form-control > div > span > input'
  );
//填写部门编号
const DepartmentNumber = () =>
  cy.get(
    '#content-wrapper > div > app-org-index > article > app-form-build > form > section:nth-child(2) > div:nth-child(1) > nz-form-item > nz-form-control > div > span > input'
  );
//填写办公地址
const DepartmentAddress = () =>
  cy.get(
    '#content-wrapper > div > app-org-index > article > app-form-build > form > section:nth-child(3) > div:nth-child(1) > nz-form-item > nz-form-control > div > span > input'
  );
//填写联系电话
const ContactPhoneNumber = () =>
  cy.get(
    '#content-wrapper > div > app-org-index > article > app-form-build > form > section:nth-child(3) > div:nth-child(2) > nz-form-item > nz-form-control > div > span > input'
  );
//填写部门职责
const Responsibilities = () =>
  cy.get(
    '#content-wrapper > div > app-org-index > article > app-form-build > form > nz-form-item > nz-form-control > div > span > lib-textarea > div > textarea'
  );
//保存新建部门按钮
const SaveTheDepartment = () =>
  cy.get(
    '#content-wrapper > div > app-org-index > article > app-form-build > form > div > article > button.ant-btn.ant-btn-primary'
  );
//部门编辑按钮
const EditorialDepartment = () =>
  cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-department-manage > app-main-constructor > article > section.main-content.ant-row > div > div > section > div > div > app-org-tree > nz-tree > ul > nz-tree-node > li > ul > nz-tree-node > li > article > section.operator > i.icon-authentication-app-edit.ng-star-inserted'
  );



describe('编辑部门成功', () => {
  before('前置条件', () => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
  });
  
  it('编辑部门成功', () => {

    cy.createorganization('上海研发中心', '官方', 'SHYFZX', 'manual', '上海研发中心负责SID产品的研发与测试');

    //添加部门
    identity();
    ClickOrganizationManagement().click();
    cy.get(' body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-list > app-main-constructor > article > section.main-content.ant-row > div > div > section > div > ul').click();
    cy.contains("上海研发中心").click({ force: true });
    DepartmentManagementButton().click();
    Positioning().click({ force: true });
    NewButtonsForDepartments().click();
    DepartmentName().type('后勤管理部');
    cy.locateElementsBasedOnContent('请选择部门类别');
    cy.selectThedropDownBox(1);
    DepartmentNumber().type('HQGLB');
    DepartmentAddress().type('上海市古宜路190号锐捷网络股份有限公司');
    ContactPhoneNumber().type('0913-3465122');
    Responsibilities().type('负责公司的后勤保障工作，人员管理等');
    SaveTheDepartment().click();


    //编辑部门
    cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-department-manage > app-main-constructor > article > section.main-content.ant-row > div > div > section > div > div > app-org-tree > nz-tree > ul > nz-tree-node > li > ul > nz-tree-node > li > article > section.info.cursor-pointer > div > a').click({ force: true });
    EditorialDepartment().click({ force: true });
    DepartmentName().clear();
    DepartmentName().type('理科学院保卫处');
    DepartmentNumber().clear();
    DepartmentNumber().type('LKXYBWC');
    SaveTheDepartment().click();

    //后置条件：删除添加的组织
    identity();
    ClickOrganizationManagement().click();
    cy.contains("上海研发中心").click({ force: true });
    deletebutton().click();
    cy.dialogButton(1);
    cy.dialogButton(0);
  });
});
