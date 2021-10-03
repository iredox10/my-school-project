const express = require('express');
const route = express.Router();
const controller = require('../controller/controller')


route.get('/',controller.get_home)
route.patch('/complete-registration/:id', controller.patch_complete_reg_page)
route.get('/register',controller.get_register)
route.post('/register',controller.post_register)

route.get('/log', controller.get_log)
route.post('/log', controller.post_log)

route.delete('/profile/:id', controller.delete_student)

route.get('/profile/:id', controller.get_student_profile)
route.get('/complete-registration/:id', controller.get_complete_reg_page)

route.get('/admin', controller.get_admin)
module.exports = route