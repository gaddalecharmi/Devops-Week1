
const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

let students = [
    { id: 1, studentName: "Ravi", totalMarks: 85 },
    { id: 2, studentName: "Priya", totalMarks: 92 }
];

// GET: Retrieve all students
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// GET: Retrieve one student
app.get("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// POST: Add a student
app.post("/students", (req, res) => {
    const { id, studentName, totalMarks } = req.body;

    if (
        !Number.isInteger(id) ||
        typeof studentName !== "string" ||
        !Number.isInteger(totalMarks)
    ) {
        return res.status(400).json({ message: "Invalid student data" });
    }

    if (students.some(s => s.id === id)) {
        return res.status(409).json({ message: "Student ID already exists" });
    }

    const student = { id, studentName, totalMarks };
    students.push(student);

    res.status(201).json({
        message: "Student added successfully",
        student
    });
});

// PUT: Update a student
app.put("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { studentName, totalMarks } = req.body;

    if (
        typeof studentName !== "string" ||
        !Number.isInteger(totalMarks)
    ) {
        return res.status(400).json({ message: "Invalid student data" });
    }

    student.studentName = studentName;
    student.totalMarks = totalMarks;

    res.json({
        message: "Student updated successfully",
        student
    });
});

// DELETE: Delete a student
app.delete("/students/:id", (req, res) => {
    const index = students.findIndex(
        s => s.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Student microservice running on port ${PORT}`);
});
