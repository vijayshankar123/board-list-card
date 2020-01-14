import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addCard,
  deleteList,
  setList,
  updateList
} from "../../actions/boardAction";
import CardItem from "./CardItem";
import uuid from "uuid";

const ListItem = ({
  updateList,
  setList,
  deleteList,
  item,
  addCard,
  board
}) => {
  const [model, setModel] = useState(false);
  const [card, setCard] = useState({
    nameq: "",
    description: ""
  });
  const [liste, setListe] = useState("");
  const [modele, setModele] = useState(false);

  const { nameq, description } = card;

  useEffect(
    () => {
      if (board.currentList) {
        setListe(board.currentList.liste);
      }
    },
    [board]
  );

  const changeModel = e => {
    setModel(!model);
  };

  const onChange = e => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const onChangee = e => {
    setListe(e.target.value);
  };

  const onDelete = () => {
    deleteList(item.id);
  };

  const cardId = uuid.v4();

  return (
    <div>
      <div className="card cardq" style={{ float: "left" }}>
        <p>
          <Link
            onClick={e => {
              setList(item);
              setModele(!modele);
            }}
          >
            <span style={{ float: "left" }}>{item.liste}</span>
          </Link>
          <span style={{ float: "right" }}>
            <Link onClick={onDelete}>
              <i className="far fa-trash-alt" />
            </Link>
          </span>
        </p>
        {board.card !== null &&
          board.card.length > 0 &&
          board.card.map(
            cards =>
              cards.id === item.id ? (
                <CardItem key={cards.cardId} cards={cards} />
              ) : null
          )}
        <Link onClick={changeModel}> add card ...</Link>
      </div>

      {/*LIST MODEL */}

      {/*modal*/}
      {modele === true && (
        <div className="modal-dialog" role="document">
          <div className="modal-content overlay">
            <div className="modal-header">
              <h5 className="modal-title">Edit List</h5>
            </div>
            <div className="modal-body">
              <input
                type="text"
                name="liste"
                placeholder="Add List"
                onChange={onChangee}
                value={liste}
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={e => {
                  setModele(!modele);
                  const updList = {
                    liste,
                    id: item.id
                  };
                  updateList(updList);
                  setListe("");
                }}
                type="button"
                className="btn btn-primary"
              >
                Update List
              </button>
            </div>
          </div>
        </div>
      )}

      {/*model*/}
      {model === true && (
        <div className="modal-dialog" role="document">
          <div className="modal-content overlay">
            <div className="modal-header">
              <h5 className="modal-title">card Name</h5>
            </div>
            <div style={{ display: "inline-grid" }} className="modal-body">
              <input
                type="text"
                name="nameq"
                placeholder="Add Card"
                onChange={onChange}
                value={nameq}
              />
              <input
                type="text"
                name="description"
                placeholder="Add description"
                onChange={onChange}
                value={description}
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={e => {
                  setModel(!model);
                  const adCard = {
                    id: item.id,
                    nameq,
                    description,
                    cardId
                  };
                  addCard(adCard);
                  setCard("");
                }}
                type="button"
                className="btn btn-primary"
              >
                Add Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStatetToProps = state => ({
  board: state.board
});

export default connect(mapStatetToProps, {
  updateList,
  setList,
  deleteList,
  addCard
})(ListItem);
