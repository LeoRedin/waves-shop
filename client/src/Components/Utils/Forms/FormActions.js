export const validate = (element, formData = []) => {
    let error = [true, ""];

    if (element.validation.email) {
        const valid = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
            element.value
        );
        const message = `${!valid ? "Digite um email válido" : ""}`;
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.confirm) {
        const valid =
            element.value.trim() === formData[element.validation.confirm].value;
        const message = `${!valid ? "Senhas não conferem" : ""}`;
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
        const valid = element.value.trim() !== "";
        const message = `${!valid ? "Esse campo é obrigatório" : ""}`;
        error = !valid ? [valid, message] : error;
    }

    return error;
};

export const update = (element, formData, formName) => {
    const newFormData = { ...formData };
    const newElement = {
        ...newFormData[element.id]
    };

    newElement.value = element.event.target.value;

    if (element.blur) {
        let validData = validate(newElement, formData);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;

    newFormData[element.id] = newElement;

    return newFormData;
};

export const generateData = (formData, formName) => {
    let dataToSubmit = {};

    for (let key in formData) {
        if (key !== "confirmPassword") dataToSubmit[key] = formData[key].value;
    }

    return dataToSubmit;
};

export const isFormValid = (formData, formName) => {
    let formIsValid = true;

    for (let key in formData) {
        formIsValid = formData[key].valid && formIsValid;
    }

    return formIsValid;
};
