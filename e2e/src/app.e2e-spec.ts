import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display search form', () => {
    page.navigateTo();
    expect(page.checkForSearchButton()).toBeTruthy();
    expect(page.checkForSearchInput()).toBeTruthy();
  });

  it('Should do a simple by text', async () => {
    await page.navigateTo();
    await page.getSearchInput().clear()
    await page.getSearchInput().sendKeys('trcwl');
    await page.getSearchButton().click();
    expect(page.getProductsElements().count()).toBe(9);
  });

  it('Should do a simple search by id', async () => {
    await page.navigateTo();
    await page.getSearchInput().clear()
    await page.getSearchInput().sendKeys('618');
    await page.getSearchButton().click();
    expect(page.getProductsElements().count()).toBe(1);
    expect(page.getFirstProductDiscountElement()).toBeTruthy();
  });
  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
