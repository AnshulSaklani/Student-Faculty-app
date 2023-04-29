var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
//const port= 2450;
var port = process.env.PORT || 2450;
grtOrLess = "";

customers = [
  {
    custId: 1,
    name: "ABC",
    password: "abc1234",
    role: "admin",
    email: "abc@gmail.com"
  },
  {
    custId: 2,
    name: "Willie",
    password: "willie1234",
    role: "student",
    email: "willie@gmail.com"
  },
  {
    custId: 3,
    name: "Jack",
    password: "jack1234",
    role: "faculty",
    email: "jack@gmail.com"
  },
  {
    custId: 4,
    name: "James",
    password: "james1234",
    role: "student",
    email: "james@gmail.com"
  },
  {
    custId: 5,
    name: "Harry",
    password: "harry1234",
    role: "faculty",
    email: "harry@gmail.com"
  },
  {
    custId: 6,
    name: "Tia",
    password: "tia1234",
    role: "student",
    email: "tia@gmail.com"
  },
  {
    custId: 7,
    name: "Aditya",
    password: "aditya123",
    role: "faculty",
    email: "aditya@gmail.com"
  },
  {
    custId: 8,
    name: "Sonu",
    password: "sonu1234",
    role: "student",
    email: "sonu@gmail.com"
  },
  {
    custId: 9,
    name: "Ellie",
    password: "ellie1234",
    role: "student",
    email: "ellie@gmail.com"
  },
  {
    custId: 10,
    name: "Gia",
    password: "gia1234",
    role: "faculty",
    email: "gia@gmail.com"
  }
];
courses = [
  {
    courseId: 1,
    name: "ANGULAR",
    code: "ANG97",
    description: "All fundamentals of Angular 7",
    faculty: ["Daniel", "Jack"],
    students: ["Sam", "Tia"]
  },
  {
    courseId: 2,
    name: "JAVASCRIPT",
    code: "JS124",
    description: "Intoduction to javascript",
    faculty: ["Aditya"],
    students: ["James", "Joy", "Monu", "Rita", "Tia"]
  },
  {
    courseId: 3,
    name: "REACT",
    code: "RCT56",
    description: "React Javascript library",
    faculty: ["Jack", "Gia"],
    students: ["Raima", "Rita", "Sonu", "James"]
  },
  {
    courseId: 4,
    name: "BOOTSTRAP",
    code: "BS297",
    description: "Bootstrap Designing Framework",
    faculty: [],
    students: ["James", "Tia", "Ellie"]
  },
  {
    courseId: 5,
    name: "CSS",
    code: "CS365",
    description: "Basic stylesheet language",
    faculty: [],
    students: ["James", "Rita", "Monica"]
  },
  {
    courseId: 6,
    name: "REST AND MICROSERVICES",
    code: "RM392",
    description: "Introduction to Microservices",
    faculty: [],
    students: ["Sam"]
  },
  {
    courseId: 7,
    name: "NODE",
    code: "ND725",
    description: "Introduction to Node",
    faculty: ["Sonia"],
    students: ["Saransh", "Shrey", "Monica"]
  }
];
faculties = [
  { id: 5, name: "Daniel", courses: ["ANGULAR"] },
  { id: 4, name: "Sonia", courses: ["NODE"] },
  { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
  { id: 2, name: "Gia", courses: ["REACT"] },
  { id: 1, name: "Aditya", courses: ["ANGULAR"] }
];
classes = [
  {
    classId: 1,
    course: "REACT",
    time: "07:45",
    endTime: "08:45",
    topic: "Redux",
    facultyName: "Jack"
  },
  {
    classId: 2,
    course: "ANGULAR",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Jack"
  },
  {
    classId: 3,
    course: "JAVASCRIPT",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Aditya"
  }
];
students = [
  {
    id: 16,
    name: "Willie",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "NODE"]
  },
  {
    id: 15,
    name: "Tia",
    courses: ["ANGULAR","JAVASCRIPT","BOOTSTRAP"]
  },
  {
    id: 14,
    name: "Apoorv",
    dob: "31-August-1998",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 13,
    name: "Joy",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 12,
    name: "Rachel",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 11,
    name: "Monica",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["CSS", "NODE"]
  },
  {
    id: 10,
    name: "Monu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 9,
    name: "Sonu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["REACT"]
  },
  {
    id: 8,
    name: "Raima",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["REACT"]
  },
  {
    id: 7,
    name: "Rita",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "REACT", "CSS"]
  },
  {
    id: 6,
    name: "Shrey",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["NODE"]
  },
  {
    id: 5,
    name: "Saransh",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: ["NODE"]
  },
  {
    id: 4,
    name: "Sanya",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 3,
    name: "James",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
  },
  {
    id: 2,
    name: "Sam",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "REST AND MICROSERVICES"]
  },
  {
    id: 1,
    name: "Ellie",
    dob: "12-June-1992",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["BOOTSTRAP"]
  }
];

app.post("/login", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var cust = customers.find(function(item) {
    return item.email === email && item.password === password;
  });
  console.log(cust);
  var custRec= {
    name: cust.name,
		email: cust.email,
    role: cust.role
  }
  //if null then send error
  res.send(custRec);
});

