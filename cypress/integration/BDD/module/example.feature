Feature: Navigate to Main page

@TEST_1 @SMOKE
Scenario: Navigate to Main page
    Given Main page 'https://example.cypress.io/' is opened
    Then Text 'cypress.io' is displayed

@TEST_2 
Scenario Outline: Click on link
    Given Main page is displayed
    When Click on the link '<link>' on the Main page
    Then Description with required link '<link>' is displayed
    Examples:
        | link    | 
        | submit  |  