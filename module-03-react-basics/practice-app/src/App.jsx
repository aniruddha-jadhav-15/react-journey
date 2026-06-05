import ComponentPractice from "./practice/02-first-component";
import JsxRules from "./practice/03-jsx-babel";
import Nav from "./practice/04-naming-conventions";
import JsxExpressions from "./practice/05-jsx-expressions";
import DynamicAttributes from "./practice/06-dynamic-attributes";
import Likes from "./practice/08-event-state";
import HandlingEvents from "./practice/08-handling-events";
import Counter from "./practice/09-state-practice";
import Toggle from "./practice/10-usestate-practice";
import "./App.css";

function App() {
  return (
    <>
      <ComponentPractice />
      <JsxExpressions />
      <Likes />
      <JsxRules />
      <Nav />
      <DynamicAttributes />
      <HandlingEvents />
      <Counter />
      <Toggle />
    </>
  );
}

export default App;
