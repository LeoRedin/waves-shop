import React from "react";

import Card from "./Card";

const CardBlock = props => {
    const { title, list } = props;

    const renderCards = list =>
        list ? list.map((card, i) => <Card key={i} {...card} />) : null;

    return (
        <div className="card_block">
            <div className="container">
                {title ? <div className="title">{title}</div> : null}

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap"
                    }}
                >
                    {renderCards(list)}
                </div>
            </div>
        </div>
    );
};

export default CardBlock;
