let latestFlightNumber = 100;

const launches = new Map();

function getAllLaunches() {
  // return array sorted by flightNumber
  return Array.from(launches.values()).sort((a, b) => a.flightNumber - b.flightNumber);
}

function existsLaunchWithId(id) {
  return launches.has(Number(id));
}

function addNewLaunch(launch) {
  latestFlightNumber += 1;
  const flightNumber = latestFlightNumber;

  const newLaunch = {
    flightNumber,
    mission: launch.mission,
    rocket: launch.rocket,
    target: launch.target,
    launchDate: new Date(launch.launchDate).toISOString(),
    upcoming: true,
    success: true,
    customers: launch.customers || ["NASA"],
  };

  launches.set(flightNumber, newLaunch);
  return newLaunch;
}

function abortLaunchById(id) {
  const fid = Number(id);
  if (!launches.has(fid)) return false;
  const launch = launches.get(fid);
  launch.upcoming = false;
  launch.success = false;
  launches.set(fid, launch);
  return true;
}

// Seed with a sample launch for testing
addNewLaunch({
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  target: "Kepler-442b",
  launchDate: new Date().toISOString(),
  customers: ["NASA", "ZTM"],
});

export { getAllLaunches, addNewLaunch, abortLaunchById, existsLaunchWithId };
