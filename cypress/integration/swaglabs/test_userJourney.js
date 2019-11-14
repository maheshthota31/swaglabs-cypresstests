/// <reference types="Cypress" />

describe("user journey of the saucedemo", function(){

    before("Login to the applciation", function(){
        cy.visit('/');
        cy.login('standard_user','secret_sauce');
        cy.resetApp();
    })

    it("add to the cart", function(){
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
     })

     it("go to cart and checkout the item", function(){
         cy.get('.inventory_details_name')
            .then(($elem) => {
                cy.get('.shopping_cart_link.fa-layers.fa-fw')
                    .click();
                cy.get('.inventory_item_name')
                    .then(($elem2) => {
                        expect($elem.text()).to.eq($elem2.text())
                    })
            })
        cy.get('.btn_action.checkout_button') 
            .click();          
     })

     it("give information in the checkout page", function(){
        cy.get('#first-name')
            .type("test name");
        cy.get('#last-name')
            .type("last name");
        cy.get('#postal-code')
            .type("1111");
        cy.get('.btn_primary.cart_button')
            .click();
     })

     it("verify the checkout overview page", function(){
        cy.get('.summary_quantity')
            .should('have.text','1');
        cy.get('.summary_value_label')
            .eq(0)
            .should('be.exist');
        cy.get('.summary_value_label')
            .eq(1)
            .should('be.exist');
        cy.get('.inventory_item_price')
            .then(($elm) => {
                cy.get('.summary_subtotal_label')
                    .then(($elm2) => {
                        expect($elm.text().replace( /^\D+/g, '')).to.eq($elm2.text().replace( /^\D+/g, ''));
                    })
            })
     })

     it("complete the order and verify", function(){
         cy.get('.btn_action.cart_button')
            .click();
        cy.get('.complete-header')
            .should('have.text','THANK YOU FOR YOUR ORDER');
        cy.get('.fa-layers-counter.shopping_cart_badge')
            .should('not.exist');
     })
})