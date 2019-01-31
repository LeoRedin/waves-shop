import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { logoutUser } from "../../actions/user_actions";

class Header extends Component {
    state = {
        page: [
            {
                name: "Home",
                linkTo: "/",
                public: true
            },
            {
                name: "Guitarras",
                linkTo: "/shop",
                public: true
            }
        ],
        user: [
            {
                name: "Carrinho",
                linkTo: "/user/cart",
                public: false
            },
            {
                name: "Minha Conta",
                linkTo: "/user/dashboard",
                public: false
            },
            {
                name: "Entrar",
                linkTo: "/register_login",
                public: true
            },
            {
                name: "Sair",
                linkTo: "/user/logout",
                public: false
            }
        ]
    };

    logoutHandler = () => {
        this.props.dispatch(logoutUser()).then(response => {
            if (response.payload.success) {
                this.props.history.push("/");
            } else {
            }
        });
    };

    defaultLink = (item, i) =>
        item.name === "Sair" ? (
            <div
                className="log_out_link"
                key={i}
                onClick={() => this.logoutHandler()}
            >
                {item.name}
            </div>
        ) : (
            <Link to={item.linkTo} key={i}>
                {item.name}
            </Link>
        );

    cartLink = (item, i) => {
        const user = this.props.user.userData;

        return (
            <div className="cart_link" key={i}>
                <span>{user.cart ? user.cart.length : 0}</span>
                <Link to={item.linkTo}>{item.name}</Link>
            </div>
        );
    };

    showLinks = type => {
        let list = [];

        if (this.props.user.userData) {
            type.forEach(item => {
                const { public: publicLink, name } = item;
                if (!this.props.user.userData.isAuth) {
                    if (publicLink) {
                        list.push(item);
                    }
                } else {
                    if (name !== "Entrar") {
                        list.push(item);
                    }
                }
            });
        }

        return list.map((item, i) => {
            if (item.name !== "Carrinho") {
                return this.defaultLink(item, i);
            } else {
                return this.cartLink(item, i);
            }
        });
    };

    render() {
        const { page, user } = this.state;
        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">Waves</div>
                    </div>
                    <div className="right">
                        <div className="top">{this.showLinks(user)}</div>
                        <div className="bottom">{this.showLinks(page)}</div>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(withRouter(Header));
