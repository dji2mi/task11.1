"use strict";
const { When } = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const logger = require('../../config/loggerConfig.js').logger;

When(/^I open "([^"]*)" url$/, (url) => {
    logger.info(`I open ${url} url`);
    return browser.get(url);
});

When(/^I wait "([^"]*)" seconds$/, (waitTime) => {
    logger.info(`I wait ${waitTime} seconds`);
    return browser.sleep(waitTime * 1000);
});


