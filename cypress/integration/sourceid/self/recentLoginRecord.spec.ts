import { passWord, ssoUrl, userName } from '../../../support/common.po';
import { securityCenterButton } from '../../../support/commonPath.po';

export const checkRecentLoginRecord = () =>
  cy.get(
    'body > app-root > app-index > section > main > section > app-safecenter > article > section:nth-child(7) > article.modifyOpt > section.modify > a'
  );

describe('查看最近登录记录', () => {
  before('前置条件', () => {
    cy.UsernamePasswordLogin(userName, passWord, '/login');
  });
  it('点击加载更多', () => {
    securityCenterButton().click({force:true});
    checkRecentLoginRecord().click({force:true});
    //cy.wait('30000')
    cy.location('pathname', {timeout: 30000})
    //点击时间选择
    //cy.get(".ant-calendar-range-picker-input.ng-star-inserted").first().click()
    //输入日期
    // cy.get("#cdk-overlay-3 > div > date-range-popup > div > div > div > calendar-input > div > div > input").type("2020-11-04")
    // cy.get("body > app-root > app-index > section > main > section > app-login-log > section > div.log-content.ant-row > div > div:nth-child(2) > nz-date-picker > nz-picker > span > input").click()
    // cy.get("#cdk-overlay-4 > div > date-range-popup > div > div > div > calendar-input > div > div > input").type("2020-11-05")
    // cy.get("body > app-root > app-index > section > main > section > app-login-log > section > div.log-content.ant-row > div > div:nth-child(1) > button").click()
    //cy.scrollTo('bottom');
    cy.get(".ant-btn.ant-btn-primary").first().click()
  });
});
