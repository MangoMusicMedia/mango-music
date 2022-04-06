const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateLikeInput(data) {
    let errors = {};

    data.post = validText(data.post) ? data.post : '';
    data.user = validText(data.user) ? data.user : '';

    if (Validator.isEmpty(data.post)) {
        errors.message = "Must be linked to a post"
    }

    if (Validator.isEmpty(data.user)) {
        errors.message = "Must be linked to a user"
    }
}