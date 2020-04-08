const validateMessage = values => {
    const errors = {}
    console.log(values);
    if (!values.message) {
        errors.message = 'LE message est requis'
    } else if (values.message.length > 280) {
        errors.message = 'Le message ne doit pas dépasser 280 caractères'
    }

    return errors
}

export default validateMessage