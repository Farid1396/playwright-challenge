Feature: Login and shopping cart flow

  Scenario: User logs in, adds a product to cart and logs out$
    Given the user is on the SauceDemo login page
    When the user logs in with standard credentials
    Then the products page should be displayed
    When the user adds a product to the cart
    Then the cart should display 1 item
    When the user logs out

Scenario: Invalid user cannot login
  Given the user is on the SauceDemo login page
  When the user logs in with invalid credentials
  Then an error message should be displayed
