/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra')
const path = require('path')
const defaultEnvironment = 'prod'

function getConfigurationFromFile(file) {
    const pathToConfigFile = path.resolve('cypress/config', `cypress.env.${file}.json`)
    return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
    const file = config.env.configFile || defaultEnvironment

    on('file:preprocessor', cucumber())

    return getConfigurationFromFile(file)
}
