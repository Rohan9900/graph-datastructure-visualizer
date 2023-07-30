import { GraphVisualizer } from "./Graph";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Graph",
  component: GraphVisualizer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    canvasRef: null,
    data: {
      L: ["R", "S"],
      R: ["S"],
      S: [],
    },
    isChange: true,
    startingPoint: "L",
    textColor: "black",
    mainHeight: 400,
    mainWidth: 1000,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    canvasRef: null,
    data: {
      L: ["R", "S"],
      R: [],
      S: [],
    },
    isChange: true,
    startingPoint: "L",
    textColor: "black",
    mainHeight: 400,
    mainWidth: 1000,
  },
};
