import React, { useState } from "react";
import Button from "./Button";

function SecondGreeting({ name }) {
  const [nameInput, setNameInput] = useState("");
  const [submittedName, setSubmittedName] = useState(null);

  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = {
      name: nameInput,
    };

    setSubmittedName(name);
    setNameInput("");
  };

  return (
    <>
      <div className="w-1/2 p-2 bg-emerald-100 border-2 border-emerald-700 mx-auto mt-5 rounded-xl">
        <h1 className="text-center text-3xl p-3">Input your name</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="w-11/12 mx-auto p-2 m-2"
            type="text"
            value={nameInput}
            onChange={handleNameInput}
            placeholder="Bond, James Bond"
          />
          <Button text="Submit name" />
        </form>
      </div>
      <div>
        {submittedName && (
          <div  className="w-1/2 p-2 bg-emerald-100 border-2 border-emerald-700 mx-auto mt-5 rounded-xl">
            <h1 className="px-14 py-8 text-3xl font-bold text-slate-950">
              Hello, {submittedName.name}!
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default SecondGreeting;
