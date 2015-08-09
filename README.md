This is a simple starter file for regular expressions.

8/7/15 - email, phonenumber, minimum, strong and strongest passwords.

Require the file, and test by import.regExpTest.exec('string to be tested').
	- Passed test returns object
	- Failed test returns null

Example: 

var regExpTest = require('./commonExpressions');

regExpTest.phoneNumber.exec('555-555-5555')
	// returns object

regExpTest.phoneNumber.exec('889-333-331')
	//returns null