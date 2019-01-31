import React from "react";

import MyButton from "../Utils/MyButton";
import Login from "./Login";

const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>Novo Cliente</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae iusto aspernatur modi facilis enim
                            nostrum laborum error consequuntur cupiditate fugit
                            facere esse temporibus, quod minus itaque!
                            Exercitationem eligendi quidem totam.
                        </p>
                        <MyButton
                            type="default"
                            title="Criar uma conta"
                            linkTo="/register"
                            addStyles={{
                                margin: "10px 0 0 0"
                            }}
                        />
                    </div>
                    <div className="right">
                        <h2>Login</h2>
                        <p>Se você já possui uma conta faça seu login abaixo</p>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLogin;
