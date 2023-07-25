module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "nativewind/babel",
      // ["nativewind/babel", { mode: "transformOnly" }]
      [
        "module-resolver",
        {
          root: ".",
          alias: {
            "@components": "./src/components",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
