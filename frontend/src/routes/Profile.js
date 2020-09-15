import React, {useState} from "react";
import { Grid, Button } from "@material-ui/core";
import LateralView from "../components/LateralView";
import FormEditStudent from "../components/FormEditStudent";
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
  nationality: { code: 'AS', label: 'American Samoa', phone: '1-684' },
  termsCondition: "true",
  privacy: "false",
  images: "true",
  birthday: "1999-05-12"
};

export default function Student() {
  const [openLateralView, setOpenLateralView] = useState(false);
  console.log(data);
  return (
    <>
      <Grid container>
        <Grid item>
          <h1>{data.name} {data.surname}</h1>
        </Grid>
        <Grid item>
          <Button onClick={() => setOpenLateralView(true)}>
            Edit Student
          </Button>
        </Grid>
      </Grid>
      
      <p>E-mail: {data.email}</p>
      <p>Indirizzo: {data.address}, {data.zipCode}, {data.municipality}</p>
      <p>Data di Nascita: {data.birthday}</p>
      <p>Nationality:{data.nationality.label}</p>
      <p>Agreement to the use of images: {data.images == "true"? "Accepted" : "No accepted"}</p>
      <p></p>
      <LateralView
        onOpen={openLateralView}
        onClose={() => setOpenLateralView(false)}
      >
        <FormEditStudent data={data} onSubmit={(e) => data= e}/>
      </LateralView>
    </>
  );
}