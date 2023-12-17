import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import prettier from 'eslint-config-prettier';

export default [
	js.configs.recommended,
	prettier,
	{
		// apply only for this (ignored by prettier)
		files: ['src/builder/**/*.js'],
		plugins: {
			stylistic: stylisticJs,
		},
		env: {
			node: true,
		},
		rules: {
			'stylistic/key-spacing': [
				'warn',
				{
					align: {
						beforeColon: true,
						afterColon: true,
						on: 'colon',
					},
				},
			],
			quotes: ['error', 'single'],
		},
	},
];
