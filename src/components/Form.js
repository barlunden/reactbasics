import React, { useState } from "react";
import Button from "./Button";

function Form() {
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleDropdownChange = (event) => {
    setSelectedDropdown(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      dropdown: selectedDropdown,
      feedback: feedbackText,
    };

    setSubmittedData(data);
    setSelectedDropdown('');
    setFeedbackText('');
  };

  return (
    <div>
      <div className="w-1/2 bg-emerald-100 border-2 border-emerald-700 mx-auto rounded-xl">
        <h1 className="text-center text-5xl font-semibold p-5">
          Feedback Form
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <select
            className="w-11/12 mx-auto p-1 m-1 bg-emerald-50 border border-emerald-700 rounded-md"
            value={selectedDropdown}
            onChange={handleDropdownChange}
          >
            <option value="">Select an option</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
          <textarea
            className="w-11/12 mx-auto p-1 m-1 bg-emerald-50 border border-emerald-700 rounded-md"
            value={feedbackText}
            onChange={handleTextareaChange}
            placeholder="Enter your feedback."
          />
          <div className="p-4 self-center">
            <Button text="Submit feedback" />
          </div>
        </form>
      </div>
      <div>
        {submittedData && (
          <div className="w-1/2 p-2 bg-emerald-100 border-2 border-emerald-700 mx-auto mt-5 rounded-xl">
            <h1 className="text-center text-5xl font-semibold p-5">
              Submitted feedback
            </h1>
            <div className="w-11/12 mx-auto p-1 m-1 bg-emerald-50 border border-emerald-700 rounded-md">
              <p className="text-lg">Dropdown: {submittedData.dropdown}</p>
              <hr />
              <p className="text-lg">Feedback: {submittedData.feedback}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
