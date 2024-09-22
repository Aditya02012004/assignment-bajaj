import React, { useState } from "react";
import axios from "axios";

function BfhlForm({ setResponse }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedInput = JSON.parse(input);
      const res = await axios.post(`/api/bhfl`, parsedInput);
      setResponse(res.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please check your input and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bfhl-form">
      <h2>Input</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter JSON input"
        className="input-textarea"
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default BfhlForm;