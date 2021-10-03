const mongoose = require('mongoose');

const { isEmail } = require('validator');

const studentSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, 'first name cannot be empty'],
	},
	lastName: {
		type: String,
		required: [true, 'last name cannot be empty'],
	},
	otherName: String,
	email: {
		type: String,
		required: true,
		validate: [isEmail, 'please give a valid email'],
	},
	password: {
		type: String,
		required: [true, 'password can not be blank'],
		minlength: [6, 'password must be morethan 6 character'],
	},
	program: {
		type: String,
		required: [true, 'program can not be blank'],
	},
	address: {
		type: String,
	},
	phoneNumber: {
		type: Number,
	},
	dateOfBirth: {
		type: String,
	},
	state: {
		type: String,
	},
	nationality: {
		type: String,
	},
	primarySchool: {
		type: String,
	},
	secondarySchool: {
		type: String,
	},
	waecNumber: {
		type: String,
	},
	necoNumber: {
		type: String,
	},
	jambNumber: {
		type: String,
	},
	kinName: {
		type: String,
	},
	relationship: {
		type: String,
	},
	kinAddress: {
		type: String,
	},
	kinNumber: {
		type: String,
	},
});

const student = mongoose.model('student', studentSchema);

module.exports = student;
