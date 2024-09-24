import { showFormattedDate } from "../../../utils";
import "./activeNotes.css";

const ActiveNotes = (props) => {
  const { dataNotes, handleDeleteNotes, handleArchivedNotes } = props;

  const renderData =
    dataNotes.search.length > 0 ? dataNotes.search : dataNotes.notes;

  const filterData =
    renderData?.filter((fill) => fill.archived === false).length > 0;
  if (!filterData) {
    return (
      <div className="active-notes">
        <h2 className="title">Active Notes</h2>
        <div className="notes-box">
          <div className="notes-blank">
            <h4 className="notes-blank-text">Tidak ada catatan</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="active-notes">
      <h2 className="title">Active Notes</h2>
      <div className="notes-box">
        {renderData &&
          renderData
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
                    <button
                      className="notes-card-button-archived"
                      onClick={() => handleArchivedNotes(values.id)}
                    >
                      Archive
                    </button>
                    <button
                      className="notes-card-button-delete"
                      onClick={() => handleDeleteNotes(values.id)}
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
