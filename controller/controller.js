const Student = require('../model/database')

//! home controller
exports.get_home = (req,res) =>{
    res.render('home')
}
//! login controller
exports.get_log = (req,res)=>{
    res.render('log')
}
exports.post_log = async(req,res) =>{ 
    // todo find out why is not verifying user
      const { email, password } = req.body;
			try {
				const studentEmail = await Student.findOne({ email: email });
				const studentPwd = await Student.findOne({ password: password });

				if (studentEmail == email  && studentPwd == password) {
					res.redirect(`/profile/${studentEmail.id}`);
				} else {
					res.send('incorrect email or password');
                    res.send(studentEmail)
				}
			} catch (err) {
				console.log(err);
			}
}
//! registration controller
exports.get_register = (req,res) =>{
    res.render('register')

}

exports.post_register =  async (req,res)=>{
     const student = new Student({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				otherName: req.body.otherName,
				email: req.body.email,
				password: req.body.password,
				program: req.body.program,
			});
			try {
				const newStudent = await student.save();
				res.status(201).redirect(`/profile/${newStudent.id}`);
			} catch (err) {
				console.log(err);
			}
}

//! student controller
exports.get_student_profile = async (req,res) =>{
    const student = await Student.findById(req.params.id)
    res.render('studentPage', {student})
}

exports.get_complete_reg_page = async (req,res) =>{
    let student = await Student.findById(req.params.id)
    res.render('complete-registration', {student})
}

exports.patch_complete_reg_page = async (req,res) =>{
    let studentId = req.params.id;
    try {
        let student = await Student.findByIdAndUpdate(studentId, {
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                dateOfBirth: req.body.dateOfBirth,
                state: req.body.state,
                nationality: req.body.nationality,
                primarySchool: req.body.primarySchool,
                secondarySchool: req.body.secondarySchool,
                waecNumber: req.body.waecNumber,
                necoNumber: req.body.necoNumber,
                jambNumber: req.body.jambNumber,
                kinName: req.body.kinName,
                relationship: req.body.relationship,
                kinAddress: req.body.kinAddress,
                kinNumber: req.body.kinNumber
            },{new:true});
            await student.save()
            res.redirect(`/profile/${studentId}`)
    } catch (err) {
        console.log(err);
    }
}


//! admin controller
exports.get_admin = async(req,res) =>{
    try {
        let students = await Student.find()
        res.render('admin',{students})
    } catch (err) {
        
    }
}

//! admin delete controller
exports.delete_student = async(req,res) =>{
    try {
        let student = await Student.findByIdAndDelete(req.params.id)
        res.redirect('/admin')
    } catch (err) {
        console.log(err);
    }
}