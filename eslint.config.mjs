import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier/flat";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig, // Disable ESLint conflicts rules with Prettier

  {
    plugins: { prettier: eslintPluginPrettier, react: eslintPluginReact },

    // Custom rules
    rules: {
      "prettier/prettier": ["error"],

      // Maximum number of consecutive empty lines to 1
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],

      // Rule to order imports
      "import/order": [
        "error",
        {
          groups: [
            // First internal imports
            ["builtin", "external"],
            // Then project internal imports (like 'next' or 'react')
            ["internal"],
            // Then specific library imports
            ["parent", "sibling", "index"],
          ],
          alphabetize: {
            order: "asc", // Imports will be sorted alphabetically
            caseInsensitive: true, // No difference between uppercase and lowercase
          },
          "newlines-between": "always", // Add a new line between groups of imports
        },
      ],

      // Order props in JSX or TSX
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          reservedFirst: true,
          noSortAlphabetically: false, // True if you want your custom order
        },
      ],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
