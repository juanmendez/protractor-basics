/**
 * 00.simple config
 * http://www.protractortest.org/#/tutorial#step-3-changing-the-configuration
 *
 * 01.adding_babel
 * https://github.com/angular/protractor/issues/2049
 **/

/*00*/
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test/00.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    /*01*/
    onPrepare: function () {
        require("babel-register");
    }
}