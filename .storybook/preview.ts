import "../app/globals.css";

import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: "dark", value: "rgb(10, 10, 15)" },
        light: { name: "light", value: "#ffffff" }
      }
    },
    layout: "fullscreen",
  },

  initialGlobals: {
    backgrounds: {
      value: "dark"
    }
  }
};

export default preview;
