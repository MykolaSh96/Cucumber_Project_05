@Regression @Wiki
Feature: Wiki search functionality

  Background:
    Given user navigates to "https://www.wikipedia.org/"


  Scenario: Validate wiki search
    When user search for "Jeff Bezos" on Wikipedia
    Then user should see "Jeff Bezos" in the title
    And user should see "Jeff Bezos" in the URL
    And user should see "Jeff Bezos" in the first heading

    Examples:
      | Jeff Bezos   |
      | Elon Musk    |
      | Bark Obama |
