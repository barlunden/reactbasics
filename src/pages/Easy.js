import Pagetitle from "../components/Pagetitle";
import Greeting from "../components/Greeting";
import SecondGreeting from "../components/SecondGreeting";

function Easy() {
  return (
    <>
      <Pagetitle
        title="Easy: Greeting"
        subtitle="Two 'Greeting' components that displays a short message. The first name is stated when calling the Greeting component, the second through entering the name in the input field."
      />
      <Greeting name="Gustav Mahler" occupation="classical composer" />
      <hr />
      <SecondGreeting />
    </>
  );
}

export default Easy;
