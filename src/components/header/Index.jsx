import { useDispatch } from "react-redux";
import "./header.css";
import {
  handleResetSearchNotes,
  handleSearchNotes,
} from "../../redux/slices/notesSlice";
const Header = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const values = e.target.value;
    if (values !== "") {
      dispatch(handleSearchNotes(e.target.value));
    } else {
      dispatch(handleResetSearchNotes());
    }
  };
  return (
    <div className="notes-header">
      <h1 className="notes-header-title">Notes</h1>
      <input
        className="notes-header-search"
        onChange={handleSearch}
        type="text"
        placeholder="Cari catatan..."
      />
    </div>
  );
};
export default Header;
