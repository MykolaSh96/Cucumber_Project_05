const { Given, Then, When  } = require("@badeball/cypress-cucumber-preprocessor")
const PaginationPage = require('../../pages/PaginationPage')

const paginationPage = new PaginationPage()

Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (title) => {
  paginationPage.PageHeadElVisible(title).should('be.visible')
})

Then(/^the user should see the "([^"]*)" paragraph$/, (text) => {
  paginationPage.getPHeading(text).should('be.visible')
})

Then(/^the user should see the "([^"]*)" button is disabled$/, (label) => {
  paginationPage.choiceButton(label).should('be.disabled')
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (label) => {
  paginationPage.choiceButton(label).should('be.enabled')
})

When(/^the user clicks on the "([^"]*)" button$/, (label) => {
  paginationPage.clickButton(label)
})

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (label) => {
  paginationPage.clickButtonTillitDisabled(label)
})

Then(/^the user should see "([^"]*)" City with the info below and an image$/, (cityName, dataTable) => {
  const arr = dataTable.rawTable.flat()

  paginationPage.getInfo().each(($el, index) => {
    cy.log(arr[index])
    cy.wrap($el).should('be.visible').and('contain', arr[index])
  })

  paginationPage.getImage().should('be.visible').and('have.attr', 'alt', cityName)
})