/**
 http://www.protractortest.org/#/tutorial#step-0-write-a-test
 **/

describe('angularjs homepage', function() {

    let faker;

    beforeAll(()=>{
        faker = require('faker');
    });

    it('should match title', function() {
        // Load the AngularJS homepage.
        browser.get('http://localhost:9001/#/welcome', 70000);
        expect(browser.getTitle()).toEqual( "CUI IDM B2X" );

        browser.waitForAngular();
        const btn = browser.findElement(by.className("cui-card__button"));
        btn.click();

        browser.waitForAngular();
        expect(browser.getTitle()).toEqual( "CUI IDM B2X" );
    });
});