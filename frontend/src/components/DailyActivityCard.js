import React from "react";
import { Grid, Icon } from "@material-ui/core";
import { person, lens, menuBook, extension } from "@material-ui/icons";
import { red, green, cyan, orange } from "@material-ui/core/colors";

const getDifficulty = (arg, exe) => {
  let argSum = 0;
  let exeSum = 0;
  arg.map((a) => {
    argSum = argSum + a.difficulty;
  });
  exe.map((e) => {
    exeSum = exeSum + e.difficulty;
  });
  const avg = (argSum + exeSum) / (arg.length + exe.length);

  return avg;
};

function ActivityCard({ data }) {
  const { lesson, coaches, startTime } = data;

  const totalArguments = lesson.arguments.length;
  const totalExercises = lesson.exercises.length;

  const avg = getDifficulty(lesson.arguments, lesson.exercises);
  let difficultyColor;
  switch (true) {
    case (avg < 3):
      difficultyColor = green[500];
      break;
    case (avg < 6):
      difficultyColor = orange[500];
      break;
    case (avg > 9):
      difficultyColor = red[500];
      break;
    default:
      difficultyColor = cyan[500];
      break;
  }

  return (
    <div
      className="activityCard"
      style={{
        padding: "5px",
        backgroundColor: "lightgray",
        borderRadius: "5px",
        marginBottom: "5px",
      }}
    >
      <Grid container spacing={1}>
        <Grid container direction="column" item xs={2}>
          {startTime}
          <strong>
            {lesson.slot}
            <span>h</span>
          </strong>
        </Grid>
        <Grid container direction="column" item xs={10}>
          <h4 style={{ margin: "0px" }}>{lesson.title}</h4>
          <p>
            <span>
              Difficulty: {avg}
              <Icon style={{ color: difficultyColor }}>lens</Icon>
            </span>
            <span>
              <Icon>menuBook</Icon> {totalArguments}
            </span>
            <span>
              <Icon>extension</Icon> {totalExercises}
            </span>
          </p>
          <p>
            <Icon>person</Icon>
            {coaches.map((coach, idx) => (
              <span style={{ maginRight: "5px" }} key={idx}>
                {coach}
              </span>
            ))}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ActivityCard;
