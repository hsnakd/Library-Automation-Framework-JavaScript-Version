@lib-09
Feature: Main Modules of the Application

    As an admin, I want to access the main modules of the app.


    #* AC: Admin users should see 3 modules: Dashboard, Users, Books


    # TODO: Verify admins can see 3 main modules (Dashboard, Users, and Books)


    #? Should there be more scenarios for this user story? Feel free to add more scenarios.


    Background:
        Given user is already on the login page
        When user is already logged in as "admin"
    @lib-09-01
    Scenario: Borrowing books on the "Books" Page
        Then user should see modules
            | Dashboard |
            | Users     |
            | Books     |
