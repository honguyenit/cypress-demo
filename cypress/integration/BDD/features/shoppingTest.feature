Feature: Shopping Feature

Background: Open the home page
    Given I open the home page

@smoke
Scenario: I do Shopping
    Given I select the shopping page menu
    When I add items to Cart
    |productName    |
    |Samsung Note 8 |
    |Blackberry     |
    When I go to the shopping cart page
    Then I should see the sum of items price is equal to the total amount
    When I do checkout
    Then I should see the checkout page showing "Success! Thank you! Your order will be delivered in next few weeks"

@regression
Scenario: Filling the form
    When I fill in the form with name "Bob" and gender "Male"
    Then I should see the binding input shows the name "Bob"
    Then I validate the forms

@smoke
Scenario Outline: Register accounts
    When I fill in the form with name <name> and email <email>
    Then I should see the form shows name <name> and email <email>

Examples:
    | name          | email               | 
    | "Ho"          | "ho@gmail.com"      |
    | "Nguyen"      | "nguyen@gmail.com"  |