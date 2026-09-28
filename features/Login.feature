#Jerkin Syntax

Feature:login
@validLogin
Scenario:Sucessful login with valid crediential


Given the user is on the login page
When user enter valid username and password
Then the inventory page should be displayed

Scenario:Unsucessful login with invalid crediential


Given the user is on the login page
When user enter invalid crediential
Then error message should be displayed





