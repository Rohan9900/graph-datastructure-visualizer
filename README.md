# Graph Visualizer

[![npm version](https://badge.fury.io/js/graph-data-structure-visualizer.svg)](https://badge.fury.io/js/graph-data-structure-visualizer)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Rohan9900/graph-datastructure-visualizer/blob/main/LICENSE)

Graph Visualizer is a React component that allows you to visualize graph-based data structures with ease. It provides an interactive and customizable canvas for rendering network graphs, trees, and other complex data structures.

## Installation

You can install Graph Visualizer from npm:

```bash
npm i graph-data-structure-visualizer
```

## Usage

Import the `GraphVisualizer` component and use it in your React application:

```jsx
import React from "react";
import { GraphVisualizer } from "graph-data-structure-visualizer";

const MyComponent = () => {
  const data = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["G"],
    F: [],
    G: [],
  };

  return (
    <div>
      <h1>Graph Visualization Example</h1>
      <GraphVisualizer
        data={data}
        startingPoint="A"
        mainHeight={600}
        mainWidth={800}
        isChange={false}
      />
    </div>
  );
};

export default MyComponent;
```

## Props

- canvasRef (Optional): A ref for the canvas element.
- data (Required): An object representing the graph data structure.
- isChange (Required): A boolean flag to trigger graph visualization updates.
- startingPoint (Required): The starting node for the graph traversal.
- textColor (Optional): The color of the node labels. (Default: "black")
- mainHeight (Optional): The height of the canvas. (Default: 400)
- mainWidth (Optional): The width of the canvas. (Default: 500)
- nodeShape (Optional): The shape of the nodes. Can be "circle" or "rectangle". (Default: "rectangle")
- gapBetweenNodes (Optional): The gap between nodes in the same layer. (Default: 1.5)


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Rohan9900/graph-datastructure-visualizer/blob/main/LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## Credits

Graph Visualizer was developed by [Rohan Bindal](https://github.com/Rohan9900).

---
