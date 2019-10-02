@all
Feature: Main Menu

  @zm
  Scenario: Main Menu s2hoiuld be visible
    Given I open "https://www.apc.com/shop/us/en/categories" url
    When I wait until "MainMemu" is present
    And I wait "10" seconds
    And I click "MainMenu"
    And I wait until "Expanded Menu" is present
    Then "Expanded Menu" should be visible
      And Count of "Expanded Menu MainList" should be "9"
      
