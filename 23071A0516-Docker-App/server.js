const express = require("express");

const app = express();

app.use(express.json());

// In-memory student data
let students = [
    {
        id: 1,
        name: "Charmi",
        rollNo: "23071A0516",
        course: "Computer Science"
    },
    {
        id: 2,
        name: "Ananya",
        rollNo: "23071A0520",
        course: "Electronics"
    }
];


// GET all students
app.get("/students", (req, res) => {
    res.json(students);
});


// GET student by ID
app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});


// POST a new student
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        rollNo: req.body.rollNo,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});


// PATCH student
app.patch("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    if (req.body.name) {
        student.name = req.body.name;
    }

    if (req.body.rollNo) {
        student.rollNo = req.body.rollNo;
    }

    if (req.body.course) {
        student.course = req.body.course;
    }

    res.json(student);
});


// DELETE student
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});


// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});