const seniorGroup = require("../Models/seniorGroup");

const StudentModel = require("../Models/student");
// Create a new senior group
const createSeniorGroup = async (req, res) => {
  try {
    const user = req.user;
    // if (user.premissions.includes("Academician") === false)
    //   return res
    //     .status(401)
    //     .json({ message: "You are not allowed to create a senior group" });
    const { title, students, lecturer } = req.body;
    //const Students = await StudentModel.findMany({ _id: { $in: students } });
    const newSeniorGroup = await seniorGroup.create({
      title,
      lecturer,
      students,
    });
    res.status(201).json(newSeniorGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addStudentToGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const { studentId } = req.body;
    const group = await seniorGroup.findById(groupId);
    if (group.students.includes(studentId))
      return res.status(409).json("This student is already in the group");
    group.students.push(studentId);
    await group.save();
    return res.status(200).json({ group });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeStudentFromGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const { studentId } = req.body;
    const group = await seniorGroup.findById(groupId);
    group.students.pull(studentId);
    await group.save();
    return res.status(200).json({ group });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all senior groups
const getLecturerSeniorGroups = async (req, res) => {
  try {
    const user = req.user;
    // if (user.premissions.includes("Academician") === false)
    //   return res
    //     .status(401)
    //     .json({ message: "You are not allowed to view senior groups" });

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

    const seniorGroupId = req.params.id;
    const group = await seniorGroup
      .findById(seniorGroupId)
      .populate({
        path: "students",
        select: "name",
      })
      .populate({
        path: "lecturer",
        select: "name",
      });
    if (!group) {
      return res.status(404).json({ message: "Senior group not found" });
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get student group
const getStudentSeniorGroup = async (req, res) => {
  try {
    const user = req.user;

    const group = await seniorGroup
      .findOne({ students: user._id })
      .populate({
        path: "students",
        select: "firstName lastName ",
      })
      .populate({
        path: "lecturer",
        select: "firstName lastName sex",
      });
    if (!group) {
      return res.status(404).json({ message: "Senior group not found" });
    }
    res.status(200).json(group);
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
  getLecturerSeniorGroups,
  getSeniorGroupById,
  updateSeniorGroupById,
  deleteSeniorGroupById,
  addStudentToGroup,
  removeStudentFromGroup,
  getStudentSeniorGroup,
};

// add file
