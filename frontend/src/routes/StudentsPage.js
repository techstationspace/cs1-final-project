<<<<<<< HEAD
import React, {useState} from "react";
import nextId from "react-id-generator";
import FormSendCandidacy from "../components/FormSendCandidacy";
import { Grid, Button} from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";
//import Course from "./Course";
import Student from "./Profile";
import LateralView from "../components/LateralView";

let mokData = {
  id: 1,
  name: "Matteo",
  surname: "Schieven",
  email: "prova@prova.it",
  password: "1234",
  gender: "male",
  address: "Via Roma 123",
  municipality: "Vicenza",
  zipCode: "36100",
  nationality: { code: 'AS', label: 'American Samoa', phone: '1-684' },
  termsCondition: "true",
  privacy: "false",
  images: "true",
  birthday: "1999-05-12"
};
let students= [];
=======
import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
>>>>>>> delete ButtonNav

export default function StudentsPage() {
  let [data , setForm]= React.useState(mokData);
  const [openLateralView, setOpenLateralView] = useState(false);
  const [studentId, setStudentId] = useState("");

 const submitForm = (data) => {
    /*let newFormData = {
      id: nextId("course-"),
      path: title.replace(/\s+/g, '-').toLowerCase(),
      title: title,
      description: description,
    };*/
    let newFormData = data
    newFormData.id = nextId("course-")
    
    if(studentId) {
      let student = findStudent(studentId);
      student = copyDataStudent(newFormData)
      console.log(student)
    } else {
      students.push(newFormData);
    }
    //console.log(courses);
    setForm("");
    setStudentId("")
  };
{/*  const abortForm = () => {
    setTitle("");
    setDescription("");
    setCourseId("");
    setOpenLateralView(false);
  }
*/}
  const copyDataStudent= (data) =>{
    let value={}
    for(const property in data){
      value[property]= data[property];
    }
    return value
  }
  const findStudent = (name) => {
    let [studentToEdit] = students.filter(student => student.name === name);
    return studentToEdit;
  }

  const editCourse = (name) => {
    setStudentId(name);
    let student = findStudent(name);
    setForm(student)
    setOpenLateralView(true);
  }
  return (
    <>
      <h1>Student Page</h1>
      <Button onClick={() => setOpenLateralView(true)}>
        New Student
      </Button>
      <Grid container spacing={3}>
        {students.map((student, idx) => (
          <Grid key={idx} item md={6} lg={4}>
            <Link to={`student/${student.name}`}>
              <h2>{student.name} {student.surname}</h2>
            </Link>
            <Button
              variant="contained"
              onClick={() => editCourse(student.name)}
            >
              Edit course
            </Button>
          </Grid>
        ))}
      </Grid>
      <LateralView
        onOpen={openLateralView}
        onClose={() => setOpenLateralView(false)}
      >
        {/* Here start the children inside LateralView */}
        
        <FormSendCandidacy data={data} onSubmit={(e) => {submitForm(e)
           setOpenLateralView(false)}}/>
      </LateralView>
      <Switch>
        {students.map((student, i) => (
          <StudentPage key={i} {...student} />
        ))}
      </Switch>
    </>
  );
}
