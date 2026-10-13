const express = require("express");
const winston = require("winston");

const app = express();
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({
            filename: "logs/app.log"
        }),
        new winston.transports.Console()
    ]
});

app.use(express.json());
logger.info("Server is running at http://localhost:3000 for roll number 23071A0516");

app.use((req, res, next) => {
    res.on("finish", () => {
        logger.info(`${req.method} ${req.originalUrl} ${res.statusCode}`);
    });

    next();
});
let students = [
    {
        id: 1,
        name: "Charmi",
        age: 20,
        course: "CSE"
    },
    {
        id: 2,
        name: "Ananya",
        age: 21,
        course: "ECE"
    }
];

const PORT = 3000;
app.get("/students", (req, res) => {
    res.json(students);
});
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});
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

    if (req.body.age) {
        student.age = req.body.age;
    }

    if (req.body.course) {
        student.course = req.body.course;
    }

    res.json(student);
});
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
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
