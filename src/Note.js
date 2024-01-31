import React from "react";

/**
 * Presentation Component: Note
 *
 * This component renders a single list item element representing a note. It contains
 * two text input fields, one for the note's title and one for the note's description.
 * As the user types into these fields, functions passed as props to this component
 * are invoked to update the state of the corresponding note object within the
 * parent App component. These functions handle the synchronization of state
 * and facilitate real-time updates based on user input.
 */
const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  };
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };
  const clickDelete = () => props.removeNote(props.note.id);

  return (
    <li className="note">
      <input
        type="text"
        value={props.note.title}
        onChange={updateTitle}
        placeholder="Title"
        className="note__title"
      />
      <textarea
        value={props.note.description}
        onChange={updateDescription}
        placeholder="Description..."
        className="note__description"
      />
      <span onClick={clickDelete} className="note__delete">
        X
      </span>
    </li>
  );
};

export default Note;
