import Button from "./Button";
import Dropdown from "./Dropdown";

function Feedback() {
  

  return (
    <>
      <h1 className="text-4xl font-semibold text-center">Feedback Form</h1>

      <form name="feedbackForm" className="flex flex-col">
        <Dropdown />
        <textarea
          name="comments"
          rows="4"
          className="w-1/2 mx-auto my-2 border-2 border-emerald-800 rounded-lg"
        ></textarea>
      </form>
      <Button text="Submit" />
    </>
  );
}

export default Feedback;
