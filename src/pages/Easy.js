import Greeting from "../components/Greeting";
import Pagetitle from "../components/Pagetitle";
import SecondGreeting from "../components/SecondGreeting";

function Easy() {
  return (
    <>
      <Pagetitle
        title="Easy: Greeting"
        subtitle="The 'Greeting' component that displays a message."
      />
      <Greeting name="Mr. Mahler" />
      <hr />
      <SecondGreeting />
    </>
  );
}

export default Easy;
