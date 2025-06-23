import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js },
        extends: [
            'airbnb',
            'airbnb/hooks',
            'plugin:react/recommended',
            'plugin:prettier/recommended',
        ],
        rules: {
            'react/jsx-filename-extension': [
                1,
                { extensions: ['.js', '.jsx'] },
            ],
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
]);
