
import { beforeEach } from 'mocha';

import { passWord, ssoUrl, userName } from '../../../../support/common.po';;
import {attestation} from '../../../../support/commonPath.po';

//认证菜单
export const authmethod = () =>cy.get('body > app-root > app-header-layout > div > div > div.title-menu > app-menu-list > div > ul > li:nth-child(4) > span')
//启用按钮
export const qybutoon = ()=>
  cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-phone-verification-code > section > article > article > section.security-content-form.status-content > form > article > section > nz-form-item > nz-form-control > div > span > button')
//保存按钮
  export const phonesavebutton = ()=>
  cy.get(  'body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-phone-verification-code > section > article > article > section.security-content-form.status-content > form > div > article.btnGroup > div > button.subBtn.btn.firstBtn.ant-btn.ant-btn-primary')
//停用按钮
 const offbutton=()=>cy.get('body > app-root > app-header-layout > div > app-menu-layout > div.layout-right-describe > div > app-phone-verification-code > section > article > article > section.security-content-form.status-content > form > article > section > nz-form-item > nz-form-control > div > span > button')
 
describe('配置认证方式', () => {
  beforeEach('登录sid管理端',()=>{
    cy.visit(ssoUrl+"/logout");//test
    cy.visit("/logout");
    cy.UsernamePasswordLogin(userName,passWord,"/linkid-admin")
  });
  it('配置手机验证码认证', () => {  
    //点击认证方式
    attestation().click();
    cy.contains('手机验证码认证').click();
    //cy.log(cy.get(".inl-block.config-status").text()) 这个取不到text属性，待分析
    cy.get(".inl-block.config-status").then($st=>{
      //如果是启用的话，则按停用按钮
      cy.log($st.text())
      if ($st.text()=="启用"){
        cy.log("now is on");
        cy.contains("停用").click({force:true});
        phonesavebutton().click({force:true}); //保存按钮
        cy.dialogButton(1);
      }else if ($st.text()=="停用"){
        //如果是启用的话，按停用按钮
         qybutoon().click({force:true});
         phonesavebutton().click({force:true});
         cy.dialogButton(0);
      }else{cy.log($st.text())}
    
    })
  })
});

