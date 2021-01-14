declare namespace Cypress {
    interface Chainable<Subject> {
        UsernamePasswordLogin(userName: string, password: string,url: string): void;
    }
  }
declare namespace Cypress {
    interface Chainable<Subject> {
        mobileLogin(userName: string, password: string,url: string): void;
    }
  }
declare namespace Cypress {
    interface Chainable<Subject> {
      selectThedropDownBox(num: number): void;
    }
  }
declare namespace Cypress {
    interface Chainable<Subject> {
      locateElementsBasedOnContent(content: string): void;
    }
  }
declare namespace Cypress {
    interface Chainable<Subject> {
      dialogButton(num: number): void;
    }
  }
declare namespace Cypress {
    interface Chainable<Subject> {
        createrUser(userId: string, name: string,iccard: string): void;
    }
  }
declare namespace Cypress {
    interface Chainable<Subject> {
        deleteUser(userId: string): void;
    }
  }
  declare namespace Cypress {
    interface Chainable<Subject> {
      createorganization(userId: string,category: string,code: string,definitionMode: string,duty: string,): void;
    }
  }