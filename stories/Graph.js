import React, { useEffect, useRef } from "react";

export function GraphVisualizer({
  canvasRef,
  data,
  isChange,
  startingPoint,
  textColor,
  mainHeight,
  mainWidth,
  nodeShape,
  gapBetweenNodes=1.5
}) {
  if (!canvasRef) {
    canvasRef = useRef(null);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    let pos = {};
    let connections = {};
    let visited = {};

    recurseGraph(
      visited,
      startingPoint,
      100,
      200,
      ctx,
      pos,
      connections,
      canvas
    );
  }, [isChange]);

  const recurseGraph = (vis, node, x, y, ctx, pos, connections, canvas) => {
    if (!vis[node]) {
      const text = node;
      const textWidth = ctx.measureText(text).width;
      const paddingX = 10;
      const contentWidth = textWidth + 2 * paddingX;
      const contentHeight = 30;

      const nodeWidth = contentWidth;
      const nodeHeight = contentHeight;
      const nodeRadius = Math.max(nodeWidth, nodeHeight) / 2;

      if (x < nodeRadius) x = nodeRadius;
      if (x > canvas.width - nodeRadius) x = canvas.width - nodeRadius;
      if (y < nodeRadius) y = nodeRadius;
      if (y > canvas.height - nodeRadius) y = canvas.height - nodeRadius;

      ctx.clearRect(
        x - nodeRadius,
        y - nodeRadius,
        2 * nodeRadius,
        2 * nodeRadius
      );

      if (nodeShape === "circle") {
        ctx.beginPath();
        ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffff"; // White background for circle
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.fillStyle = "#e0e0e0";
        ctx.fillRect(
          x - nodeWidth / 2,
          y - nodeHeight / 2,
          nodeWidth,
          nodeHeight
        );
      }

      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, x, y);

      pos[node] = { x: x, y: y };

      vis[node] = true;
      const neighbors = data[node];
      const neighborCount = neighbors.length;
      let yOffset = -(neighborCount - 1) * 25*gapBetweenNodes;

      for (let i = 0; i < neighborCount; i++) {
        const neighbor = neighbors[i];
        const newX = x + (100)*gapBetweenNodes;
        const newY = y + yOffset;

        if (
          !connections[`${node}-${neighbor}`] &&
          !connections[`${neighbor}-${node}`]
        ) {
          ctx.beginPath();
          ctx.moveTo(x + nodeWidth / 2 + 1, y);
          ctx.lineTo(
            pos[neighbor] ? pos[neighbor].x - (nodeWidth / 2) : newX,
            pos[neighbor] ? pos[neighbor].y : newY
          );
          ctx.stroke();
          connections[`${node}-${neighbor}`] = true;
        }

        recurseGraph(vis, neighbor, newX, newY, ctx, pos, connections, canvas);
        yOffset += 50*gapBetweenNodes;
      }
    }
  };

  return <canvas ref={canvasRef} width={mainWidth} height={mainHeight} />;
}

GraphVisualizer.defaultProps = {
  mainHeight: 400,
  mainWidth: 500,
  textColor: "black",
  data: {},
  nodeShape: "rectangle",
};
