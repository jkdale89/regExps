var reTest = {
	phoneNumber: /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
	, email: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
	, minPassword: /^[a-zA-Z]\w{3,14}$/
	, minPasswordDescription: 'The password\'s first character must be a letter, it must contain at least 4 characters and no more than 15 characters and no characters other than letters, numbers and the underscore may be used'
	, strongPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
	, strongPasswordDescription: 'Password must have at least 8 characters with at least one Capital letter, at least one lower case letter and at least one number or special character.'
	, strongestPassword: /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*\W.*\W)[a-zA-Z0-9\S]{9,}$/
	, strongestPasswordDescription: 'This pattern requires at least two lowercase letters, two uppercase letters, two digits, and two special characters. There must be a minimum of 9 characters total, and no white space characters are allowed.'
};

module.exports = reTest;