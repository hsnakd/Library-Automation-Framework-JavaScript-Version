@lib-06
Feature: Borrowing books

    As a student, I should be able to borrow books on the "Books" Page.


    #! Acceptance Criteria are missing :(

    #TODO: Analyze the user story and create acceptance criteria yourself!

    #TODO: Create scenarios that cover all the acceptance criteria


  Background:
    Given user is already on the login page
    When user is already logged in as "student"

  @lib-06-01
  Scenario Outline: Borrowing books on the "Books" Page
    And user clicks the Books module
    And user searches the book they want to borrow "<bookName>"
    And user sees that the book they want to borrow is available "<bookName>"
    And user clicks on the Borrow Book button of "<bookName>"
    Then the message "The book has been borrowed..." will be displayed
    Examples:
      | bookName              |
      | To Kill a Mockingbird |
    #   | 1984                  |


