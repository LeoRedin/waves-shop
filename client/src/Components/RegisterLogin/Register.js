import React, { Component } from "react";

import Dialog from "@material-ui/core/Dialog";

import FormField from "../Utils/Forms/FormField";
import { update, generateData, isFormValid } from "../Utils/Forms/FormActions";

import { connect } from "react-redux";
import { registerUser } from "../../actions/user_actions";

class Register extends Component {
    state = {
        formError: false,
        formSuccess: false,
        formData: {
            name: {
                element: "input",
                value: "",
                config: {
                    name: "name_input",
                    type: "text",
                    placeholder: "Seu nome"
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ""
            },
            lastname: {
                element: "input",
                value: "",
                config: {
                    name: "lastname_input",
                    type: "text",
                    placeholder: "Seu sobrenome"
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ""
            },
            email: {
                element: "input",
                value: "",
                config: {
                    name: "email_input",
                    type: "email",
                    placeholder: "Seu email"
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ""
            },
            password: {
                element: "input",
                value: "",
                config: {
                    name: "password_input",
                    type: "password",
                    placeholder: "Sua senha"
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ""
            },
            confirmPassword: {
                element: "input",
                value: "",
                config: {
                    name: "confirm_password_input",
                    type: "password",
                    placeholder: "Confirme sua senha"
                },
                validation: {
                    required: true,
                    confirm: "password"
                },
                valid: false,
                touched: false,
                validationMessage: ""
            }
        }
    };

    updateForm = element => {
        const newFormData = update(element, this.state.formData, "register");

        this.setState({ formError: false, formData: newFormData });
    };

    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = generateData(this.state.formData, "register");
        let formIsValid = isFormValid(this.state.formData, "register");

        if (formIsValid) {
            this.props
                .dispatch(registerUser(dataToSubmit))
                .then(response => {
                    if (response.payload.success) {
                        this.setState({
                            formError: false,
                            formSuccess: true
                        });

                        setTimeout(() => {
                            this.props.history.push("/register_login");
                        }, 3000);
                    } else {
                        this.setState({ formError: true });
                    }
                })
                .catch(e => this.setState({ formError: true }));
        } else {
            this.setState({ formError: true });
        }
    };
    render() {
        return (
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            <form onSubmit={event => this.submitForm(event)}>
                                <h2>Informações Pessoais</h2>
                                <div className="form_block_two">
                                    <div className="block">
                                        <FormField
                                            id={"name"}
                                            formData={this.state.formData.name}
                                            change={element =>
                                                this.updateForm(element)
                                            }
                                        />
                                    </div>
                                    <div className="block">
                                        <FormField
                                            id={"lastname"}
                                            formData={
                                                this.state.formData.lastname
                                            }
                                            change={element =>
                                                this.updateForm(element)
                                            }
                                        />
                                    </div>
                                </div>
                                <FormField
                                    id={"email"}
                                    formData={this.state.formData.email}
                                    change={element => this.updateForm(element)}
                                />
                                <h2>Verificar Senha</h2>
                                <div className="form_block_two">
                                    <div className="block">
                                        <FormField
                                            id={"password"}
                                            formData={
                                                this.state.formData.password
                                            }
                                            change={element =>
                                                this.updateForm(element)
                                            }
                                        />
                                    </div>
                                    <div className="block">
                                        <FormField
                                            id={"confirmPassword"}
                                            formData={
                                                this.state.formData
                                                    .confirmPassword
                                            }
                                            change={element =>
                                                this.updateForm(element)
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    {this.state.formError ? (
                                        <div className="error_label">
                                            Verifique os dados informados
                                        </div>
                                    ) : null}

                                    <button
                                        onClick={event =>
                                            this.submitForm(event)
                                        }
                                    >
                                        Criar conta
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Dialog open={this.state.formSuccess}>
                    <div className="dialog_alert">
                        <div>Cadastro realizado com sucesso!</div>
                        <div>
                            Você será redirecionado à página de login em alguns
                            segundos
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default connect()(Register);
