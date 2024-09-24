import { useState } from "react";
import "./createNotes.css";
const CreateNotes = (props) => {
  const { handleAddNotes } = props;
  const [createData, setCreateData] = useState({
    id: 1,
    title: "",
    body: "",
    createdAt: "",
    archived: false,
  });
  const [amountCharacter, setAmountCharacter] = useState(50);
  const [isMaximum, setIsMaximum] = useState(false);

  const handleSetNotes = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setAmountCharacter(50 - value.length);
      if (value.length > 50) {
        setIsMaximum(true);
        return;
      } else {
        setIsMaximum(false);
      }
    }

    const timestamps = new Date().toISOString();

    setCreateData({
      ...createData,
      id: timestamps,
      [name]: value,
      createdAt: timestamps,
      archived: false,
    });
  };

  const handleCreateNotes = () => {
    if (createData.title !== "" && createData.body !== "") {
      handleAddNotes(createData);
    } else if (createData.title === "") {
      alert("Title tidak boleh kosong!");
    } else if (createData.body === "") {
      alert("Body tidak boleh kosong");
    }

    setCreateData({
      title: "",
      body: "",
    });
    setAmountCharacter(50);
  };
  return (
    <div className="create-notes">
      <div className="create-header">
        <h2 className="title">Buat Catatan</h2>
        <p
          className={`amount-character ${
            isMaximum ? "amount-character-maximum" : ""
          }`}
        >
          Sisa karakter {amountCharacter}
        </p>
      </div>
      <div className="create-box">
        <input
          type="text"
          className={`create-title ${
            isMaximum ? "amount-character-maximum" : ""
          }`}
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
