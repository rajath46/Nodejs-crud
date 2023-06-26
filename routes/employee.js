const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')
const {addEmployeeValidation} = require('../validation/employee/employee.validation');




router.get('/',EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/store',addEmployeeValidation, EmployeeController.store)
router.put('/update', EmployeeController.update)
router.delete('/delete', EmployeeController.destroy)

module.exports = router
