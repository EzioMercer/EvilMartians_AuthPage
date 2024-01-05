module.exports = {
	globals: {
		'IS_PRODUCTION': true,
		'PROJECT_NAME': true
	},
	'extends': 'react-app',
	'plugins': [
		'react-hooks'
	],
	'rules': {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'quotes': [2, 'single', {'avoidEscape': true}],
	}
}
