@lib-10
Feature: Edit Books Functionality

    As an admin, I should be able to edit books on the "Books" page.

    #* AC: Admin users should be able to edit books on the "Books" page by clicking edit book

    #! Please make sure to change it back to the original book information after the automation is complete


    #TODO: Verify the Edit Book buttons should be displayed and enabled to the admin users

    #TODO: Verify admin users can edit the Book Name, ISBN, Year, Author, Category and Description of the Book

    #TODO: Fell free to add more...



    Background:
        Given user is already on the login page
        When user is already logged in as "admin"
        And user clicks the "Books" module

    @lib-10-01
    Scenario: Users can add a book
        And user click the Add Book button
        And user can add a book with following information
            | name        |
            | isbn        |
            | year        |
            | author      |
            | category    |
            | description |
        Then verify that the book is already added

    @lib-10-02
    Scenario Outline: Users can edit the book details
        And user searches the book they want to edit "<bookName>"
        And the user clicks the Edit Book button for the "<bookName>"
        And admin edits the book with the following details
            | name        |
            | isbn        |
            | year        |
            | author      |
            | category    |
            | description |
        Then verify that the book is already added
        Examples:
            | bookName              |
            | To Kill a Mockingbird |


