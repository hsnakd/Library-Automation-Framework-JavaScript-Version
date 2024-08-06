@lib-04
Feature: Return Books Functionality

    As a student, I should be able to return the borrowed books on the "Borrowing Books" page.

    #* AC: Students should be able to return the books they borrowed on the Borrowing Books page by clicking Retun Book

    #TODO: Verify that the Return Book button is displayed on the Borrowing Books page for the book(s) students have borrowed

    #TODO: Verify that the books will be retunrd when the student clicks the Return Book button

    #TODO: Verify that the Return Book button of the book will be disabled after student returns the book

    #TODO: Fell free to add more....


Background:
    Given user is already on the login page
    When user is already logged in as "student"

@lib-04-01
  Scenario Outline: Returning books on the "Borrowing Books" Page
    And user clicks the "Borrowing Books" module
    And user sees that the book they want to return is available with the Return Book button "<bookName>"
    And user clicks on the Return Book button of "<bookName>"
    Then the message "The book has been returned.." will be displayed for returned book
    Examples:
      | bookName              |
      | To Kill a Mockingbird |
    #   | 1984                  |