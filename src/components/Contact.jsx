import React, { useState } from "react";
import { Prompt } from "react-router-dom";

function Contact() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = () => {
    setValue("");
  };
  var style = {
    width: 300,
    height: 60,
    margin: 10
  };
  return (
    <div>
      <input value={value} onChange={handleChange} style={style} />
      <div>
        <button onClick={handleSubmit}>Send</button>
      </div>
      <Prompt
        when={value !== ""}
        message="are you sure you want to leave without sending a message?"
      />
    </div>
  );
}

export default Contact;
