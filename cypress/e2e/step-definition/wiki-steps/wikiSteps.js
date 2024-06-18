const { Then, Given, When } = require('@badeball/cypress-cucumber-preprocessor')
const WikiPage = require('../../../pages/WikiPage.js')

const wikiPage = new WikiPage()


Given(/^user navigates to "([^"]*)"$/, (url) => {
  cy.visit(url)
});

When(/^user search for "([^"]*)" on Wikipedia$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user should see "([^"]*)" in the title$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user should see "([^"]*)" in the URL$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user should see "([^"]*)" in the first heading$/, (args1) => {
	console.log(args1);
	return true;
});
