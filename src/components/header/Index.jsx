import "./header.css";
const Header = (props) => {
  const { handle } = props;

  const handleSearch = (e) => {
    const values = e.target.value;
    if (values !== "") {
      handle.handleSearchNotes(e.target.value);
    } else {
      handle.handleResetSearchNotes();
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
