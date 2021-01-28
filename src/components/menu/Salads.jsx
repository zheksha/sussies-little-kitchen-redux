import React from "react";
import { connect } from "react-redux";
import {
  buyCeasarsSalad,
  buyGardenSalad,
  returnCeasarsSalad,
  returnGardenSalad,
} from "../../redux";
import ButtonAddRemove from "../buttons/ButtonAddRemove";
import { ItemPrices } from "./prices";

function Salads(props) {
  return (
    <div className="list-group mt-4">
      <div className="list-group-item  active d-flex align-items-center">
        <h5 className="my-0">Salads</h5>
      </div>
      <div className="list-group-item  justify-content-between d-flex align-items-center">
        <div>
          <p className="my-1 lead">
            🥗 Garden Salad
            <em className="text-muted mx-2 small">
              ${ItemPrices.gardenSaladPrice}
            </em>
          </p>
          <p className="my-0 small text-muted">Made of fresh ingredients</p>
        </div>
        <ButtonAddRemove
          buyItem={props.buyGardenSalad}
          returnItem={props.returnGardenSalad}
          inputValue={props.numOfOrderedGarden}
        />
      </div>
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <p className="my-1 lead">
            🥙 Ceasars Salad
            <em className="text-muted mx-2 small">
              ${ItemPrices.ceasarSaladPrice}
            </em>
          </p>
          <p className="my-0 small text-muted">A touch or Roman empire</p>
        </div>
        <ButtonAddRemove
          buyItem={props.buyCeasarsSalad}
          returnItem={props.returnCeasarsSalad}
          inputValue={props.numOfOrderedCeasars}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfOrderedCeasars: state.salads.numOfOrderedCeasars,
    numOfOrderedGarden: state.salads.numOfOrderedGarden,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyGardenSalad: () => dispatch(buyGardenSalad()),
    buyCeasarsSalad: () => dispatch(buyCeasarsSalad()),
    returnGardenSalad: () => dispatch(returnGardenSalad()),
    returnCeasarsSalad: () => dispatch(returnCeasarsSalad()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Salads);
