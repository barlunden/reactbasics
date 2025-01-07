import { useState } from "react";

export default function Dropdown() {
  const [selectedFeedback, setSelectedFeedback] = useState("");
  
  return (
    <>
      <label className="mx-auto">
        Select your satisfaction level:
        <select
          value={selectedFeedback}
          onChange={(e) => setSelectedFeedback(e.target.value)}
          name="selectedFeedback"
          className="border-2 border-emerald-800 rounded-md ml-2 py-2 my-2"
          >
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
      </label>
    </>
  );
}