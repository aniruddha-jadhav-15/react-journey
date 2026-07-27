import useToggle from "../CustomHooks/useToggle";
function ShowHideMessage() {
  const { toggle, handleToogle } = useToggle();
  return (
    <div>
      <p hidden={toggle}>Hello</p>

      <button onClick={handleToogle}>{toggle ? "Show" : "Hide"}</button>
    </div>
  );
}

export default ShowHideMessage;
