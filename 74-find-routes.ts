export const findRoutes = (routes: string[][]): string => {
  const destinations = new Set<string>();
  const startPoints = new Set<string>();
  const endPoints = new Set<string>();

  for (const route of routes) {
    startPoints.add(route[0]);
    endPoints.add(route[1]);
  }

  for (const startPoint of startPoints) {
    if (!endPoints.has(startPoint)) {
      destinations.add(startPoint);
      break;
    }
  }

  while (routes.length > 0) {
    let foundNext = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i][0] === Array.from(destinations)[destinations.size - 1]) {
        destinations.add(routes[i][1]);
        routes.splice(i, 1);
        foundNext = true;
        break;
      }
    }
    if (!foundNext) {
      break;
    }
  }

  return Array.from(destinations).join(", ");
};

console.log(
  findRoutes([
    ["MNL", "TAG"],
    ["CEB", "TAC"],
    ["TAG", "CEB"],
    ["TAC", "BOR"],
  ])
);
