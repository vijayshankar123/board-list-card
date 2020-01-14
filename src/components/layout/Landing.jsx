import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addBoard } from "../../actions/boardAction";
import { connect } from "react-redux";

let name = "";
const Landing = ({ addBoard }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    name = e.target.value;
    setText(e.target.value);
  };
  const onClick = e => {
    addBoard(name);
    console.log(text);
    console.log(name);
    setText("");
  };
  return (
    <div>
      <form style={{ marginTop: "100px" }}>
        <input
          type="text"
          name="text"
          placeholder=" Board Name"
          onChange={onChange}
          value={text}
        />
        <Link to={`/board/${name}`}>
          <button onClick={onClick} type="submit" className="btn btn-primary">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};
export default connect(null, { addBoard })(Landing);
