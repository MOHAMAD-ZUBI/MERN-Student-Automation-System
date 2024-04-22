const seniorGroup = require("../Models/seniorGroup");

const StudentModel = require("../Models/student");
// Create a new senior group
const createSeniorGroup = async (req, res) => {
  try {
    const user = req.user;
    if (user.premissions.includes("Academician") === false)
      return res
        .status(401)
        .json({ message: "You are not allowed to create a senior group" });
    const { title, students } = req.body;
    //const Students = await StudentModel.findMany({ _id: { $in: students } });
    const newSeniorGroup = await seniorGroup.create({
      title,
      lecturer: Lecturer,
      students,
    });
    res.status(201).json(newSeniorGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all senior groups
const getAllSeniorGroups = async (req, res) => {
  try {
    const user = req.user;
    if (user.premissions.includes("Academician") === false)
      return res
        .status(401)
        .json({ message: "You are not allowed to view senior groups" });

    const seniorGroups = await seniorGroup
      .find({ lecturer: user._id })
      .populate({
        path: "students",
        select: "name",
      });

    res.status(200).json(seniorGroups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single senior group by ID
const getSeniorGroupById = async (req, res) => {
  try {
    const user = req.user;
    if (user.premissions.includes("Academician") === false)
      return res
        .status(401)
        .json({ message: "You are not allowed to view senior groups" });
    const seniorGroupId = req.params.id;
    const seniorGroup = await seniorGroup
      .findById(seniorGroupId)
      .populate({
        path: "students",
        select: "name",
      })
      .populate({
        path: "lecturer",
        select: "name",
      });
    if (!seniorGroup) {
      return res.status(404).json({ message: "Senior group not found" });
    }
    res.status(200).json(seniorGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a senior group by ID
const updateSeniorGroupById = async (req, res) => {
  try {
    const seniorGroupId = req.params.id;
    const { title, lecturer, students } = req.body;
    const updatedSeniorGroup = await seniorGroup.findByIdAndUpdate(
      seniorGroupId,
      { title, lecturer, students },
      { new: true }
    );
    if (!updatedSeniorGroup) {
      return res.status(404).json({ message: "Senior group not found" });
    }
    res.status(200).json(updatedSeniorGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a senior group by ID
const deleteSeniorGroupById = async (req, res) => {
  try {
    const seniorGroupId = req.params.id;
    const deletedSeniorGroup = await seniorGroup.findByIdAndDelete(
      seniorGroupId
    );
    if (!deletedSeniorGroup) {
      return res.status(404).json({ message: "Senior group not found" });
    }
    res.status(200).json({ message: "Senior group deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSeniorGroup,
  getAllSeniorGroups,
  getSeniorGroupById,
  updateSeniorGroupById,
  deleteSeniorGroupById,
};
