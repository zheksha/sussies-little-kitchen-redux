import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateCart } from "../../redux";
import { ItemPrices } from "../menu/prices";

function Orders(props) {
  const [orderList, setOrderList] = useState({});

  useEffect(() => {
    setOrderList({
      ...orderList,
      "Lentil Soup": props.numOfOrderedLentil,
      "Tomato Soup": props.numOfOrderedTomato,
      "Bean Soup": props.numOfOrderedBean,
      "Garden Salad": props.numOfOrderedGarden,
      "Ceasar Salad": props.numOfOrderedCeasars,
      "Lasagna Entry": props.numOfOrderedLasagna,
      "Panzerotti Entry": props.numOfOrderedPanzerotti,
      "Beefonara Entry": props.numOfOrderedBeefonara,
    });
  }, [props]);

  let total = 0;

  const renderedOrderList = () => {
    return Object.entries(orderList).map(([key, value], i) => {
      const price =
        key === "Lentil Soup"
          ? ItemPrices.lentilSoupPrice
          : key === "Tomato Soup"
          ? ItemPrices.tomatoSoupPrice
          : key === "Bean Soup"
          ? ItemPrices.beanSoupPrice
          : key === "Garden Salad"
          ? ItemPrices.gardenSaladPrice
          : key === "Ceasar Salad"
          ? ItemPrices.ceasarSaladPrice
          : key === "Lasagna Entry"
          ? ItemPrices.lasagnaPrice
          : key === "Panzerotti Entry"
          ? ItemPrices.panzerottiPrice
          : key === "Beefonara Entry"
          ? ItemPrices.beefonaraPrice
          : null;
      if (value > 0) {
        total = total + value * price;
        return (
          <div
            key={key}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <p className="my-0 ">
              {key}:{" "}
              <span className="text-muted small">
                {value} pcs x ${price}
              </span>
            </p>
          </div>
        );
      }
    });
  };

  // JSX Block
  return (
    <div>
      <div className="list-group mt-4">
        <div className="list-group-item d-flex  justify-content-between active bg-success align-items-center">
          <h5 className="my-0">Your Order 🔖</h5>{" "}
          <button
            onClick={() => props.updateCart(orderList)}
            className="btn btn-warning text-dark btn-sm"
          >
            Submit Order
          </button>
        </div>
        {renderedOrderList()}
        <span className="mt-3 py-2 text-center text-white bg-success">
          Your total order: ${total}
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfOrderedLentil: state.soups.numOfOrderedLentil,
    numOfOrderedTomato: state.soups.numOfOrderedTomato,
    numOfOrderedBean: state.soups.numOfOrderedBean,
    numOfOrderedCeasars: state.salads.numOfOrderedCeasars,
    numOfOrderedGarden: state.salads.numOfOrderedGarden,
    numOfOrderedLasagna: state.entries.numOfOrderedLasagna,
    numOfOrderedPanzerotti: state.entries.numOfOrderedPanzerotti,
    numOfOrderedBeefonara: state.entries.numOfOrderedBeefonara,
    orderedList: state.order.orderedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (item) => dispatch(updateCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
