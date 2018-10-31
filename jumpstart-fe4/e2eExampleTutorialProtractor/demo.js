describe('test suite', () => {
  it('shoul open google search and click on wiki', () => {
     browser.waitForAngularEnabled(false);
	 browser.get('https://google.com');
	 expect(browser.getTitle()).toEqual('Google');
	 element(by.id('lst-ib')).click();
    element(by.id('lst-ib')).sendKeys('Hamburg\n');

     //console.log(element.all(by.cssContainingText('.LC20lb', 'Wikipedia')).count());
    element.all(by.cssContainingText('.LC20lb', 'Wikipedia')).first().click();
	 browser.sleep(110000)
  });
});
