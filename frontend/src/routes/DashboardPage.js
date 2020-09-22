import React from "react";
import { Grid } from "@material-ui/core";
import { ListItemAvatar, Avatar } from "@material-ui/core";
import ActivityCard from "../components/DailyActivityCard";

const mockActivity = [
  {
    startTime: "10:00",
    lesson: {
      title: "Quis aute iure reprehenderit in voluptate velit esse.",
      description: "description",
      slot: 1,
      arguments: [
        {
          title: "argument 1",
          desription: "argument description 1",
          difficulty: 3,
          topics: [
            {
              title: "topics",
            },
          ],
        },
        {
          title: "argument 2",
          desription: "argument description 2",
          difficulty: 7,
          topics: [
            {
              title: "topics",
            },
          ],
        },
        {
          title: "argument 3",
          desription: "argument description 3",
          difficulty: 3,
          topics: [
            {
              title: "topics",
            },
          ],
        },
      ],
      exercises: [
        {
          title: "exercises 1",
          desription: "exercises description 1",
          difficulty: 3,
          topics: [
            {
              title: "topics",
            },
          ],
        },
        {
          title: "exercises 2",
          desription: "exercises description 2",
          difficulty: 5,
          topics: [
            {
              title: "topics",
            },
          ],
        },
      ],
    },
    coaches: ["nome congnome 1", "nome congnome 2"],
  },
];

export default function DashboardPage() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid item>name</Grid>
        <Grid item>surname</Grid>
        <Grid style={{ marginRight: "0.7rem" }} item>
          <ListItemAvatar>
            <Avatar alt="img" src={process.env.PUBLIC_URL + ""} />
          </ListItemAvatar>
        </Grid>
        {mockActivity.map((activity, idx) => (
          <ActivityCard key={idx} data={activity} />
        ))}
      </Grid>
    </>
  );
}
