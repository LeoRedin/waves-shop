import React, { Component } from "react";

import HomeSlider from "./HomeSlider";
import HomePromotion from "./HomePromotion";
import CardBlock from "../Utils/CardBlock";

import { connect } from "react-redux";
import {
    getProductsByArrival,
    getProductsBySell
} from "../../actions/products_actions";

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }

    render() {
        const { bySell, byArrival } = this.props.products;
        return (
            <div>
                <HomeSlider />
                <CardBlock title="Mais vendidos" list={bySell} />
                <HomePromotion />
                <CardBlock title="Recém Chegados" list={byArrival} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

export default connect(mapStateToProps)(Home);
