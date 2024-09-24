import ActiveNotes from "./activeNotes/Index";
import ArchiveNotes from "./archiveNotes/Index";
import CreateTask from "./createNotes/Index";
import "./notes.css";
const Task = () => {
  return (
    <div className="notes">
      <div className="container">
        <div className="wrapper">
          <CreateTask />
          <ActiveNotes />
          <ArchiveNotes />
        </div>
      </div>
    </div>
  );
};

export default Task;
