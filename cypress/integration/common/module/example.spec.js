import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Main page {string} is opened', (url) => {
    cy.visit(url)
})

Then('Text {string} is displayed', (text) => {
    cy.contains(text).should('exist').and('be.visible')
})