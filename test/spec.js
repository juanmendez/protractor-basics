/**
 http://www.protractortest.org/#/tutorial#step-0-write-a-test
 **/

describe('Protractor Demo App', ()=>{
    it('should have a title', ()=>{
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});