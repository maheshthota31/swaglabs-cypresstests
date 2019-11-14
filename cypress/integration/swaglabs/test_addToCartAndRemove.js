/// <reference types="Cypress" />

describe ("test add to cart and remove button", function(){

    before("Login to site", function(){
        cy.visit('/');
        cy.login('standard_user','secret_sauce');  
    })

    afterEach("reset the app", function(){
        cy.resetApp();
    })

    it("add the product to cart", function(){
        cy.get('#item_5_title_link .inventory_item_name')
            .should('have.text','Sauce Labs Fleece Jacket')
            .click();
        cy.get('.inventory_details_price')
            .should('have.text','$49.99');
        cy.get('.btn_primary.btn_inventory')
            .click();
        cy.get('.btn_secondary.btn_inventory')
            .should('have.text','REMOVE')
        cy.get('.fa-layers-counter.shopping_cart_badge')
            .should('have.text','1')
        cy.get('.btn_secondary.btn_inventory')
            .click() 
    })
})