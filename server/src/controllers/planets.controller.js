import planets from "../models/planets.model.js";

const getAllPlanets = async (req, res) => {
  try {
    if (!planets || planets.length === 0) {
      return res.status(404).json({ message: 'No planets found' });
    }
    return res.status(200).json(planets);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching planets', error: error.message });
  }
};


export { getAllPlanets };