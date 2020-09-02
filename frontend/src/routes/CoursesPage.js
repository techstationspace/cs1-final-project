import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";
import Course from "./Course";
import LateralView from "../components/LateralView";

const mockCourses = [
  {
    id: "example-course-1",
    title: "Example course 1",
    content: "This course is the first one",
  },
  {
    id: "example-course-2",
    title: "Example course 2",
    content: "This course is the second one",
  },
];

export default function CoursesPage() {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1>Courses Page</h1>
      <Button onClick={handleModalOpen}>Open Lateral View</Button>
      <Grid container spacing={3}>
        {mockCourses.map((course, idx) => (
          <Grid key={idx} item md={6} lg={4}>
            <Link to={`courses/${course.id}`}>
              <h2>{course.title}</h2>
              <p>{course.content}</p>
            </Link>
          </Grid>
        ))}
      </Grid>
      <LateralView onOpen={open} onClose={handleModalClose}>
        <h1>Title lateral view</h1>
      </LateralView>
      <Switch>
        {mockCourses.map((course, i) => (
          <CoursePage key={i} {...course} />
        ))}
      </Switch>
    </>
  );
}

function CoursePage(course) {
  return (
    <Route
      path={`courses/${course.id}`}
      render={(props) => <Course {...props} data={course} />}
    />
  );
}
