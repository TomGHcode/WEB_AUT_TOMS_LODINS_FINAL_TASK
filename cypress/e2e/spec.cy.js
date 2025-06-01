import { AutomationPracticeFormPage } from "../pageObjects/AutomationPracticeFormPage"

describe('Final Task', () => {
  it('passes', () => {
    AutomationPracticeFormPage.visit();
    
    // Input name, last name
    AutomationPracticeFormPage.firstName.type("Brion");
    AutomationPracticeFormPage.lastName.type("Bishop");

    // input email
    AutomationPracticeFormPage.emailField.type("Brion.Bishop@entrapranure.com");

    // Select gender
    AutomationPracticeFormPage.genderChoice.contains("Male").click();

    // Input phone number
    AutomationPracticeFormPage.mobileField.type("131514525");

    // Pick date of birth
    AutomationPracticeFormPage.dateOfBirthInput.click();
    AutomationPracticeFormPage.birthMonth.select("February");
    AutomationPracticeFormPage.birthYear.select("1930");
    AutomationPracticeFormPage.dayOfBirth.filter('[aria-label*="February 28th"]').click();

    // Input subjects, hobbies
    AutomationPracticeFormPage.subjectsInput.type("Economics{enter}");
    AutomationPracticeFormPage.hobbiesCheckBox.contains("Music").click();

    // Image input
    AutomationPracticeFormPage.pictureUpload.selectFile("cypress/files/dedication.png");

    // Address input
    AutomationPracticeFormPage.addressInput.type("1900 Scottsdale Rd, AZ 85257");

    // Choosing state, city
    AutomationPracticeFormPage.stateChoice.type("NCR{enter}");
    AutomationPracticeFormPage.cityChoice.type("Delhi{enter}");

    // Submit
    AutomationPracticeFormPage.submitButton.click();

    // Validation
    AutomationPracticeFormPage.tableValidation.contains("td", "Student Name").next().should("contain.text", "Brion Bishop");
    AutomationPracticeFormPage.tableValidation.contains("td", "Student Email").next().should("contain.text", "Brion.Bishop@entrapranure.com");
    AutomationPracticeFormPage.tableValidation.contains("td", "Gender").next().should("contain.text", "Male");
    AutomationPracticeFormPage.tableValidation.contains("td", "Mobile").next().should("contain.text", "131514525");
    AutomationPracticeFormPage.tableValidation.contains("td", "Date of Birth").next().should("contain.text", "28 February,1930");
    AutomationPracticeFormPage.tableValidation.contains("td", "Subjects").next().should("contain.text", "Economics");
    AutomationPracticeFormPage.tableValidation.contains("td", "Hobbies").next().should("contain.text", "Music");
    AutomationPracticeFormPage.tableValidation.contains("td", "Picture").next().should("contain.text", "dedication.png");
    AutomationPracticeFormPage.tableValidation.contains("td", "Address").next().should("contain.text", "1900 Scottsdale Rd, AZ 85257");
    AutomationPracticeFormPage.tableValidation.contains("td", "State and City").next().should("contain.text", "NCR Delhi");
    
  })
})