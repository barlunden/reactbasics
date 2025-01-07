import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    dropdown: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form feedback:', formData);
  };

  return (
    <div className="bg-emerald-50 w-2/3 mx-auto p-5">
    <h1 className="text-6xl font-semibold text-center pb-3">Feedback Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="">
        <label className="text-lg">Dropdown: </label>
        <select type=""
        name="dropdown"
        value={formData.dropdown}
        onChange={handleChange}>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
      </div>
      <div>
        <label className="text-lg">Feedback: </label>
        <input type="textarea"
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        />
      </div>
      <button className="text-lg border-2 border-emerald-800 bg-emerald-900 text-white mt-5 px-5 py-2 rounded-lg" type="submit">Submit</button>
    </form>
    </div>
  );

};

export default Form;