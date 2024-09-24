import { useDispatch } from "react-redux";
import useSelectorNotes from "../../../hooks/useSelectorNotes";
import { showFormattedDate } from "../../../utils";
import "./activeNotes.css";
import {  handleArchivedNotes, handleDeleteNotes } from "../../../redux/slices/notesSlice";

const ActiveNotes = () => {
  const data = useSelectorNotes();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(handleDeleteNotes(id));
  };

  const handleArchived = (id) => {
    dispatch(handleArchivedNotes(id))
  }

  const renderData = data.search.length > 0 ? data.search : data.notes;
  return (
    <div className="active-notes">
      <h2 className="title">Active Notes</h2>
      <div className="notes-box">
        {renderData
          ?.filter((fill) => fill.archived === false)
          .map((values) => {
            const formatCreatedAt = showFormattedDate(values.createdAt);
            return (
              <div className="notes-card" key={values.id}>
                <div className="notes-card-content">
                  <h3 className="notes-card-title">{values.title}</h3>
                  <h5 className="notes-card-date">{formatCreatedAt}</h5>
                  <p className="notes-card-body">{values.body}</p>
                </div>
                <div className="notes-card-button">
                  <button className="notes-card-button-archived" onClick={() => handleArchived(values.id)}>
                    Archive
                  </button>
                  <button
                    className="notes-card-button-delete"
                    onClick={() => handleDelete(values.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ActiveNotes;
