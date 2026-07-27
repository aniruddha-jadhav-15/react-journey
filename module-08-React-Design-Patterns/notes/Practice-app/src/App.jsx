import "./App.css";
import CounterContainer from "./ContainerPresentational/CounterContainer/CounterContainer";
import WithLooding from "./HigherOrderComponents/WithLooding";
import Message from "./HigherOrderComponents/Message";
import TemperatureContainer from "./comopontent/TemperatureContainer/TemperatureContainer";
import ShowHideMessage from "./comopontent/ShowHideMessage";
import AuthMessage from "./comopontent/HOC/AuthMessage";
import WithAuth from "./comopontent/HOC/WithAuth";

const MessageWithLoading = WithLooding(Message);
const MessageWithAuth = WithAuth(AuthMessage);
function App() {
  return (
    <>
      <CounterContainer />
      <MessageWithLoading text="Hello!" isLoading={true} />
      <TemperatureContainer />
      <ShowHideMessage />
      <MessageWithAuth
        text={"Hello, Good to see you again !"}
        isLoogedIn={false}
      />
    </>
  );
}

export default App;
