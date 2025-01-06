import { Page } from 'playwright';

export class LoginPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  emailInput = () => this.page.locator('input#j_username');
  passwordInput = () => this.page.locator('input#j_password');
  submitButton = () => this.page.locator('button#submit');

  async goto() {
    await this.page.goto('https://www.ekupi.ba/bs/login');
  }
  async enterCredentials(email: string, password: string) {
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
  }
  async submitLogin() {
    await this.submitButton().click();
  }
  // enter valid credentials, i made this account with some random generated password and student mail
  // - ammar
  async validLogIn(){
    await this.enterCredentials('220302213@student.ius.edu.ba', 'nooglesnam_e');
    await this.submitLogin();
  }


  async isUserLoggedIn() {
    return await this.page.isVisible('text=Welcome');
  }
  // nema ovog :(
  async toggleRememberMe() {
    await this.page.check('#remember-me'); 
    
  }
  
}
