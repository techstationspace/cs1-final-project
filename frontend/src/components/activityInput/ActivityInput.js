import React, { useState, useEffect } from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Grid from "@material-ui/core/Grid";
import { style, compose } from "@material-ui/system";

export const textColor = style({
  prop: "color",
  themeKey: "palette",
});

export const bgcolor = style({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
});

const palette = compose(textColor, bgcolor);

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const mockActivityData = {
  lesson: "",
  coach: "",
};

function ActivityInput() {
  const [activityData, setActivityData] = useState(mockActivityData);
  const [lessonTitle, setLessonTitle] = useState(mockActivityData.lesson);
  const [coaches, setCoaches] = useState(mockActivityData.coach);
  useEffect(() => {
    if (!!lessonTitle && !!coaches) {
      setActivityData({lesson:lessonTitle, coach:coaches});
    }
  }, [activityData] )
  
  console.log(activityData);
  return (
    <Grid style={{ padding: 20 }}>
      <Box>
        <div style={{ width: 500 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={lessonList.map((option) => option.title)}
            onChange={(event, newValue) => {
              setLessonTitle(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Activity"
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </div>
        <div style={{ width: 500 }}>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={coachList}
            disableCloseOnSelect
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {
              setCoaches(newValue);
            }}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}
              </React.Fragment>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Coach"
                placeholder="Select a Coach"
              />
            )}
          />
        </div>
      </Box>
    </Grid>
  );
}

// Activity Lessons List Array {title, slot}
const lessonList = [
  { title: "Intro HTML", slot: 2 + "h" },
  { title: "Intro CSS", slot: 4 + "h" },
  { title: "Intro React JS", slot: 1 + "h" },
  { title: "Objects Javascript", slot: 2 + "h" },
];

// Activity CoachName/ CoachId List {name}

const coachList = [
  { name: "Mirco" },
  { name: "Matteo" },
  { name: "Mattia" },
  { name: "Sergio" },
];

export default ActivityInput;
