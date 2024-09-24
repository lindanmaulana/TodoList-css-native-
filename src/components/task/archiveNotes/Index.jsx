import { useDispatch } from "react-redux";
import useSelectorNotes from "../../../hooks/useSelectorNotes";
import { showFormattedDate } from "../../../utils";
import "./archiveNotes.css";
import {
  handleDeleteNotes,
  handleUnArchivedNotes,
} from "../../../redux/slices/notesSlice";

const ArchiveNotes = () => {
  const dispatch = useDispatch();
  const data = useSelectorNotes();
  console.log({ data: data.notes });

  const renderData = data.search.length > 0 ? data.search : data.notes;

  const handleDelete = (id) => {
    dispatch(handleDeleteNotes(id));
  };

  const handleUnArchived = (id) => {
    dispatch(handleUnArchivedNotes(id));
  };

  return (
    <div className="archive-notes">
      <h2 className="title">Archive Notes</h2>
      <div className="notes-box">
        {renderData && renderData.filter(fill => fill.archived === true).length > 0 ? (
          renderData?.filter((fill) => fill.archived === true)
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
                      onClick={() => handleUnArchived(values.id)}
                    >
                      UnArchive
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
            })
        ) : (
          <div className="notes-blank">
            <h4 className="notes-blank-text">Tidak ada catatan</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchiveNotes;
