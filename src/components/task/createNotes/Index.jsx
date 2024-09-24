import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddNotes } from "../../../redux/slices/notesSlice";
import "./createNotes.css";
const CreateNotes = () => {
  const [createData, setCreateData] = useState({
    id: 1,
    title: "",
    body: "",
    createdAt: "",
    archived: false,
  });
  const [amountCharacter, setAmountCharacter] = useState(50);
  const dispatch = useDispatch();
  const handleSetNotes = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setAmountCharacter(50 - value.length);
      if (value.length > 50) return alert("Title maksimal 50 character");
    }

    setCreateData({
      ...createData,
      id: new Date().toISOString(),
      [name]: value,
      createdAt: new Date().toISOString(),
      archived: false,
    });
  };

  const handleCreateNotes = () => {
    if (createData.title !== "" && createData.body !== "") {
      dispatch(handleAddNotes(createData));
    } else if (createData.title === "") {
      alert("Title tidak boleh kosong!");
    } else if (createData.body === "") {
      alert("Body tidak boleh kosong");
    }

    setCreateData({
      title: "",
      body: "",
    });
    setAmountCharacter(50)
  };
  return (
    <div className="create-notes">
      <div className="create-header">
        <h2 className="title">Buat Catatan</h2>
        <p className="amount-character">Sisa karakter {amountCharacter}</p>
      </div>
      <div className="create-box">
        <input
          type="text"
          className="create-title"
          name="title"
          value={createData.title}
          placeholder="Masukan judul catatan...."
          onChange={handleSetNotes}
        />
        <textarea
          className="create-body"
          name="body"
          id=""
          value={createData.body}
          onChange={handleSetNotes}
          placeholder="Tuliskan catatan disini...."
        ></textarea>
        <button className="create-button" onClick={handleCreateNotes}>
          Buat
        </button>
      </div>
    </div>
  );
};

export default CreateNotes;
