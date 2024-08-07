Feature: Shopping Feature

Scenario: I do Shopping
    Given I open the home page
    Given I select the shopping page menu
    When I add items to Cart
    |productName|
    |Samsung Note 8|
    |Blackberry|
    When I go to the shopping cart page
    Then I should see the sum of items price is equal to the total amount
    When I do checkout
    # Then I should see the checkout page showing "Success! Thank you! Your order will be delivered in next few weeks"
    
# Scenario: Filling the form
#     Given I open the home page
#     When I fill in the form
#     Then I validate the forms
#     When I select the shopping page menu
