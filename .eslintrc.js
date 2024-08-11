module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    quotes: [2, "double"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react-native/no-inline-styles": 0,
    "prettier/prettier": [
      "error",
      {
        "no-inline-styles": false,
      },
    ],
  },
};
