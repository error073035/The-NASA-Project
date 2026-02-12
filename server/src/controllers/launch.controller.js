import {
  getAllLaunches as getAllLaunchesModel,
  addNewLaunch as addNewLaunchModel,
  abortLaunchById,
  existsLaunchWithId,
} from '../models/launch.model.js';

const getAllLaunches = (req, res) => {
  try {
    const launches = getAllLaunchesModel();
    return res.status(200).json(launches);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching launches', error: error.message });
  }
};

const addNewLaunch = (req, res) => {
  try {
    const launch = req.body;
    if (!launch || !launch.mission || !launch.rocket || !launch.target || !launch.launchDate) {
      return res.status(400).json({ message: 'Missing required launch property' });
    }

    const date = new Date(launch.launchDate);
    if (isNaN(date)) {
      return res.status(400).json({ message: 'Invalid launch date' });
    }

    const newLaunch = addNewLaunchModel({
      mission: launch.mission,
      rocket: launch.rocket,
      target: launch.target,
      launchDate: date.toISOString(),
      customers: launch.customers,
    });

    return res.status(201).json(newLaunch);
  } catch (error) {
    return res.status(500).json({ message: 'Error adding launch', error: error.message });
  }
};

const abortLaunch = (req, res) => {
  try {
    const id = req.params.id;
    if (!existsLaunchWithId(id)) {
      return res.status(404).json({ message: 'Launch not found' });
    }

    const aborted = abortLaunchById(id);
    if (!aborted) {
      return res.status(500).json({ message: 'Failed to abort launch' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ message: 'Error aborting launch', error: error.message });
  }
};

export { getAllLaunches, addNewLaunch, abortLaunch };