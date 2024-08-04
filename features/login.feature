@lib-01
Feature: Login to the application
  As a user, I want to login so that I can access the app's main features.

  #* AC1: users should be able to log in with valid credentials and launch to the homepage.
  #* AC2: users should see a "Sorry, Wrong Email or Password" error pop-up message if any users try to log in with invalid credentials.
  #* AC3: users should see a “This field is required.” error pop-up message when they attempt to log in without any credentials.


  Background:
    Given user is already on the login page

  @lib-01-01
  Scenario Outline: Verify users can login with valid credentials
    When user enters valid username '<user-type>'
    And user enters valid password '<user-type>'
    And user clicks the login button
    Then user login successfully to the homepage
    Examples:
      | user-type |
      | admin     |
      | studen    |


  # TODO: Verify users can not login with invalid credentials


  # TODO: Verify users are not allowed to login without any credentials


  #? Should there be more scenarios for this user story? Feel free to add more scenarios.

  @lib-01-02
  Scenario Outline: Verify users cannot login with invalid credentials
    When user enters invalid a '<username>' '<user-type>'
    And user enters invalid '<password>' '<user-type>'
    And user clicks the login button
    Then user should see a "Sorry, Wrong Email or Password" error pop-up message
    Examples:
      | user-type | username            | password    |
      | admin     | admin@example.com   | admin1234   |
      | student   | student@example.com | student1234 |


  @lib-01-03
  Scenario Outline: Verify users cannot login with valid username, invalid password credentials
    When user enters valid username '<user-type>'
    And user enter '<invalid-password>' '<user-type>'
    And user clicks the login button
    Then user should see a "Sorry, Wrong Email or Password" error pop-up message
    Examples:
    Examples:
      | user-type | invalid-password |
      | admin     | admin1234        |
      | student   | student1234      |


  @lib-01-04
  Scenario Outline: Verify users cannot login with invalid username, valid password credentials
    When user enters '<invalid-username>' '<user-type>'
    And user enters valid password '<user-type>'
    And user clicks the login button
    Then user should see a "Sorry, Wrong Email or Password" error pop-up message
    Examples:
      | user-type | invalid-username    |
      | admin     | admin@example.com   |
      | student   | student@example.com |


  # TODO: Verify users are not allowed to login with invalid email address format
  @lib-01-05
  Scenario: Verify users cannot login with invalid email address format
    When user enters an invalid email address format 'invalid-email-format'
    And user clicks the login button
    Then user should see a "Please enter a valid email address." error pop-up message




  # TODO: Verify users are not allowed to login without any credentials
  @lib-01-06
  Scenario: Verify users cannot login without any credentials
    When user clicks the login button
    Then user should see a "This field is required." error pop-up message


  #? Should there be more scenarios for this user story? Feel free to add more scenarios.

  @lib-01-07
  Scenario Outline: Verify users cannot login with valid username and no password
    When user enters valid username '<user-type>'
    And user leaves the password field empty
    And user clicks the login button
    Then user should see a "Error: Please enter a valid password" error pop-up message
    Examples:
      | user-type |
      | admin     |
      | student   |

  @lib-01-08
  Scenario Outline: Verify users cannot login with valid password and no username
    When user enters valid password '<user-type>'
    And user leaves the username field empty
    And user clicks the login button
    Then user should see a "This field is required." error pop-up message
    Examples:
      | user-type |
      | admin     |
      | student   |