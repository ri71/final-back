const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "Manhattan, NYC",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		address: "Massachusetts",
		description: "This is a school in MA."
	});

	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Shmo",
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;