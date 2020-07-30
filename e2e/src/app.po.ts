import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  checkForSearchInput() {
    return element(by.id('query')).isDisplayed();
  }

  checkForSearchButton() {
    return element(by.id('searchButton')).isDisplayed();
  }

  getSearchInput() {
    return element(by.id('query'))
  }

  getSearchButton() {
    return element(by.id('searchButton'))
  }

  getProductsElements() {
    return element.all(by.css('.productItem'));
  }

  getFirstProductDiscountElement() {
    return element(by.css('.productDiscount'));
  }
}
