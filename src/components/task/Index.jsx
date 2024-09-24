
import ActiveNotes from "./activeNotes/Index";
import ArchiveNotes from "./archiveNotes/Index";
import CreateTask from "./createNotes/Index";
import "./notes.css";
const Notes = (props) => {
  const {handle, dataNotes} = props

  return (
    <div className="notes">
      <div className="container">
        <div className="wrapper">
          <CreateTask handleAddNotes={handle.handleAddNotes} />
          <ActiveNotes
            dataNotes={dataNotes}
            handleDeleteNotes={handle.handleDeleteNotes}
            handleArchivedNotes={handle.handleArchivedNotes}
          />
          <ArchiveNotes
            dataNotes={dataNotes}
            handleDeleteNotes={handle.handleDeleteNotes}
            handleUnArchivedNotes={handle.handleUnArchivedNotes}
          />
        </div>
      </div>
    </div>
  );
};

export default Notes;
