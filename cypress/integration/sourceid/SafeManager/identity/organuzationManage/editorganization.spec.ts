import { passWord, ssoUrl, userName } from '../../../../../support/common.po';
import { identity } from '../../../../../support/commonPath.po';

//定义元素变量：在上面定义一个元素作为变量，在用例中直接传入变量即可
//点击二级菜单组织管理
const ClickOrganizationManagement = () =>
  cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-left-menu > app-menu-list > div > ul > li:nth-child(4) > span'
  );
//输入组织名称
const EnterOrganizationName = () =>
cy.get(
  '#content-wrapper > section > app-org-index > article > app-form-build > form > section:nth-child(1) > div:nth-child(1) > nz-form-item > nz-form-control > div > span > input'
);
//输入组织编号
const EnterOrganizationNumber = () =>
cy.get(
  '#content-wrapper > section > app-org-index > article > app-form-build > form > section:nth-child(1) > div:nth-child(2) > nz-form-item > nz-form-control > div > span > input'
);
//输入组织职责
const InputOrganizationalResponsibilities = () =>
cy.get(
  '#content-wrapper > section > app-org-index > article > app-form-build > form > nz-form-item > nz-form-control > div > span > lib-textarea > div > textarea'
);
//点击“保存”按钮
const clickbutton1 = () =>
  cy.get(
    '#content-wrapper > section > app-org-index > article > app-form-build > form > div > article > button.ant-btn.ant-btn-primary'
  );
//点击“删除”按钮
const deletebutton = () =>
  cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-list > app-main-constructor > article > section.main-content.ant-row > article > h2 > h3 > div.btn-list > button:nth-child(2)'
  );
//点击“编辑”按钮
const editbutton = () =>
  cy.get(
    'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-list > app-main-constructor > article > section.main-content.ant-row > article > h2 > h3 > div.btn-list > button.ant-btn.ant-btn-primary.ng-star-inserted'
  );
//点击“基本信息编辑”按钮
const messageeditbutton = () =>
  cy.get(
    '#content-wrapper > section > app-org-index > article.basic-info.ng-star-inserted > h3 > i'
  );


  
//前置条件：登出、输入用户名密码登录、添加“上海研发中心”手工定义组织
describe('编辑手工定义组织成功', () => {
  before('前置条件', () => {
    cy.UsernamePasswordLogin(userName, passWord, '/linkid-admin');
   
  });
  before("",()=>{
    cy.createorganization('上海研发中心', '官方', 'SHYFZX', 'manual', '上海研发中心负责SID产品的研发与测试');
  })

//用例：编辑手工定义组织
  it('编辑手工定义组织成功', () => {
    
    identity();
    ClickOrganizationManagement().click();
    cy.get(' body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-list > app-main-constructor > article > section.main-content.ant-row > div > div > section > div > ul').click();
    cy.contains("上海研发中心").click({ force: true });
    editbutton().click();
    messageeditbutton().click();
    EnterOrganizationName().clear();
    EnterOrganizationName().type('测试组织');
    EnterOrganizationNumber().clear();
    EnterOrganizationNumber().type('CSZZ'); 
    cy.locateElementsBasedOnContent('请选择组织类别');
    cy.selectThedropDownBox(0);
    InputOrganizationalResponsibilities().clear();
    InputOrganizationalResponsibilities().type('这是测试组织，主要用来测试功能是否正常，站在用户角度验收功能');
    clickbutton1().click();

    
  });
  after('后置条件',()=>{
    //后置条件：删除添加的组织
    ClickOrganizationManagement().click();
    cy.contains("测试组织").click({ force: true });
    deletebutton().click();
    cy.dialogButton(1);
    cy.dialogButton(0);
  })
});
