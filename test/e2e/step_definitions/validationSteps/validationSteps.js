"use strict";
let {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const stepFunctions = require('../utils/stepFunctions.js');
const logger = require('../../config/loggerConfig.js').logger;

Then(/^"([^"]*)" should( not)? be visible$/, async (param, notArg) => {
    notArg = notArg ? ' not' : '';
    logger.info(`${param} should${notArg} be visible`);
    let element = elementHelper(param);
    let result = await element.isPresent();
    return expect(result).to.be.equal(!notArg);
});

Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (param, notArg, expectedNumber) => {
    notArg = notArg ? ' not' : '';
    let element = elementHelper(param);
    let result = await element.count();
    expectedNumber = parseInt(expectedNumber);
    logger.info(`Count of ${param} should${notArg} be ${expectedNumber}`);
    if (notArg) {
        return expect(result).to.not.equal(expectedNumber);   
    }
    else {
        return expect(result).to.equal(expectedNumber);
    }
});

Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    notArg = notArg ? ' not' : '';
    let pageTitle = await browser.getTitle();
    logger.info(`Page title should${notArg} be ${text}`);
    if (notArg){
        return expect(pageTitle).to.not.equal(text);
    }
    else {
        return expect(pageTitle).to.be.equal(text);
    }  
});