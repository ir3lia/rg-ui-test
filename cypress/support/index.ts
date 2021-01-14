import '@shelex/cypress-allure-plugin';
import './commands';

//忽略页面本身存在的未处理异常
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
//缓存cookic，避免每个用户都需要登录
Cypress.Cookies.defaults({
  preserve: ['isPortal', 'SESSION', 'rg_objectid', 'TGC', 'SESSION']
});
