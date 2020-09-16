import React, { useState } from "react";
import nextId from "react-id-generator";
import { Grid, Button, TextField, makeStyles } from "@material-ui/core";
import { Route, Link, Switch } from "react-router-dom";
import Course from "./Course";
import LateralView from "../components/LateralView";

const courses = [];

export default function CoursesPage() {
  const [openLateralView, setOpenLateralView] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = () => {
    let newFormData = {
      id: nextId("course-"),
      path: title.replace(/\s+/g, "-").toLowerCase(),
      title: title,
      description: description,
    };
    if (courseId) {
      let course = findCourse(courseId);
      course.path = newFormData.path;
      course.title = newFormData.title;
      course.description = newFormData.description;
    } else {
      courses.push(newFormData);
    }
    console.log(courses);
    abortForm();
  };

  const abortForm = () => {
    setTitle("");
    setDescription("");
    setCourseId("");
    setOpenLateralView(false);
  };

  const findCourse = (id) => {
    let [courseToEdit] = courses.filter((course) => course.id === id);
    return courseToEdit;
  };

  const editCourse = (id) => {
    setCourseId(id);
    let course = findCourse(id);
    setTitle(course.title);
    setDescription(course.description);
    setOpenLateralView(true);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <h1>Courses Page {title}</h1>
        </Grid>
        <Grid item>
          <Button
            className="custom-button"
            variant="contained"
            size="medium"
            onClick={() => setOpenLateralView(true)}
          >
            New Course
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {courses.map((course, idx) => (
          <Grid key={idx} item md={6} lg={4}>
            <Link to={`courses/${course.id}`}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </Link>
            <Button variant="contained" onClick={() => editCourse(course.id)}>
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
        <form style={{ padding: "1rem" }}>
          <TextField
            id="title-field"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            id="title-field"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            multiline
            fullWidth
          />
          <Button variant="contained" onClick={() => abortForm()}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => submitForm(courseId)}
          >
            Submit
          </Button>
        </form>
      </LateralView>
      {/*             <Switch>
        {courses.map((course, i) => (
          <CoursePage key={i} {...course} />
        ))}
      </Switch>  */}
    </>
  );
}

/* function CoursePage(course) {
  return (
    <Route
      path={`courses/${course.id}`}
      render={(props) => <Course {...props} data={course} />}
    />
  );
} */
