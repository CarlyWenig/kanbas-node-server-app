// import * as dao from "./dao.js";
// import Database from "../Database/index.js";
// export default function CourseRoutes(app) {
//   app.get("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     const course = Database.courses.find((c) => c._id === id);
//     if (!course) {
//       res.status(404).send("Course not found");
//       return;
//     }
//     res.send(course);
//   });

//   app.put("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     const course = req.body;
//     Database.courses = Database.courses.map((c) =>
//       c._id === id ? { ...c, ...course } : c
//     );
//     res.sendStatus(204);
//   });

//   app.post("/api/courses", (req, res) => {
//     const course = { ...req.body, _id: new Date().getTime().toString() };
//     Database.courses.push(course);
//     res.send(course);
//   });

//   app.delete("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     Database.courses = Database.courses.filter((c) => c._id !== id);
//     res.sendStatus(204);
//   });

//   app.get("/api/courses", (req, res) => {
//     const courses = Database.courses;
//     res.send(courses);
//   });
// }

import * as dao from "./dao.js";

export default function CourseRoutes(app) {
const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
    return;
};

const createCourse = async (req, res) => {
    const result = await dao.createCourse(req.body);
    return res.json(result);
};

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
};

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    res.json(status);
};

const findCourseById = async (req, res) => {
    const user = await dao.findCourseById(req.params.courseId);
    res.json(user);
};


  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.put("/api/courses/:courseId", updateCourse);
  app.get("/api/courses/:courseId", findCourseById);

}