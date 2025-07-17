import antfu from '@antfu/eslint-config'
import react from 'eslint-plugin-react'

export default antfu({
  formatters: false,
  stylistic: false,
  ignores: [
    'dist',
    'node_modules',
    'coverage',
    'build',
    'public',
    'out',
    'vite.config.ts',
    'tsconfig.json',
    'tsconfig.*.json'
  ],
  plugins: {
    react
  },
  rules: {
    'antfu/no-top-level-await': 'off',
    curly: ['error', 'all'],
    'no-alert': 'off',
    'node/no-process-env': 'off',
    'node/prefer-global/process': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'perfectionist/sort-imports': [
      'error',
      {
        internalPattern: ['^@/']
      }
    ],
    'perfectionist/sort-object-types': ['error'],
    'perfectionist/sort-interfaces': ['error'],
    'antfu/top-level-function': 'off',
    'prefer-arrow-callback': ['error'],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: ['signature', 'field', 'constructor', 'method'],
          order: 'alphabetically'
        }
      }
    ]
  }
})
