import { BasePage } from "./BasePage"

export class AutomationPracticeFormPage extends BasePage {
    static get url() {
        return "https://demoqa.com/automation-practice-form";
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }


    static get emailField() {
        return cy.get("#userEmail");
    }

    static get genderChoice() {
        return cy.get("#genterWrapper");
    }

    static get mobileField() {
        return cy.get("#userNumber");
    }



    static get dateOfBirthInput() {
        return cy.get("#dateOfBirthInput");
    }

    static get dayOfBirth() {
        return cy.get(".react-datepicker__day");
    }

    static get birthYear() {
        return cy.get(".react-datepicker__year-select");
    }

    static get birthMonth() {
        return cy.get(".react-datepicker__month-select");
    }


    
    static get subjectsInput() {
        return cy.get("#subjectsInput");
    }
    
    static get hobbiesCheckBox() {
        return cy.get("#hobbiesWrapper");
    }

    static get pictureUpload() {
        return cy.get("#uploadPicture");
    }


    static get addressInput() {
        return cy.get("#currentAddress");
    }

    static get stateChoice() {
        return cy.get("#state");
    }

    static get cityChoice() {
        return cy.get("#city");
    }


    static get submitButton() {
        return cy.get("#submit");
    }

    static get tableValidation() {
        return cy.get("table");
    }
}