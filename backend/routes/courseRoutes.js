const express = require('express');
const { getAllCourse, createCourse } = require('../controllers/courseController');

const router = express.Router();
router.route('/createcourse').post(createCourse);
router.route('/course').get(getAllCourse);

module.exports = router