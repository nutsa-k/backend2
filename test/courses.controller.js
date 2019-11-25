

const model = require('../models/courses')

exports.getAll = function(req, res) { 
    let courses = model.getAllCourses()
    res.statusCode = 200
    res.json({data: courses});
}
