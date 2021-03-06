module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'vue/no-v-html': 'off',
    'no-console': 'off',
    'import/no-mutable-exports': 'off',
    'import/named': 'off'
  }
}
