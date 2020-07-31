import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  checkForSearchInput(): Promise<boolean> {
    return element(by.id('query')).isDisplayed() as Promise<boolean>;
  }

  checkForSearchButton(): Promise<boolean> {
    return element(by.id('searchButton')).isDisplayed() as Promise<boolean>;
  }

  getSearchInput(){
    return element(by.id('query'));
  }

  getSearchButton() {
    return element(by.id('searchButton'));
  }

  getProductsElements() {
    return element.all(by.css('.productItem'));
  }

  getFirstProductDiscountElement() {
    return element(by.css('.productDiscount'));
  }
}
