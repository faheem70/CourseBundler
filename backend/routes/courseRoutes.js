const express = require('express');
const { getAllCourse, createCourse, getCourseLectures, addLecture, deleteCourse, deleteLecture } = require('../controllers/courseController');
const singleUpload = require('../middleware/multer');
const { authorizAdmin, isAuthenticatedUser } = require('../middleware/auth');

const router = express.Router();
router.route('/createcourse').post(isAuthenticatedUser, authorizAdmin, singleUpload, createCourse);
router.route('/course').get(getAllCourse);

router.route('/course/:id').get(isAuthenticatedUser, getCourseLectures).post(isAuthenticatedUser, authorizAdmin, singleUpload, addLecture).delete(isAuthenticatedUser, authorizAdmin, deleteCourse);
router.route("/lecture").delete(isAuthenticatedUser, authorizAdmin, deleteLecture);
module.exports = router