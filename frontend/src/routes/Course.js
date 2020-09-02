import React from "react";

export default function Course(data) {
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </>
  );
}