Feature: Transaction Send Money
  
  @transaction
  Scenario: Transaction Send Money List is Visible
    Given User on the transaction page
    When User choose send money domestic
    Then User will see send money domestic menu
