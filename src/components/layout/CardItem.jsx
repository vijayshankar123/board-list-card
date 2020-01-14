import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCards, deleteCard, updateCard } from "../../actions/boardAction";
import { Link } from "react-router-dom";

const CardItem = ({ updateCard, deleteCard, board, cards, setCards }) => {
  const [model, setModel] = useState(false);
  const [card, setCard] = useState({
    nameq: "",
    description: ""
  });

  const { nameq, description } = card;

  useEffect(
    () => {
      if (board.current) {
        setCard(board.current);
      }
    },
    [board]
  );

  const onChange = e => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const onDelete = () => {
    deleteCard(cards.cardId);
  };

  const onClick = e => {
    if (nameq === "") {
      return e.preventDefault();
    }
    setModel(!model);
    const updCard = {
      cardId: board.current.cardId,
      nameq,
      description,
      id: board.current.id
    };
    updateCard(updCard);
    setCard("");
  };

  return (
    <div>
      <div className="card cardelement">
        <p>
          <span style={{ float: "left" }}>
            <Link
              onClick={e => {
                setCards(cards);
                setModel(!model);
              }}
            >
              <h4>{cards.nameq}</h4>
            </Link>
          </span>
          <span style={{ float: "right" }}>
            <Link onClick={onDelete}>
              <i className="far fa-trash-alt" />
            </Link>
          </span>
        </p>

        {/*model*/}
        {model === true && (
          <div
            style={{
              width: "600px",
              height: "600px"
            }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content overlay">
                <div className="modal-header">
                  <h5 className="modal-title">Edit card</h5>
                </div>
                <div style={{ display: "inline-grid" }} className="modal-body ">
                  <input
                    type="text"
                    name="nameq"
                    placeholder="Add Card"
                    onChange={onChange}
                    value={nameq}
                    required
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
                    onClick={onClick}
                    type="button"
                    className="btn btn-primary"
                  >
                    Update Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  board: state.board
});

export default connect(mapStateToProps, { updateCard, deleteCard, setCards })(
  CardItem
);
