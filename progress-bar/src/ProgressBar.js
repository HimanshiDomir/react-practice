import "./progress-bar.css";
// progress will keep increasing hencing moving in forward direction
const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ transform: `translateX(${progress - 100}%)` }}

      />
    </div>
  );
};

export default ProgressBar;
