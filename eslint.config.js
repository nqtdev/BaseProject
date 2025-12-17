import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import checkFile from 'eslint-plugin-check-file'
import prettierPlugin from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  {
    ignores: ['dist', 'node_modules', 'build', '.git', '*.config.js'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {jsx: true},
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'check-file': checkFile,
      prettier: prettierPlugin,
    },
    settings: {
      react: {version: 'detect'},
    },
    rules: {
      // --- Base JS Rules ---
      ...js.configs.recommended.rules,
      'no-console': ['warn', {allow: ['warn', 'error']}],
      'no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
      camelcase: ['error', {properties: 'never', ignoreDestructuring: true}],

      // --- React Rules ---
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off',

      // --- React Hooks Rules ---
      ...reactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'warn',

      // --- React Refresh ---
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],

      // --- File Naming Convention ---
      'check-file/filename-naming-convention': [
        'error',
        {
          // Đặt tên theo dạng PASCAL_CASE, áp dụng cho toàn bộ folder
          'src/**/*.{jsx}': 'PASCAL_CASE', // ví dụ: Home.jsx , Router.jsx
          // Đăt tên theo dạng CAMEL_CASE, áp dụng cho 2 folder : hooks, utils
          'src/hooks/**/*.{js}': 'CAMEL_CASE', // ví dụ: useUser.js
          'src/utils/**/*.{js}': 'CAMEL_CASE',
        },
        {ignoreMiddleExtensions: true},
      ],

      // Đặt tên thư mực theo dạng  SNAKE_CASE, áp dụng cho toàn bộ folder
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/': 'SNAKE_CASE', // ví dụ : page_admin, page_user
        },
      ],

      // --- Prettier Integration ---
      ...prettierConfig.rules,
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true,
        },
      ],
    },
  },
]
