import React from "react";

export default function Course(data) {
  console.log(data);
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </>
  );
}