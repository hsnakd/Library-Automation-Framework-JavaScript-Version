@lib-04
Feature: Return Books Functionality

    As a student, I should be able to return the borrowed books on the "Borrowing Books" page.

    #! Acceptance Criteria are missing :(

    #TODO: Analyze the user story and create acceptance criteria yourself!

    #TODO: Create scenarios that cover all the acceptance criteria


Background:
    Given user is already on the login page
    When user is already logged in as "student"

@lib-04-01
  Scenario Outline: Returning books on the "Borrowing Books" Page
    And user clicks the Borrowing Books module
    And user sees that the book they want to return is available with the Return Book button "<bookName>"
    And user clicks on the Return Book button of "<bookName>"
    Then the message "The book has been returned.." will be displayed for returned book
    Examples:
      | bookName              |
      | To Kill a Mockingbird |
    #   | 1984                  |