app.post("/register", function(req, res) {
  const cust = {
    name: req.body.name,
		email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
	customers.unshift(cust);
  var customerRes= {
    name: req.body.name,
    role: req.body.role,
		email: req.body.email
  }

  res.send(customerRes);
});

app.get("/getStudentNames", function(req, res) {
  studentList = [];
  students.map(function(stud) {
   studentList.push(stud.name);
  });
	console.log(studentList);
	res.send(studentList);
});

app.get("/getFacultyNames", function(req, res) {
  facultyList = [];
  faculties.map(function(faculty) {
	 facultyList.push(faculty.name);
  });
	console.log(facultyList);
	res.send(facultyList);
});

app.get("/getCourses/:courseId", function(req, res) {
	var courseId = req.params.courseId;
	let index = courses.findIndex((obj1) => Number(obj1.courseId) === Number(courseId));
	console.log(courses[index]);
  res.send(courses[index]);
});

app.get("/getCourses", function(req, res) {
  res.send(courses);
});

app.put("/putCourse/:courseId", function (req, res) {
  console.log("Put called");
  const course = req.body;
	var courseId = req.params.courseId;
  let index = courses.findIndex((obj1) => Number(obj1.courseId) === Number(courseId));
  if (index >= 0) {
    courses[index] = course;
    res.send(course);
  } else res.send("not found");
});

app.get("/getStudents", function(req, res) {
	var course = req.query.course;
	var coursesOp = (course) ? course.split(',') : "";
  var list = students;
	if (coursesOp.length > 0) {
    list = students.filter(function(item) {
			for(let i=0; i<item.courses.length; i++) {
				return (coursesOp.findIndex(c => c === item.courses[i])>=0);
			}
    });
		console.log(list);
	}
  let resArr = pagination(list, parseInt(req.query.page));
  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
});

app.get("/getFaculties", function(req, res) {
	var course = req.query.course;
	var coursesOp = (course) ? course.split(',') : "";
  var list = faculties;
	if (coursesOp.length > 0) {
    list = faculties.filter(function(item) {
			for(let i=0; i<item.courses.length; i++) {
				return (coursesOp.findIndex(c => c === item.courses[i])>=0);
			}
    });
		console.log(list);
	}
  let resArr = pagination(list, parseInt(req.query.page));
  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
});

app.post("/postStudentDetails", function(req, res) {
	let id = Number(students[0].id) + 1;
  const student = {
		id: id,
    name: req.body.name,
		dob: req.body.dob,
    gender: req.body.gender,
    about: req.body.about,
		courses: []
  }
  students.unshift(student);
  res.send(student);
});

app.get("/getStudentDetails/:name", function(req, res) {
  var list = faculties;
	var user = req.params.name;
	var list = students.find(function(item) {
    return item.name === user;
  });
  res.json({
		id: list.id,
    name: list.name,
    dob: list.dob,
    gender: list.gender,
    about: list.about,
  });
});

app.get("/getStudentCourse/:name", function(req, res) {
  var list = [];
	var user = req.params.name;
	list = courses.filter(function(item) {
    return (item.students.findIndex(st => st === user)>=0);
  });
  res.send(list);
});

app.get("/getStudentClass/:name", function(req, res) {
  var list = [];
	var user = req.params.name;
	let index = students.findIndex(st => st.name === user);
	if(index >= 0) {
		list = classes.filter(function(item) {
			return (students[index].courses.findIndex(st => st === item.course)>=0);
		});
		res.send(list);
	}
	else {
		res.send("Not Found");
	}
});

app.get("/getFacultyCourse/:name", function(req, res) {
  var list = [];
	var user = req.params.name;
	let index = faculties.findIndex(st => st.name === user);
	if(index >= 0) {
		list = courses.filter(function(item) {
			return (faculties[index].courses.findIndex(st => st === item.name)>=0);
		});
		res.send(list);
	}
	else {
		res.send("Not Found");
	}
});

app.get("/getFacultyClass/:name", function(req, res) {
  var list = [];
	var user = req.params.name;
	let index = faculties.findIndex(st => st.name === user);
	if(index >= 0) {
		list = classes.filter(function(item) {
			return (faculties[index].courses.findIndex(st => st === item.course)>=0);
		});
		res.send(list);
		console.log(list);
	}
	else {
		res.send("Not Found");
	}
});

app.post("/postClass", function(req, res) {
	let id = Number(classes[classes.length-1].classId) + 1;
  const cls = {
		classId: id,
		course: req.body.course,
		time: req.body.time,
		endTime: req.body.endTime,
		topic: req.body.topic,
		facultyName: req.body.facultyName
  }
  classes.push(cls);
  res.send(cls);
});

app.put("/postClass/:classId", function (req, res) {
  console.log("Put called");
  let cls = req.body;
	var classId = req.params.classId;
	cls.classId = classId;
  let index = classes.findIndex((obj1) => Number(obj1.classId) === Number(classId));
  if (index >= 0) {
    classes[index] = cls;
    res.send(cls);
  } else res.send("not found");
});

app.get("/getClass/:classId", function(req, res) {
  var list = {};
	var id = req.params.classId;
	list = classes.find(function(item) {
    return (Number(item.classId) === Number(id));
  });
  res.send(list);
});


function pagination(obj, page) {
  const postCount = obj.length;
  const perPage = 3;
  //const pageCount = Math.ceil(postCount / perPage);
  var resArr = obj;
  resArr = resArr.slice(page * 3 - 3, page * 3);
  return resArr;
}

app.listen(port, () => console.log(`Node app listening on port ${port}!`));
