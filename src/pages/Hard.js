
import Pagetitle from "../components/Pagetitle";
import Form from "../components/Form";

function Hard() {
  return (
    <>
      <Pagetitle
        title="Hard: Feedback Form"
        subtitle="A 'Feedback Form' component, displaying the feedback below the form."
      />
      <div className="px-14 py-6">
        <Form />
      </div>
    </>
  );
}

export default Hard;
