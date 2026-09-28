Feature:inventory page validation

Scenario:verify inventory items count for different users

Given User is on sauce demo application login page
When user logs in with username "<username>" and password "<password>"
Then user should see "<result>" 
And inventory item count should be "<count>"

Examples:
|username        |password     |result         |count |
|standard_user   |secret_sauce |inventory page |6     |
|locked_out_user |secret_sauce |error message  |0     |
|problem_user    |secret_sauce |inventory page |6     |
