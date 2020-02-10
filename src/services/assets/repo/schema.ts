import * as Joi from '../../../utils/validation/joi';

export const result = Joi.object().keys({
  assetId: Joi.string()
    .assetId()
    .required(),
  name: Joi.string().required(),
  description: Joi.string().allow(''),
  totalVolume: Joi.object().bignumber(),
  decimals: Joi.number().required(),
  reissuable: Joi.boolean().required(),
  script: Joi.boolean(),
  sponsorship: Joi.object()
    .bignumber()
    .allow(null),
});
