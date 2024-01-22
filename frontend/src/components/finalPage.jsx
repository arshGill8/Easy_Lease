import React from "react";
import PDF from "../../../backend/output.pdf";

export default function done() {
  return (
    <>
      <div>Thank you.</div>
      <p>
        Your lease was completed successfully.
        <br />
        <a href={PDF} target="_blank" rel="noopener noreferrer">
          Click here to download your file
        </a>
        .
      </p>
    </>
  );
}
