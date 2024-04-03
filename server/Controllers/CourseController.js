const Cours = require("../Models/course");

// get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Cours.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: "Failed to get courses" });
    }
};

// create a new course
const createCourse = async (req, res) => {
    try {
        const { courseName, credit, year, term, department, lecturer, student } = req.body;
        const course = new Cours({
            courseName,
            credit,
            year,
            term,
            department,
            lecturer,
            student
        });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: "Failed to create course" });
    }
};


// update a course

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { courseName, credit, year, term, department, lecturer, student } = req.body;
        const course = await Cours.findByIdAndUpdate(
            id,
            { courseName, credit, year, term, department, lecturer, student },
            { new: true }
        );
        res.status(200).json(course);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update course" });
    }
}

// delete a course
const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        await Cours.findByIdAndDelete(id);
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete course" });
    }
};

// get by Id
const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Cours.findById(id);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: "Failed to get course" });
    }
};


// export 
module.exports = {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse,
    getCourseById
};
