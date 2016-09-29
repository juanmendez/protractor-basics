/**
 http://www.protractortest.org/#/tutorial#step-0-write-a-test
 **/

describe('angularjs homepage', function() {

    let faker;

    beforeAll(()=>{
        faker = require('faker');
    });

    it('should greet the named user', function() {
        // Load the AngularJS homepage.
        browser.get('http://www.angularjs.org');

        const randomName = faker.name.findName();

        // Find the element with ng-model matching 'yourName' - this will
        // find the <input type="text" ng-model="yourName"/> element - and then
        // type 'Julie' into it.
        element(by.model('yourName')).sendKeys(randomName);

        // Find the element with binding matching 'yourName' - this will
        // find the <h1>Hello {{yourName}}!</h1> element.
        var greeting = element(by.binding('yourName'));

        // Assert that the text element has the expected value.
        // Protractor patches 'expect' to understand promises.

        expect(greeting.getText()).toEqual('Hello ' + randomName + '!');
    });
});