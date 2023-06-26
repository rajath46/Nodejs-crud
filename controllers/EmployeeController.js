const { response } = require('express')

const Employee = require('../models/Employee')

const index = (req, res, next) => {
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}
const store = (req, res , next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save() 
    .then(response =>{
        res.json({
            message:'Employee added successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updatedData ={
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
        res.json({
            message:'employee updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}


const destroy = (req, res , next) => {
    let employeeID = req.body.employeeID
    Employee.findOneAndRemove(employeeID)
    .then(()=>{
        req.json({
            message: 'Employee deleted successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}


module.exports ={
    index, show, store, update, destroy
}