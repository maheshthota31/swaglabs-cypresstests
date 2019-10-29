describe("cart feature", function(){

    before("Login to the app",function(){
        cy.visit('/');
        cy.login('standard_user','secret_sauce');
    })

    afterEach("reset the app",function(){
        cy.resetApp();
    })

    it("add the items to cart and verify", function(){
        cy.get('.inventory_list .inventory_item')
            .eq(0)
            .find('.btn_primary.btn_inventory')
            .click();
        cy.get('.inventory_list .inventory_item')
            .eq(2)
            .find('.btn_primary.btn_inventory')
            .click();
        cy.get('.fa-layers-counter.shopping_cart_badge')
            .should('have.text','2');
    })

    it("verify the cart showing the correct item", function(){
        cy.get('.inventory_list .inventory_item')
            .eq(1)
            .find('.btn_primary.btn_inventory')
            .click();
        cy.get('.inventory_list .inventory_item')
            .eq(1)
            .find('.inventory_item_name')
            .then(($elem) => {
                cy.get('.shopping_cart_link.fa-layers.fa-fw')
                    .click();
                cy.get('.inventory_item_name')
                    .then(($elem2) => {
                        expect($elem.text()).to.eq($elem2.text())
                    })
            })
    })
})