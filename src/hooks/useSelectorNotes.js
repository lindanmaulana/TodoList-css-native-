import { useSelector } from "react-redux";

const useSelectorNotes = () => {
  const selector = useSelector((state) => state.notes);

  return selector;
};

export default useSelectorNotes;
