/// <reference types='Cypress' />

import utils from '../utils/globalValues'

const selectorsMainPage = {
    brand: '.navbar-brand',
    list: '.home-list',
    content: '.row'
}

class MainPage {

    clickOnLink(linkValue) {
        cy.get(selectorsMainPage.list).find('a').contains(linkValue).then(elem => {
            cy.wrap(elem).scrollIntoView().should('be.visible')
            cy.wrap(elem).click().wait(utils.waiters.waiter5)
        })
    }

    verifyElementIsDisplayed(elem) {
        cy.get(elem).scrollIntoView().should('be.visible')
    }

    verifyPageContainsLinkDescription(linkValue) {
        cy.get(selectorsMainPage.content).find('a').contains(linkValue).scrollIntoView().should('exist')
    }
}

export default MainPage