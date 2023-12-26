const catchAsyncError = require("../middleware/catchAsyncError");
const Course = require("../models/courseModel");
const ErrorHandler = require("../utils/errorHandler");

exports.createCourse = catchAsyncError(async (req, res, next) => {
    const { title, description, category, createdBy } = req.body;
    if (!title || !description || !category || !createdBy)
        return next(new ErrorHandler("Please Add all Field", 400));

    //const file = req.file;
    await Course.create({
        title,
        description,
        category,
        createdBy,
        poster: {
            public_id: "temp",
            url: "temp",
        },
    })
    res.status(201).json({
        success: true,
        message: "Course Created Successfully. You can add Lecture Now",
    });
})

exports.getAllCourse = catchAsyncError(async (req, res, next) => {
    const courses = await Course.find().select("-lectures");
    res.status(200).json({
        success: true,
        courses,
    });
});

