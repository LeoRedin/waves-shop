import React from "react";

import UserLayout from "../../hoc/User";
import MyButton from "../Utils/MyButton";

const UserDashboard = ({ user }) => {
    const { name, lastname, email } = user.userData;

    return (
        <UserLayout>
            <div>
                <div className="user_nfo_panel">
                    <h1>Suas informações</h1>
                    <div>
                        <span>{name}</span>
                        <span>{lastname}</span>
                        <span>{email}</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Editar"
                        linkTo="/user/user_profile"
                    />
                </div>

                <div className="user_nfo_panel">
                    <h1>Histórico de compras</h1>
                    <div className="user_product_block_wrapper">Histórico</div>
                </div>
            </div>
        </UserLayout>
    );
};

export default UserDashboard;
