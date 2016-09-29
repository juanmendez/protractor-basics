/**
 * http://www.protractortest.org/#/tutorial#step-4-lists-of-elements
 */

describe('Protractor Demo App', ()=> {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    var add = (a, b)=>{
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(()=> {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a history', ()=> {
        add(1, 2);
        add(3, 4);

        expect(history.count()).toEqual(2);

        add(5, 6);

        expect(history.count()).toEqual(0); // This is wrong!
    });
});