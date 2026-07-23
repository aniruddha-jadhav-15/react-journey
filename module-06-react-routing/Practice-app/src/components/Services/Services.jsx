import { useSearchParams } from "react-router-dom";

function Services() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort");

  const sortAsc = () => {
    setSearchParams({ sort: "asc" });
  };
  return (
    <div>
      <button onClick={sortAsc}>Sort</button>
      <button
        onClick={() => {
          setSearchParams({ sort: "dec" });
        }}
      >
        Sort Dsc
      </button>
      <p>Current sort: {sort}</p>
    </div>
  );
}

export default Services;
