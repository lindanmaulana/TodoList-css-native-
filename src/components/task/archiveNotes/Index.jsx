import { showFormattedDate } from "../../../utils";
import "./archiveNotes.css";

const ArchiveNotes = (props) => {
  const { dataNotes, handleDeleteNotes, handleUnArchivedNotes } = props;

  const renderData =
    dataNotes.search.length > 0 ? dataNotes.search : dataNotes.notes;

  const filterData =
    renderData?.filter((fill) => fill.archived === true).length > 0;

  if (!filterData) {
    return (
      <div className="archive-notes">
        <h2 className="title">Archive Notes</h2>
        <div className="notes-box">
          <div className="notes-blank">
            <h4 className="notes-blank-text">Tidak ada catatan</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="archive-notes">
      <h2 className="title">Archive Notes</h2>
      <div className="notes-box">
        {renderData &&
          renderData
            ?.filter((fill) => fill.archived === true)
            .map((values) => {
              if (!values) return null;
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
                      onClick={() => handleUnArchivedNotes(values.id)}
                    >
                      UnArchive
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

export default ArchiveNotes;
