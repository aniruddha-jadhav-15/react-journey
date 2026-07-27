function TemperatureDisplay({ tempertur }) {
  return (
    <div>
      <h2>
        Tempature : {tempertur},
        {tempertur > 30 ? "HOT" : tempertur < 10 ? "COLD" : "MILD"}
      </h2>
    </div>
  );
}

export default TemperatureDisplay;
