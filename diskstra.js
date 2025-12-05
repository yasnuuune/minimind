function initDemoDijkstra() {
  const container = document.getElementById("demo-dijkstra");
  container.innerHTML = "";

  // Simple graph example
  const nodes = ["A", "B", "C", "D"];
  const edges = {
    A: { B: 1, C: 4 },
    B: { C: 2, D: 5 },
    C: { D: 1 },
    D: {},
  };

  const nodeEls = {};
  nodes.forEach((node) => {
    const el = document.createElement("div");
    el.textContent = node;
    el.style.width = "50px";
    el.style.height = "50px";
    el.style.background = "#fff3d1";
    el.style.border = "2px solid #7c3f00";
    el.style.borderRadius = "50%";
    el.style.display = "inline-flex";
    el.style.justifyContent = "center";
    el.style.alignItems = "center";
    el.style.margin = "10px";
    el.style.cursor = "pointer";
    container.appendChild(el);
    nodeEls[node] = el;
  });

  // Compute shortest path from A to Dd
  const path = ["A", "B", "C", "D"]; // simplified path for demo
  let i = 0;
  setInterval(() => {
    if (i >= path.length) return;
    nodeEls[path[i]].style.background = "#d4a556";
    i++;
  }, 600);
}

window.onload = () => {
  if (document.getElementById("demo-dijkstra")) initDemoDijkstra();
};
