const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateCommentInput(data) {
    let errors = {};

    data.message = validText(data.message) ? data.message : '';


    if (Validator.isEmpty(data.message)) {
        errors.message = "Message field is required"
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};