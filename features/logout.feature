@lib-02
Feature: Logout from the application

  As a user, I should be able to logout from the app.

  #* AC1: user should log out from the homepage by clicking the “Log out”  button under the account name.

  Background:
    Given user logs in as "<user-type>"

@lib-02-01
  Scenario Outline: Verify users can log in with valid credentials and log out successfully
    When user clicks the "Log out" button under the account name
    Then user is redirected to the login page with the title "Login - Library"

    Examples:
      | user-type  |
      | admin      |
      | student    |
