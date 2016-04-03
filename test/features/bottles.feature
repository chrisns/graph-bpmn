Feature: 100 Green Bottles

  Scenario: Should fall from the wall

    Given 100 green bottles are standing on the wall
    When 1 green bottle accidentally falls
    Then there are 99 green bottles standing on the wall

  Scenario: Two should fall from the wall

    Given 100 green bottles are standing on the wall
    When 2 green bottle accidentally falls
    Then there are 98 green bottles standing on the wall

  Scenario: Starts with 100

    Given 20 green bottles are standing on the wall
    When 1 green bottle accidentally falls
    Then there are 19 green bottles standing on the wall
