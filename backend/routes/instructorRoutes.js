const express = require('express');
const {
  getAllInstructors,
  createInstructor,
  getInstructorById,
  deleteInstructor
} = require('../controllers/instructorController');

const router = express.Router();

// @route   GET /api/instructors
// @desc    Get all instructors
router.get('/', getAllInstructors);

// @route   POST /api/instructors
// @desc    Create a new instructor
router.post('/', createInstructor);

// @route   GET /api/instructors/:id
// @desc    Get instructor by ID
router.get('/:id', getInstructorById);

// @route   DELETE /api/instructors/:id
// @desc    Delete an instructor
router.delete('/:id', deleteInstructor);

module.exports = router;
