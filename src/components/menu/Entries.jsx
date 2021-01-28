import React from "react";
import { connect } from "react-redux";
import {
  buyBeefonara,
  buyLasagna,
  buyPanzerotti,
  returnBeefonara,
  returnLasagna,
  returnPanzerotti,
} from "../../redux";
import ButtonAddRemove from "../buttons/ButtonAddRemove";
import { ItemPrices } from "./prices";

function Entries(props) {
  return (
    <div className="list-group mt-4">
      <div className="list-group-item  active d-flex align-items-center">
        <h5 className="my-0">Entries</h5>
      </div>
      <div className="list-group-item  justify-content-between d-flex align-items-center">
        <div>
          <p className="my-1 lead">
            🍛 Lasagna
            <em className="text-muted mx-2 small">
              ${ItemPrices.lasagnaPrice}
            </em>
          </p>
          <p className="my-0 small text-muted">Approved by Garfield</p>
        </div>
        <ButtonAddRemove
          buyItem={props.buyLasagna}
          returnItem={props.returnLasagna}
          inputValue={props.numOfOrderedLasagna}
        />
      </div>
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <p className="my-1 lead">
            🥘 Panzerotti
            <em className="text-muted mx-2 small">
              ${ItemPrices.panzerottiPrice}
            </em>
          </p>
          <p className="my-0 small text-muted">Who knows what it is</p>
        </div>
        <ButtonAddRemove
          buyItem={props.buyPanzerotti}
          returnItem={props.returnPanzerotti}
          inputValue={props.numOfOrderedPanzerotti}
        />
      </div>
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <p className="my-1 lead">
            🍝 Pasta La Beefonara
            <em className="text-muted mx-2 small">
              ${ItemPrices.beefonaraPrice}
            </em>
          </p>
          <p className="my-0 small text-muted">Made by true italian</p>
        </div>
        <ButtonAddRemove
          buyItem={props.buyBeefonara}
          returnItem={props.returnBeefonara}
          inputValue={props.numOfOrderedBeefonara}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfOrderedLasagna: state.entries.numOfOrderedLasagna,
    numOfOrderedPanzerotti: state.entries.numOfOrderedPanzerotti,
    numOfOrderedBeefonara: state.entries.numOfOrderedBeefonara,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyLasagna: () => dispatch(buyLasagna()),
    buyPanzerotti: () => dispatch(buyPanzerotti()),
    buyBeefonara: () => dispatch(buyBeefonara()),

    returnLasagna: () => dispatch(returnLasagna()),
    returnPanzerotti: () => dispatch(returnPanzerotti()),
    returnBeefonara: () => dispatch(returnBeefonara()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
