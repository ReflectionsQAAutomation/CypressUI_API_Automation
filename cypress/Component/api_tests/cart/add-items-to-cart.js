/// <reference types="Cypress" />
beforeEach(() => {

  cy.fixture("/api/cart/index.json").then(function (data) {
    this.data = data;
  });
});

describe('cart tests -add', () => {
  let cart_id = '';
  let product_id = '';


  it("create a new cart", function () {

    cy.request({
      method: "POST",
      url: "https://api.practicesoftwaretesting.com/carts",
      headers: {
        "accept": "application/json"
      }
    }).as("cartIdResponse");

    cy.get("@cartIdResponse").should((response) => {
      expect(response.status).to.eq(201);
      const { body } = response;
      cart_id = body.id;

    });

  });
  it("Retrieves a product", function () {

    cy.request({
      method: "GET",
      url: "https://api.practicesoftwaretesting.com/products?between=10",
      headers: {
        "accept": "application/json"
      }

    }).as("productListResponse");

    cy.get("@productListResponse").then((response) => {
      expect(response.status).to.eq(200);
      const { body } = response;

      product_id = body.data[0].id



    });

  });


  it("Add item to a cart", function () {

    const postData = this.data.post_Data;
    postData.product_id = product_id;
    cy.request({
      method: "POST",
      url: "https://api.practicesoftwaretesting.com/carts/" + cart_id,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: postData,

    }).as("addItemResponse");

    cy.get("@addItemResponse").should((response) => {
      expect(response.status).to.eq(200);

    });

  });



  it("get cart id", function () {
    cy.request({
      method: "GET",
      url: "https://api.practicesoftwaretesting.com/carts/" + cart_id,
      headers: {
        "accept": "application/json"
      }

    }).as("getCartDetails");

    cy.get("@getCartDetails").then((response) => {

      expect(response.status).to.eq(200);
      const { body } = response;

      expect(body.cart_items[0].cart_id).to.eq(cart_id);
      expect(body.cart_items[0].product_id).to.eq(product_id);

    });

  });


});
