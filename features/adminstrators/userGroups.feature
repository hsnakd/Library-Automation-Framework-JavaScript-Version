@lib-07
Feature: User Groups Filtering

    As an admin, I should be able to filter the user groups on the "Users" page.

    #* AC1: Admins should be able to filter the user groups on the Users page
    #* AC2: There should be three options under the user groups dropdown menu: ALL, Librarian, and Students


    #TODO: Verify that the User Group dropdown is displayed on the Users page

    #TODO: Verify that the "ALL" option is selected by default on the Users page

    #TODO: Verify that the User Group dropdown menue has "ALL", "Librarian", and "Students" those three options

    #TODO: Verify that after the admin filters the user groups by student, then all group columns should have the value of "Students"

    Background:
        Given user is already on the login page


    @lib-07-01
    Scenario:
        When user is already logged in as "admin"
        And user clicks the "Users" module
        Then the User Group dropdown should be displayed
        And the "ALL" option should be selected by default
        And the User Group dropdown menu has the following options:
            | ALL       |
            | Librarian |
            | Students  |
        And all group columns should have the value of "Students" after filtering by "Students"
