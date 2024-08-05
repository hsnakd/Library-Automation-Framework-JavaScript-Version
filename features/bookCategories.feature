Feature: Book Categories

  As a user, I want to see 23 book categories, so I can filter my favorite books.

  Background:
    Given user is already on the login page

@lib-03-01
  Scenario Outline: Verify users can see all book categories
    When user is already logged in as "<user-type>"
    And user clicks the Books module
    Then user should see 23 book categories:
      | ALL                          |
      | Action and Adventure         |
      | Anthology                    |
      | Classic                      |
      | Comic and Graphic Novel      |
      | Crime and Detective          |
      | Drama                        |
      | Fable                        |
      | Fairy Tale                   |
      | Fan-Fiction                  |
      | Fantasy                      |
      | Historical Fiction           |
      | Horror                       |
      | Science Fiction              |
      | Biography/Autobiography      |
      | Humor                        |
      | Romance                      |
      | Short Story                  |
      | Essay                        |
      | Memoir                       |
      | Poetry                       |
      | Thrillers                    |
      | Young Adults                 |
    Examples:
      | user-type  |
      | admin      |
      | student    |

@lib-03-02
  Scenario Outline: Users can filter by each book category
    When user is already logged in as "<user-type>"
    And user clicks the Books module
    Then user should be able to filter books by:
      | ALL                          |
      | Action and Adventure         |
      | Anthology                    |
      | Classic                      |
      | Comic and Graphic Novel      |
      | Crime and Detective          |
      | Drama                        |
      | Fable                        |
      | Fairy Tale                   |
      | Fan-Fiction                  |
      | Fantasy                      |
      | Historical Fiction           |
      | Horror                       |
      | Science Fiction              |
      | Biography/Autobiography      |
      | Humor                        |
      | Romance                      |
      | Short Story                  |
      | Essay                        |
      | Memoir                       |
      | Poetry                       |
      | Thrillers                    |
      | Young Adults                 |
    Examples:
      | user-type  |
      | admin      |
      # | student    |
