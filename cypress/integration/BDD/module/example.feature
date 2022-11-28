Feature: Navigate to Main page

Scenario: Navigate to Main page
    Given Main page 'https://example.cypress.io/' is opened
    Then Text 'cypress.io' is displayed