import { ssoUrl } from '../support/common.po';
import { getPassWordInput, getUserNameInput, loginButton } from './commonPath.po';

//sourceid login
Cypress.Commands.add('UsernamePasswordLogin', (userName, password, url) => {
  cy.visit(url);
  // 验证title
  cy.title().should('contain', '统一身份认证平台');
  //输入用户名
  getUserNameInput().clear().type(userName).should('have.value', userName);
  //输入密码
  getPassWordInput().type(password);
  //登录
  loginButton().click({ force: true });
  //获取验证跳转url，并验证跳转是否正确
  //cy.url().should('include', '/cas-success/user-center/user-info');
});
//手机端认证
Cypress.Commands.add('mobileLogin', (userName, password, url) => {
  cy.viewport("iphone-6")
  cy.visit(url);
  cy.title().should('contain', '统一身份认证平台');
  cy.get('body > app-root > div > app-login-normal > div > form > div:nth-child(1) > nz-input-group > input')
    .clear()
    .type(userName);
  cy.get(
    'body > app-root > div > app-login-normal > div > form > div:nth-child(2) > div > nz-input-group > input'
  ).type(password);
  cy.get(
    'body > app-root > div > app-login-normal > div > form > div.phone-normal-button.ant-row > div > button'
  ).click();
});

//选择下拉浮框内容选择
//num参数：选择下拉框内第几个值，num从0开始
Cypress.Commands.add('selectThedropDownBox', num => {
  cy.get('[role="menu"]').last().children().eq(num).click({ force: true });
});

//根据文本内容定位元素
//content参数：定位元素的文本内容
//如：定位添加用户页面的国籍框元素：就传入请选择国籍"
Cypress.Commands.add('locateElementsBasedOnContent', content => {
  cy.contains(content).click({ force: true });
});

//对话弹框按钮定位
//num参数：标识从左到右第几个按钮，从0开始
Cypress.Commands.add('dialogButton', num => {
  cy.get('.ant-modal-confirm-btns').children().eq(num).click({ force: true });
});

//新增用户
Cypress.Commands.add('createrUser', (userId, name, idcard) => {
  cy.request(
    ssoUrl +
      '/oauth2.0/accessToken?grant_type=client_credentials&client_id=OC4wNS4wNS4wNy4wMC4wMy4wMS4wMS4w&client_secret=MC4wNC4wOC4wMi4wMS4wNi4wNC4wMy4w'
  )
    .its('body')
    .as('token')
    .then(function () {
      cy.log('api1 response body:');
      cy.log(JSON.stringify(this.token));
      cy.request({
        method: 'POST',
        url: '/linkid/api/aggregate/user/public/save',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token.access_token
        },
        body: {
          GH: userId,
          XM: name,
          GJ: '中国',
          XMPY: '',
          SFZJLXM: '居民身份证',
          CYM: '',
          IDCARD: idcard,
          XB: '男性',
          SFZJYXQ: '',
          CSRQ: '2020-11-02',
          ZZMM: '中国共产党党员',
          YDDH: '1111111111',
          DH: '',
          JZGZT: '在职',
          SZDW0: '',
          GWMC0: [],
          GZJS0: [],
          SFLBDM: '01',
          orgInfo: []
        }
      })
        .its('body')
        .as('post');
    })
    .then(function () {
      cy.log('api2 response body:');
      cy.log(JSON.stringify(this.post));
      expect(this.post.code).to.eq(200);
    });
});

//删除用户
Cypress.Commands.add('deleteUser', userId => {
  cy.request(
    ssoUrl +
      '/oauth2.0/accessToken?grant_type=client_credentials&client_id=OC4wNS4wNS4wNy4wMC4wMy4wMS4wMS4w&client_secret=MC4wNC4wOC4wMi4wMS4wNi4wNC4wMy4w'
  )
    .its('body')
    .as('token')
    .then(function () {
      cy.log('api1 response body:');
      cy.log(JSON.stringify(this.token));
      cy.request({
        method: 'DELETE',
        url: '/linkid/api/aggregate/user/public/user/' + userId,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token.access_token
        }
      })
        .its('body')
        .as('post');
    })
    .then(function () {
      cy.log('api2 response body:');
      cy.log(JSON.stringify(this.post));
      expect(this.post.code).to.eq(200);
      // .property('code').to.be.a('message')
    });
});

//新增组织
Cypress.Commands.add('createorganization', (name, category, code, definitionMode, duty) => {
  cy.request(
    ssoUrl +
      '/oauth2.0/accessToken?grant_type=client_credentials&client_id=OC4wNS4wNS4wNy4wMC4wMy4wMS4wMS4w&client_secret=MC4wNC4wOC4wMi4wMS4wNi4wNC4wMy4w'
  )
    .its('body')
    .as('token')
    .then(function () {
      cy.log('api1 response body:');
      cy.log(JSON.stringify(this.token));
      cy.request({
        method: 'POST',
        url: '/linkid/api/aggregate/organization/save',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token.access_token
        },
        body: {
          category: category,
          code: code,
          definitionMode: definitionMode,
          duty: duty,
          name: name
        }
      })
        .its('body')
        .as('post');
    })
    .then(function () {
      cy.log('api2 response body:');
      cy.log(JSON.stringify(this.post));
      expect(this.post.code).to.eq(200);
    });
});
