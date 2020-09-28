import React, { useState } from "react";
import { Grid, Button, List, ListItem } from "@material-ui/core";
import LateralView from "../components/LateralView";
import FormEditStudent from "../components/FormEditStudent";
import ChangePassword from "../components/ChangePassword";
let data = {
  id: 1,
  name: "Matteo",
  surname: "Schieven",
  email: "prova@prova.it",
  password: "1234",
  gender: "male",
  address: "Via Roma 123",
  municipality: "Vicenza",
  zipCode: "36100",
  nationality: { code: "AS", label: "American Samoa", phone: "1-684" },
  termsCondition: "true",
  privacy: "false",
  images: "true",
  birthday: "1999-05-12",
};

export default function Student() {
  const [openLateralView, setOpenLateralView] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  console.log(data);
  function EditPasswordOrData() {
    if (!editPassword) {
      return (
        <FormEditStudent
          data={data}
          onSubmit={(e) => {
            data = e;
            setOpenLateralView(false);
          }}
        />
      );
    } else {
      return (
        <ChangePassword
          onSubmit={(e) => {
            data.password = e;
            setOpenLateralView(false);
          }}
        />
      );
    }
  }
  return (
    <>
      <Grid container>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          wrap="nowrap"
          justify="space-between"
        >
          <Grid item md={6}>
            <h1>
              {data.name} {data.surname}
            </h1>
          </Grid>
          <Grid
            style={{ marginRight: "1em" }}
            container
            justify="flex-end"
            wrap="nowrap"
            item
            spacing={1}
          >
            <Grid item>
              <Button
                style={{margin:"1em", color: "white", backgroundColor: "#874399" }}
                variant="contained"
                onClick={() => {
                  setOpenLateralView(true);
                  setEditPassword(false);
                }}
              >
                Edit Profile
              </Button>
            </Grid>
            <Grid item>
              <Button 
                style={{margin:"1em", color: "white", backgroundColor: "#874399" }}
                variant="contained"
                onClick={() => {
                  setOpenLateralView(true);
                  setEditPassword(true);
                }}
              >
                Edit Password
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <List dense={true}>
        <ListItem>
          <p>E-mail: {data.email}</p>
        </ListItem>
        <ListItem>
          <p>
            Indirizzo: {data.address}, {data.zipCode}, {data.municipality}
          </p>
        </ListItem>
        <ListItem>
          <p>Data di Nascita: {data.birthday}</p>
        </ListItem>
        <ListItem>
          <p>Nationality:{data.nationality.label}</p>
        </ListItem>
        <ListItem>
          <p>
            Agreement to the use of images:{" "}
            {data.images == "true" ? "Accepted" : "No accepted"}
          </p>
        </ListItem>
      </List>
      <LateralView
        onOpen={openLateralView}
        onClose={() => setOpenLateralView(false)}
      >
        <EditPasswordOrData />
      </LateralView>
    </>
  );
}
