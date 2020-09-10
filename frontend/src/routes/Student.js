import React from "react";

export default function Student(data) {
  console.log(data);
  return (
    <>
      <h1>{data.name} {data.surname}</h1>
      <Button onClick={() => setOpenLateralView(true)}>
        New Course
      </Button>
      
      <p>{data.description}</p>
    </>
  );
}