import Pagetitle from "../components/Pagetitle";
import Greeting from "../components/Greeting";
import SecondGreeting from "../components/SecondGreeting";

function Easy() {
  return (
    <>
      <Pagetitle
        title="Easy: Greeting"
        subtitle="Two 'Greeting' components that displays a short message. The first greeting is called by name, the second through entering the name."
      />
      <Greeting name="Mr. Mahler" />
      <hr />
      <SecondGreeting />
    </>
  );
}

export default Easy;
