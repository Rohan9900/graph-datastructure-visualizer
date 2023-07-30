import React from "react";

import { useEffect } from "react";
import { useRef } from "react";

export function GraphVisualizer({
  canvasRef,
  data,
  isChange,
  startingPoint,
  textColor,
  mainHeight,
  mainWidth,
}) {
  if (!canvasRef) {
    canvasRef = useRef(null);
  }

  useEffect(() => {
    /* -------------------------------------------------------------------------- */
    /*                             initializing canvas                            */
    /* -------------------------------------------------------------------------- */
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    /* -------------------------------------------------------------------------- */
    /*                 creating a canvas of some height and width                 */
    /* -------------------------------------------------------------------------- */
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const centerX = 0;
    const centerY = ctx.canvas.height / 2;

    // Translate the canvas content to center the X and Y axes
    ctx.translate(centerX, centerY);

    let pos = {};
    let connections = {};
    let visited = {};

    /* -------------------------------------------------------------------------- */
    /*                          recursing graph with dfs                          */
    /* -------------------------------------------------------------------------- */
    recurseGraph(visited, startingPoint, 100, 0, ctx, pos, connections, canvas);

  }, [isChange]);

  const recurseGraph = (vis, node, x, y, ctx, pos, connections, canvas) => {
    if (!vis[node]) {
      const width = 100; // Rectangle width
      const height = 30; // Rectangle height

      ctx.strokeRect(x - width / 2, y - height / 2, width, height);
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node, x, y);

      pos[node] = { x: x, y: y };

      vis[node] = true;
      const neighbors = data[node];
      const neighborCount = neighbors.length;
      let yOffset = -(neighborCount - 1) * 50;

      for (let i = 0; i < neighborCount; i++) {
        const neighbor = neighbors[i];
        const newX = x + 200;
        const newY = y + yOffset;

        if (
          !connections[`${node}-${neighbor}`] &&
          !connections[`${neighbor}-${node}`]
        ) {
          ctx.beginPath();
          ctx.moveTo(x + width / 2, y);
          ctx.lineTo(
            pos[neighbor] ? pos[neighbor].x - width / 2 : newX - width / 2,
            pos[neighbor] ? pos[neighbor].y : newY
          );
          ctx.stroke();
          connections[`${node}-${neighbor}`] = true;
        }

        recurseGraph(vis, neighbor, newX, newY, ctx, pos, connections, canvas);
        yOffset += 100;
      }
    }
  };
  return <canvas ref={canvasRef} width={mainWidth} height={mainHeight} />;
}

// GraphVisualizer.propTypes = {
//   canvasRef: PropTypes.func.isRequired,
//   data: PropTypes.object.isRequired,
//   isChange: PropTypes.bool.isRequired,
//   startingPoint: PropTypes.string.isRequired,
//   textColor: PropTypes.string.isRequired,
//   mainHeight: PropTypes.number.isRequired,
//   mainWidth: PropTypes.number.isRequired,
// };

GraphVisualizer.defaultProps = {
  mainHeight: 400,
  mainWidth: 500,
  textColor: "black",
  data: {},
};
