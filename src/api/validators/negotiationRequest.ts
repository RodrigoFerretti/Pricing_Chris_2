import Joi from 'joi';


export class NegotiationRequestValidator {
    
    static schema = Joi.object().required().keys(
        {
            clientId: Joi.number().integer().required(),
            sellerId: Joi.number().integer().required(),
            productId: Joi.number().integer().required(),
            priceOffer: Joi.number().precision(2).required(),
        }
    );
};
