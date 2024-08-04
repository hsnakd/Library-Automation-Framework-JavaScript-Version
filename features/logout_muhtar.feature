@lib-02
Feature: Logout from the application

  As a user, I should be able to logout from the app.

  #* AC1: user should log out from the homepage by clicking the “Log out”  button under the account name.

  Background:
    Given user is already on the login page

@library-02-01
  Scenario Outline: Verify users can log out from the homepage
    Given user is already logged in as "<user-type>"
    When user clicks the user profile on the top right corner of the page
    And user clicks the Log out button
    Then user should be able to log out from the app
    Examples:
      | user-type  |
      | admin      |
      | student    |


