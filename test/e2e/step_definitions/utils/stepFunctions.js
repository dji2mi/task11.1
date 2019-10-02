const PaOb = require('../../pageobjects/pageobject.json');
const EC = protractor.ExpectedConditions;

    let getPageObjectElement = (param) => {
        let pageElement = PaOb[param];
        if (pageElement['isCollection'] === true) {
            pageElement = element.all(by.css(pageElement.selector));
            return pageElement;
        }
        else {
            pageElement = element(by.css(pageElement.selector));
            return pageElement;
        }
    };

    let expectedCondition = (shouldBe) => {
        let expectedConditionFunction;
    
        switch (shouldBe) {
            case "present":
                expectedConditionFunction = EC.presenceOf.bind(EC);
                break;
            case "clickable":
                expectedConditionFunction = EC.elementToBeClickable.bind(EC);
                break;
            case "visible":
                expectedConditionFunction = EC.visibilityOf.bind(EC);
                break;
            case "invisible":
                expectedConditionFunction = EC.invisibilityOf.bind(EC);
                break;
            case "selected":
                expectedConditionFunction = EC.elementToBeSelected.bind(EC);
                break;
            case "gone":
                expectedConditionFunction = EC.stalenessOf.bind(EC);
                break;
            default:
                logger.error(`Wrong expected condition provided: [${shouldBe}]`);
                throw new Error('Wrong expected condition provided.');
        }
        return expectedConditionFunction;
    };
    
    module.exports = {
        getPageObjectElement,
        expectedCondition
        }