import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    staticDirs: ["../public"],
    babelDefault: async () => {
        return {
            compact: true,
            presets: ["@babel/preset-env", "@babel/preset-react"],
        };
    },
    webpackFinal: async (config) => {
        config.watchOptions = {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000,
        };

        return config;
    },
};
export default config;
