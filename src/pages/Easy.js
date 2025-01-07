import Greeting from "../components/Greeting";
import Pagetitle from "../components/Pagetitle";

function Easy() {
  return (
    <>
      <Pagetitle
        title="Easy: Greeting"
        subtitle="The 'Greeting' component that displays a message."
      />
      <Greeting name="my friend" />
    </>
  );
}

export default Easy;
