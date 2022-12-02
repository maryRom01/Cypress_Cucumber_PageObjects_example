import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import MainPage from '../../../support/pageObjects/MainPage'

const baseUrl = Cypress.env('mainUrl')
const mainPage = new MainPage()

Given('Main page {string} is opened', (url) => {
    cy.visit(url)
})

Given('Main page is displayed', () => {
    cy.visit(baseUrl)
})

Then('Text {string} is displayed', (text) => {
    cy.contains(text).should('exist').and('be.visible')
})

And('Click on the link {string} on the Main page', (linkValue) => {
    mainPage.clickOnLink(linkValue)
})

And('Description with required link {string} is displayed', (linkValue) => {
    mainPage.verifyPageContainsLinkDescription(linkValue)
})