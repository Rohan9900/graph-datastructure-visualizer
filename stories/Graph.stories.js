import { GraphVisualizer } from "./Graph";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Graph",
  component: GraphVisualizer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    canvasRef: null,
    data: {
      A: ["B", "C"],
      B: ["D", "E"],
      C: ["F"],
      D: ["F", "I"],
      E: ["G"],
      F: [],
      G: [],
      H: [],
      I: ["k"],
      J: [],
      K: ["J"],
    },
    isChange: true,
    startingPoint: "A",
    textColor: "black",
    mainHeight: 400,
    mainWidth: 1000,
    gapBetweenNodes: 1.5,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  nodeShape: "circle",
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    canvasRef: null,
    data: {
      A: ["B", "C"],
      B: ["D", "E"],
      C: ["F"],
      D: ["F", "I"],
      E: ["G"],
      F: ["J"],
      G: [],
      H: [],
      I: ["K"],
      J: ["L", "M"],
      K: ["J"],
      L: [],
      M: [],
    },
    isChange: true,
    startingPoint: "A",
    textColor: "black",
    mainHeight: 400,
    mainWidth: 2000,
    nodeShape: "circle",
    gapBetweenNodes: 1.5,
  },
};
