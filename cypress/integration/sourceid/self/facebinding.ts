import { passWord, userName } from "../../../support/common.po";

describe('刷脸绑定', () => {
    before('登录', () => {
      cy.UsernamePasswordLogin(userName, passWord, '/login');
    });
    it('绑定当前浏览器', () => {
        //点击安全中心
        cy.get('body > app-root > app-index > section > main > app-sidebar-self-service > nav > ul > li:nth-child(2)')
          .click();
        
        //点击刷脸绑定的“查看”按钮
        cy.get('body > app-root > app-index > section > main > section > app-safecenter > article > section:nth-child(4) > article.modifyOpt > section.modify > a')
          .click()
        cy.url().should('include', '/safe-center/face-bind');
        
        // //点击“绑定”按钮
        // cy.get('body > app-root > app-index > section > main > section > app-face-bind > article > article.other-devices > nz-table > div > nz-spin > div > div.ant-spin-container > div > div > div > div.ant-table-body > table > tbody > tr > td.operator > a > span')
        //   .click()
          


        // //新页面绑定
        // cy.visit('https://idyfl01.rghall.com.cn/public/sso/face-bind/?terminalName=Chrome&deviceName=Windows&objectId=5c7776dfedd9a9952b3b44c2&origin=https:%2F%2Fidyfl02.rghall.com.cn')

        // cy.get('body > app-root > div > div > div.modal-body > div > form > div:nth-child(1) > div.col-75 > input').clear().type('mydevice')
        // cy.get('#submit').click()
        // cy.get('#close').click()


        // cy.visit('/cas-success/safe-center/face-bind')

        // cy.reload()

        // cy.get('body > app-root > app-index > section > main > section > app-face-bind > article > article.current-devices > nz-table > div > nz-spin > div > div.ant-spin-container > div > div > div > div > table > tbody > tr > td.operator > a > span')
        //   .should('have.text','解绑')     
     
    });
});
  