/// <reference types="Cypress" />
/*
  This test case orchestrates the addition of a product through a series of API requests.
  1) Creating cart
    - Initiates the process by creating a new cart in the system. This step simulates the user starting a shopping session.
  2) Retrieves product list 
    - Fetches the list of products available for purchase from the system. This step is crucial for users to select a product to add to their cart.
  3) Adding product to the cart
   - Selects a product from the retrieved list and adds it to the previously created cart. This step mirrors the action of a user adding an item to their cart during an online shopping experience.
*/

beforeEach(() => {

  cy.fixture("/api/cart/index.json").then(function (data) {
    this.data = data;
  });
});

describe('Product Addition to Cart', () => {
  let cart_id = '';
  let product_id = '';

  it("create a new cart", function () {
    //post call for Creating cart
    cy.postApiCall('/carts').as("cartIdResponse");
    //assertions 
    cy.get("@cartIdResponse").should((response) => {
      expect(response.status).to.eq(201);
      const { body } = response;
      cart_id = body.id;
    });

  });

  it("Retrieves a product", function () {
    //get call for Retrieves product list
    cy.getApiCall('/products?between=10').as("productListResponse");
    //assertions 
    cy.get("@productListResponse").then((response) => {
      expect(response.status).to.eq(200);
      const { body } = response;
      product_id = body.data[0].id
    });
});


  it("Add item to a cart", function () {
    const postData = this.data.post_Data;
    postData.product_id = product_id;
    //post call for Add item to a cart
    cy.postApiCall(('/carts/'+cart_id),postData).as("addItemResponse");
    //assertions 
    cy.get("@addItemResponse").should((response) => {
      expect(response.status).to.eq(200);
    });
  });



  it("get cart id", function () {
    //get call for getting details
    cy.getApiCall(('/carts/' + cart_id)).as("getCartDetails"); 
    //assertions 
    cy.get("@getCartDetails").then((response) => {
      expect(response.status).to.eq(200);
      const { body } = response;
      expect(body.cart_items[0].cart_id).to.eq(cart_id);
      expect(body.cart_items[0].product_id).to.eq(product_id);
    });

  });
});
