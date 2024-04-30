/// <reference types="Cypress" />


describe('cart tests -delete', () => {
    let cart_id = '';

    const productList = [];
    const productsAdded = [];
    const productListAfterDelete = [];
    var productId = '';

    it("create a new cart", function () {
        cy.postApiCall('/carts').as("cartIdResponse");
        cy.get("@cartIdResponse").should((response) => {
            expect(response.status).to.eq(201);
            const { body } = response;
            cart_id = body.id;
        });
    });

    it("Retrieves a product", function () {
        cy.getApiCall('/products?between=10').as("productListResponse");
        cy.get("@productListResponse").then((response) => {
            expect(response.status).to.eq(200);
            const { body } = response;
            for (var iteration = 0; iteration <= 3; iteration++) {
                productList.push(body.data[iteration].id)
            }
            return productList
        })
            .then((productList) => {
                for (var index = 0; index <= 3; index++) {

                    var data ={
                        "product_id": productList[index],
                        "quantity": 1
                    }
                    cy.postApiCall(('/carts/'+cart_id),data).as("addItemResponse");
                    cy.get("@addItemResponse").should((response) => {
                        expect(response.status).to.eq(200);
                    });

                }
            });

    });


    it("get cart id after adding multiple products", function () {

        cy.getApiCall('/carts/' + cart_id).as("getCartDetails");
     
        cy.get("@getCartDetails").then((response) => {

            expect(response.status).to.eq(200);
            const { body } = response;
            expect(body.cart_items[0].cart_id).to.eq(cart_id);
            for (var iteration = 0; iteration <= 3; iteration++) {

                productsAdded.push(body.cart_items[iteration].product_id)
            }
            return productsAdded
        })
            .then((productsAdded) => {
                productId = productsAdded[0]
                expect(productsAdded).to.have.length(4)
            });

    });


    it("Delete an item in cart", function () {

        cy.deleteApiCall('/carts/' + cart_id + '/product/' + productId).as("deleteItem");
        cy.get("@deleteItem").should((response) => {
            expect(response.status).to.eq(204);

        });
    });

    it("get cart id after delete", function () {

        cy.getApiCall('/carts/' + cart_id).as("getCartDetails");

        cy.get("@getCartDetails").then((response) => {
            expect(response.status).to.eq(200);
            const { body } = response;
            expect(body.cart_items[0].cart_id).to.eq(cart_id);
            for (var item = 0; item <= 2; item++) {
                //cy.wrap(body).each(()=>{
                productListAfterDelete.push(body.cart_items[item].product_id)
                // })
            }
            return productListAfterDelete
        })
            .then((productListAfterDelete) => {

                expect(productListAfterDelete).to.have.length(3)
                cy.wrap(productListAfterDelete).each(($value, _index, _$productListAfterDelete) => {
                    const product = $value
                    expect(productId, 'PRODUCT').to.not.equal(product)
                })
            });
    });
});




