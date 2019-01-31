import React, { Component } from "react";
import FormField from "../Utils/Forms/FormField";
import { update, generateData, isFormValid } from "../Utils/Forms/FormActions";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../../actions/user_actions";

class Login extends Component {
    state = {
        formError: false,
        formSuccess: "",
        formData: {
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
            }
        }
    };

    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = generateData(this.state.formData, "login");
        let formIsValid = isFormValid(this.state.formData, "login");

        if (formIsValid) {
            this.props.dispatch(loginUser(dataToSubmit)).then(response => {
                if (response.payload.loginSuccess) {
                    this.props.history.push("/user/dashboard");
                } else {
                    this.setState({ formError: true });
                }
            });
        } else {
            this.setState({ formError: true });
        }
    };

    updateForm = element => {
        const newFormData = update(element, this.state.formData, "login");

        this.setState({ formError: false, formData: newFormData });
    };

    render() {
        return (
            <div className="signin_wrapper">
                <form onSubmit={event => this.submitForm(event)}>
                    <FormField
                        id={"email"}
                        formData={this.state.formData.email}
                        change={element => this.updateForm(element)}
                    />
                    <FormField
                        id={"password"}
                        formData={this.state.formData.password}
                        change={element => this.updateForm(element)}
                    />

                    {this.state.formError ? (
                        <div className="error_label">
                            Verifique os dados informados
                        </div>
                    ) : null}

                    <button onClick={event => this.submitForm(event)}>
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(withRouter(Login));
