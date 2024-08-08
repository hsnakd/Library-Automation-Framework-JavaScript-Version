import { BasePage } from "./BasePage.js";
import { faker } from '@faker-js/faker'; 


export class BooksPage extends BasePage {
  constructor(page) {
    super(page);
    this.bookCategories = page.locator("//select[@id='book_categories']");
    this.booksTable = page.locator("//table[@id='tbl_books']");
    this.searchBox = page.locator("//input[@type='search']");

    this.bookCategoriesDropDown = page.locator("//select[@id='book_categories']");

    this.addBookButton = page.locator("//a[text()=' Add Book']");
    this.editBookButton = page.locator("(//tr[@role='row' and @class='even']/td[text()='Ali Baba'])[1]");
    this.bookName = page.locator("//input[@placeholder='Book Name']");
    this.isbn = page.locator("//input[@placeholder='ISBN']");
    this.year = page.locator("//input[@placeholder='Year']");
    this.author = page.locator("//input[@placeholder='Author']");
    this.bookCategory = page.locator("//select[@id='book_group_id']");
    this.description = page.locator("//textarea[@name='description']");
    this.saveChangesButton = page.locator("//button[@type='submit' and text()='Save changes']");


  }

  async getBorrowBookButton(bookName) {
    return this.page.locator(`//tr[td[normalize-space()='${bookName}']]/td/a[contains(text(),'Borrow Book')]`);
  }

  async getReturnBookButton(bookName) {
    return this.page.locator(`//tr[td[normalize-space()='${bookName}']]/td/a[contains(text(),'Return Book')]`);
  }

  async getEditBookButton(bookName) {
    // Use XPath to find the row containing the book name and then locate the Edit Book button within that row
    return this.page.locator(`//tr[td[normalize-space()='${bookName}']]//a[contains(text(), 'Edit Book')]`);
  }
  

  async getBookCategories() {
    console.log('Waiting for book categories to be visible...');

    await this.bookCategories.waitFor({ state: 'visible' });

    // Wait for the dropdown to be populated with options
    await this.page.waitForFunction(select => {
        const options = Array.from(select.options);
        return options.length > 1; // Check if there are more than one option (assuming "ALL" is the first)
    }, this.bookCategories);

    // Log the current options in the dropdown
    const currentOptions = await this.bookCategories.evaluate(select => {
        return Array.from(select.options).map(option => option.text);
    });
    console.log('Current dropdown options:', currentOptions);

    console.log('Evaluating book categories...');
    const categories = await this.bookCategories.evaluate(select => {
        const options = Array.from(select.options);
        return options
            .filter(option => option.value !== "null")
            .map(option => option.textContent.trim());
    });

    console.log('Fetched categories:', categories);
    return categories;
  }


// Function to generate a valid ISBN-13 number
generateISBN() {
  const prefix = '978'; // ISBN-13 prefix
  const group = faker.number.int({ min: 0, max: 1 }); // Group code
  const publisher = faker.number.int({ min: 1000, max: 9999 }); // Publisher code
  const title = faker.number.int({ min: 1000, max: 9999 }); // Title code

  // Create ISBN-13 number
  return `${prefix}-${group}-${publisher}-${title}`;
}


  async fillBookInformation(data = {}) {
    // Array of categories
    const categories = [
      "Action and Adventure",
      "Anthology",
      "Classic",
      "Comic and Graphic Novel",
      "Crime and Detective",
      "Drama",
      "Fable",
      "Fairy Tale",
      "Fan-Fiction",
      "Fantasy",
      "Historical Fiction",
      "Horror",
      "Science Fiction",
      "Biography/Autobiography",
      "Humor",
      "Romance",
      "Short Story",
      "Essay",
      "Memoir",
      "Poetry"
    ];
    
    // Select a random category if not provided
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // Fill in the form fields
    await this.bookName.fill(data.bookName || faker.commerce.productName());
    await this.isbn.fill(data.isbn || this.generateISBN());

    // await this.isbn.fill(data.isbn || faker.string.uuid());
    await this.year.fill(data.year || faker.date.past().getFullYear().toString());
    await this.author.fill(data.author || faker.person.fullName());
    await this.bookCategory.selectOption({ label: data.bookCategory || randomCategory });
    await this.description.fill(data.description || faker.lorem.paragraph());
  }

  async fillBookInformationConsole(data = {}) {
    // Array of categories
    const categories = [
      "Action and Adventure",
      "Anthology",
      "Classic",
      "Comic and Graphic Novel",
      "Crime and Detective",
      "Drama",
      "Fable",
      "Fairy Tale",
      "Fan-Fiction",
      "Fantasy",
      "Historical Fiction",
      "Horror",
      "Science Fiction",
      "Biography/Autobiography",
      "Humor",
      "Romance",
      "Short Story",
      "Essay",
      "Memoir",
      "Poetry"
    ];
    
    // Select a random category if not provided
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
    // Generate book info
    const bookInfo = {
      bookName: data.bookName || faker.commerce.productName(),
      isbn: data.isbn || this.generateISBN(),
      year: data.year || faker.date.past().getFullYear().toString(),
      author: data.author || faker.person.fullName(),
      bookCategory: data.bookCategory || randomCategory,
      description: data.description || faker.lorem.paragraph()
    };
  
    // Log the book info to the console
    console.log('Book Information:', bookInfo);
  
    // Fill in the form fields
    await this.bookName.clear();
    await this.bookName.fill(bookInfo.bookName);
    await this.isbn.fill(bookInfo.isbn);
    await this.year.fill(bookInfo.year);
    await this.author.fill(bookInfo.author);
    await this.bookCategory.selectOption({ label: bookInfo.bookCategory });
    await this.description.fill(bookInfo.description);
  }
  
  


  async editBookInformationConsole(data = {}) {
    // Array of categories
    const categories = [
      "Action and Adventure",
      "Anthology",
      "Classic",
      "Comic and Graphic Novel",
      "Crime and Detective",
      "Drama",
      "Fable",
      "Fairy Tale",
      "Fan-Fiction",
      "Fantasy",
      "Historical Fiction",
      "Horror",
      "Science Fiction",
      "Biography/Autobiography",
      "Humor",
      "Romance",
      "Short Story",
      "Essay",
      "Memoir",
      "Poetry"
    ];
    
    // Select a random category if not provided
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
    // Generate book info
    const bookInfo = {
      // bookName: data.bookName || faker.commerce.productName(),
      isbn: data.isbn || this.generateISBN(),
      year: data.year || faker.date.past().getFullYear().toString(),
      author: data.author || faker.person.fullName(),
      bookCategory: data.bookCategory || randomCategory,
      description: data.description || faker.lorem.paragraph()
    };
  
    // Log the book info to the console
    console.log('Book Information:', bookInfo);
  
    // Fill in the form fields
    // await this.bookName.clear();
    // await this.bookName.fill(bookInfo.bookName);
    await this.isbn.fill(bookInfo.isbn);
    await this.year.fill(bookInfo.year);
    await this.author.fill(bookInfo.author);
    await this.bookCategory.selectOption({ label: bookInfo.bookCategory });
    await this.description.fill(bookInfo.description);
  }
 
  
  

}