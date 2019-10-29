// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add("login", (username, password) => { 
    cy.get('#user-name')
        .type(username);
    cy.get('#password')
        .type(password);
    cy.get('.btn_action')
        .click() 
 })

 Cypress.Commands.add("resetApp",() => {
    cy.get('.bm-burger-button')
        .find('button')
        .click();
    cy.get('#reset_sidebar_link')
        .click();  
    cy.get('.bm-cross-button')
        .find('button')
        .click();
    
 })

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
