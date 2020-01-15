import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addList } from "../../actions/boardAction";
import ListItem from "./ListItem";
import uuid from "uuid";

const Board = ({ board: { board, list }, addList }) => {
  const [model, setModel] = useState(false);
  const [liste, setListe] = useState("");

  const onClick = e => {
    setModel(!model);
  };

  const onChange = e => {
    setListe(e.target.value);
  };

  const id = uuid.v4();
  return (
    <Fragment>
      <h1>{board}</h1>
      <button
        onClick={onClick}
        className="btn btn-primary"
        style={{ borderRadius: "50%" }}
      >
        Add new List
      </button>

      {/*modal*/}
      {model === true && (
        <div className="modal-dialog " role="document">
          <div className="modal-content overlay">
            <div className="modal-header">
              <h5 className="modal-title">List Name</h5>
            </div>
            <div className="modal-body">
              <input
                type="text"
                name="liste"
                placeholder="Add List"
                onChange={onChange}
                value={liste}
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={e => {
                  setModel(!model);
                  const adList = {
                    liste,
                    id
                  };
                  addList(adList);
                  console.log(list);
                  setListe("");
                }}
                type="button"
                className="btn btn-primary"
              >
                Add List
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        {list !== null &&
          list.length > 0 && (
            <span>
              {list.map(item => <ListItem key={item.id} item={item} />)}
            </span>
          )}
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  board: state.board
});
export default connect(mapStateToProps, { addList })(Board);
