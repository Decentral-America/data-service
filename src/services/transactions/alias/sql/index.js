const { compose } = require('ramda');

const createSql = require('../../_common/sql');
const { outerSort } = require('../../_common/sql/filters');

const { select, selectFromFiltered } = require('./query');
const { filters, filtersOrder } = require('./filters');

const queryAfterFilters = {
  get: selectFromFiltered,
  mget: selectFromFiltered,
  search: (q, fValues) => compose(outerSort(fValues.sort), selectFromFiltered)(q),
};

module.exports = createSql({
  query: select,
  filters,
  filtersOrder,
  queryAfterFilters,
});
