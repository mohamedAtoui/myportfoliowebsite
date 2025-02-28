/*
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "declaration-empty-line-before": null,
    "function-name-case": ["lower", { ignoreFunctions: [] }],
    "value-keyword-case": ["lower", { ignoreKeywords: [] }],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends"],
      },
    ],
    "block-no-empty": null,
    "unit-no-unknown": [true, { ignoreUnits: ["em", "rem", "s"] }],
  },
  ignoreFiles: ["node_modules/**", ".next"],
};
*/

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "declaration-empty-line-before": null,
    "function-name-case": null, // Disabled
    "value-keyword-case": null, // Disabled
    "at-rule-no-unknown": [
      false, // Less strict
      {
        ignoreAtRules: ["extends", "apply", "variants", "tailwind"],
      },
    ],
    "block-no-empty": null,
    "unit-no-unknown": [
      false, // Less strict
      {
        ignoreUnits: ["em", "rem", "s", "vh", "vw", "ch", "%"],
      },
    ],
    "selector-class-pattern": null, // Allow any class naming
    "no-descending-specificity": null, // Avoid specificity warnings
    "max-nesting-depth": null, // No nesting limits
  },
  ignoreFiles: ["node_modules/**", ".next"],
};
