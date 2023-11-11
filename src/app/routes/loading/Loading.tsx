import AtomicSpinner from "atomic-spinner";

const Loading = () => {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <AtomicSpinner
        nucleusDistanceFromCenter={2}
        atomSize={400}
        electronPathColor="transparent"
        electronSize={2}
        electronSpeed={1}
      />
    </div>
  );
};

export default Loading;
