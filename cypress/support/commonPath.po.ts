//登录前
//登录页面-用户名密码认证-用户名输入框
export const getUserNameInput = () =>
  cy.get(
    'body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div:nth-child(1) > nz-input-group > input'
  );
//登录页面-用户名密码认证-密码输入框
export const getPassWordInput = () =>
  cy.get(
    'body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div:nth-child(2) > nz-input-group > input'
  );
//登录页面-用户名密码认证-登录按钮
export const loginButton = () =>
  cy.get(
    'body > app-root > div > div.login-background > div.login-content > div > div.content-top > app-login-normal > div > form > div.login-normal-button.ant-row > div > button'
  );


//自助端
//自助端-一级菜单那-个人中心按钮
export const securityCenterButton = () =>
  cy.get(
    'body > app-root > app-index > section > main > app-sidebar-self-service > nav > ul > li:nth-child(2) > div > div > span'
  );
//自助端-一级菜单那-我的信息按钮
export const myMessage = () =>
  cy.get(
    'body > app-root > app-index > section > main > app-sidebar-self-service > nav > ul > li:nth-child(1) > div > div > span'
  );


//管理端
//管理端-一级菜单-首页按钮
export const homePage = () =>
  cy
    .get(
      'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(1)'
    )
    .click();
//管理端-一级菜单-标准按钮
export const standard = () =>
  cy
    .get(
      'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(2)'
    )
    .click();
//管理端-一级菜单-身份按钮
export const identity = () =>
  cy
    .get(
      'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(3) > span'
    )
    .click();
//管理端-一级菜单-认证按钮
export const attestation = () =>
  cy
    .get(
      'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(4)'
    )
    .click();
//管理端-一级菜单-授权按钮
export const authorization = () =>
  cy
    .get(
      'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(5)'
    )
    .click();
//管理端-一级菜单-对接按钮
export const buttJoint = () =>
  cy
    .get(
      'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(6)'
    )
    .click();
//管理端-一级菜单-faceid按钮
export const faceId = () =>
  cy
    .get(
      'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(7)'
    )
    .click();
//管理端-一级菜单-服务按钮
export const serve = () =>
  cy
    .get(
      'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(8)'
    )
    .click();
//管理端-一级菜单-运维按钮
export const operations = () =>
  cy
    .get(
      'body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(9)'
    )
    .click();

//管理端-一级菜单-身份-新增用户按钮
export const createUser = () =>
cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-preview-list > div:nth-child(1) > div > div.right.ant-col-18 > div > div:nth-child(2) > rs-user-manager > div > rs-source-st-sf > div.ruishan-st-sf-buttons > rs-operator-buttons > ul > li:nth-child(1) > rs-button > button')

  