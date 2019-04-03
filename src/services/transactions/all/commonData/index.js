const { propEq, compose } = require('ramda');

const { getByIdPreset } = require('../../../presets/pg/getById');
const { mgetByIdsPreset } = require('../../../presets/pg/mgetByIds');
const {
  searchWithPaginationPreset,
} = require('../../../presets/pg/searchWithPagination');

const transformTxInfo = require('./transformTxInfo');
const { transaction } = require('../../../../types');

const sql = require('./sql');

const { inputGet } = require('../../../presets/pg/getById/inputSchema');
const { inputMget } = require('../../../presets/pg/mgetByIds/inputSchema');
const { result, inputSearch } = require('./schema');

module.exports = ({ drivers: { pg }, emitEvent }) => {
  return {
    get: getByIdPreset({
      name: 'transactions.all.commonData.get',
      sql: request => sql(request).get(request),
      inputSchema: inputGet,
      resultSchema: result,
      resultTypeFactory: transaction,
      transformResult: transformTxInfo,
    })({ pg, emitEvent }),

    mget: mgetByIdsPreset({
      name: 'transactions.all.commonData.mget',
      matchRequestResult: propEq('id'),
      sql: request => sql(request).mget(request),
      resultTypeFactory: transaction,
      inputSchema: inputMget,
      resultSchema: result,
      transformResult: transformTxInfo,
    })({ pg, emitEvent }),

    search: searchWithPaginationPreset({
      name: 'transactions.all.commonData.search',
      sql: request => sql(request).search(request),
      inputSchema: inputSearch,
      resultSchema: result,
      transformResult: compose(
        transaction,
        transformTxInfo
      ),
    })({ pg, emitEvent }),
  };
};
