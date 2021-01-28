import React from "react";
import { connect } from "react-redux";
import {
  buyBean,
  buyLentil,
  buyTomato,
  returnBean,
  returnLentil,
  returnTomato,
} from "../../redux";
import ButtonAddRemove from "../buttons/ButtonAddRemove";
import { ItemPrices } from "./prices";

function Soups(props) {
  console.log(props);
  return (
    <div className="list-group mt-4">
      <div className="list-group-item  active d-flex align-items-center">
        <h5 className="my-0">Soups</h5>
      </div>
      <div className="list-group-item  justify-content-between d-flex align-items-center">
        <div>
          <p className="my-1 lead">
            🍲 Lentil Soup
            <em className="text-muted mx-2 small">
              ${ItemPrices.lentilSoupPrice}
            </em>
          </p>
          <p className="my-0 small text-muted">Soup made of lentil peas</p>
        </div>
        <ButtonAddRemove
          buyItem={props.buyLentil}
          returnItem={props.returnLentil}
          inputValue={props.numOfOrderedLentil}
        />
      </div>
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <p className="my-1 lead">
            🍅 Tomato Soup
            <em className="text-muted mx-2 small">
              ${ItemPrices.tomatoSoupPrice}
            </em>
          </p>
          <p className="my-0 small text-muted">
            Nutritious soup made with love
          </p>
        </div>
        <ButtonAddRemove
          buyItem={props.buyTomato}
          returnItem={props.returnTomato}
          inputValue={props.numOfOrderedTomato}
        />
      </div>
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <p className="my-1 lead">
            🥣 Bean Soup
            <em className="text-muted mx-2 small">
              ${ItemPrices.beanSoupPrice}
            </em>
          </p>
          <p className="my-0 small text-muted">Magic bean soup by Jack</p>
        </div>
        <ButtonAddRemove
          buyItem={props.buyBean}
          returnItem={props.returnBean}
          inputValue={props.numOfOrderedBean}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfOrderedLentil: state.soups.numOfOrderedLentil,
    numOfOrderedTomato: state.soups.numOfOrderedTomato,
    numOfOrderedBean: state.soups.numOfOrderedBean,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyLentil: () => dispatch(buyLentil()),
    returnLentil: () => dispatch(returnLentil()),
    buyTomato: () => dispatch(buyTomato()),
    returnTomato: () => dispatch(returnTomato()),
    buyBean: () => dispatch(buyBean()),
    returnBean: () => dispatch(returnBean()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Soups);
