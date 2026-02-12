async function httpGetPlanets() {
  // TODO: Once API is ready.
  const res = await fetch(`http://localhost:5000/api/v1/planets/get-all-planets`)
  return await res.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  const res = await fetch(`http://localhost:5000/api/v1/launches/get-all-launches`)
  return await res.json();
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  const res = await fetch(`http://localhost:5000/api/v1/launches/add-new-launch`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(launch),
  });
  return res; // caller will inspect status / parse JSON if needed
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  const res = await fetch(`http://localhost:5000/api/v1/launches/abort-launch/${id}`, {
    method: 'DELETE',
  });
  return res; // caller checks res.ok
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};