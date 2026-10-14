@smoke
Feature: Ecommerce testing

  Scenario: Order a product from the ecommerce website
    Given Navigate to the ecomm site and login using "standard_user" and "secret_sauce"
    When Select "Sauce Labs Onesie" from product listing page and add it to the cart
    Then Verify "Sauce Labs Onesie" is added to the cart and proceed to checkout
    When Enter the user details "Jiji" , "Sasidharan" and "680508" and place the order
    Then Verify the order is placed successfully