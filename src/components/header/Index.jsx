import { useDispatch } from "react-redux"
import "./header.css"
import { handleSearchNotes } from "../../redux/slices/notesSlice"
const Header = () => {
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        dispatch(handleSearchNotes(e.target.value))
    }
    return (
        <div className="notes-header">
            <h1 className="notes-header-title">Notes</h1>
            <input className="notes-header-search" onChange={handleSearch} type="text" placeholder="Cari catatan..." />
        </div>
    )
}
export default Header