import React from "react";
import { v4 as uuid } from "uuid";

export const SubtaskInput = ({ handleAdd }) => {
  const [title, setTitle] = React.useState("");

  return (
    <>
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center" }} >
      <div className="inputbox_container" >
      <input
        type="text"
        value={title}
        className="form-control"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Subtask"
      />
      </div>
      <button type="button"  className="btn btn-primary" style={{ padding: "5px", height: "40px" }} onClick={() => handleAdd(title)}>
    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-plus-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>
      </button>
      </div>
    </>
  );
};
