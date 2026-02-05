import "../app/globals.css";

import type { Preview } from "@storybook/nextjs";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "rgb(10, 10, 15)" },
        { name: "light", value: "#ffffff" },
      ],
    },
    layout: "fullscreen",
  },
};

export default preview;
