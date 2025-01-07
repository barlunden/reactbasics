import Counter from "../components/Counter";
import Pagetitle from "../components/Pagetitle";

function Medium() {
    return (
        <>
        <Pagetitle title="Medium: Counter" subtitle="The 'Counter' component, with two buttons." />
        <div className="px-14 py-6">
            <Counter />
        </div>
        </>
    )
}

export default Medium;