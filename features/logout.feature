@lib-02
Feature: Logout from the application

  As a user, I should be able to logout from the app.

  #* AC1: user should log out from the homepage by clicking the “Log out”  button under the account name.

  Background:
    Given user is already on the login page

@lib-02-01
  Scenario Outline: Verify users can log out successfully
    When user is already logged in as "<user-type>"
    And user clicks the account name on the top right corner of the page
    And user clicks the logout button under the account name
    Then user should be able to log out from the application 

    Examples:
      | user-type  |
      | admin      |
      | student    |


