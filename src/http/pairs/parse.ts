import { Result, Error as error, Ok as ok } from 'folktale/result';
import { isNil, mergeAll } from 'ramda';
import { ParseError } from '../../errorHandling';
import { loadConfig } from '../../loadConfig';
import { WithMatcher, WithSortOrder, WithLimit } from '../../services/_common';
import {
  PairsGetRequest,
  PairsMgetRequest,
} from '../../services/pairs/repo/types';
import { PairsServiceSearchRequest } from '../../services/pairs';
import { parseFilterValues, withDefaults } from '../_common/filters';
import commonFilters from '../_common/filters/filters';
import { HttpRequest } from '../_common/types';
import {
  withMatcher,
  isMgetRequest,
  isSearchCommonRequest,
  isSearchByAssetRequest,
  isSearchByAssetsRequest,
  mgetOrSearchParser,
} from './utils';

const config = loadConfig();

export const get = ({
  params,
  query,
}: HttpRequest<['amountAsset', 'priceAsset']>): Result<
  ParseError,
  PairsGetRequest
> => {
  if (isNil(params)) {
    return error(new ParseError(new Error('Params is empty')));
  }

  if (isNil(query)) {
    return error(new ParseError(new Error('Query is empty')));
  }

  return parseFilterValues({
    matcher: commonFilters.query,
  })(query).chain(fValues => {
    if (!withMatcher(fValues)) {
      return error(new ParseError(new Error('Matcher is not defined')));
    }

    return ok({
      matcher: fValues.matcher,
      pair: {
        amountAsset: params.amountAsset,
        priceAsset: params.priceAsset,
      },
    });
  });
};

export const mgetOrSearch = ({
  query,
}: HttpRequest): Result<
  ParseError,
  PairsMgetRequest | PairsServiceSearchRequest
> => {
  if (!query) {
    return error(new ParseError(new Error('Query is empty')));
  }

  return mgetOrSearchParser(query).chain(fValues => {
    if (isMgetRequest(fValues)) {
      return ok(fValues);
    } else {
      const fValuesWithDefaults = mergeAll<
        PairsServiceSearchRequest & WithMatcher & WithSortOrder & WithLimit
      >([
        {
          matcher: config.matcher.defaultMatcherAddress,
        },
        withDefaults(fValues),
      ]);

      if (isSearchCommonRequest(fValuesWithDefaults)) {
        if (isSearchByAssetRequest(fValuesWithDefaults)) {
          return ok(fValuesWithDefaults);
        } else if (isSearchByAssetsRequest(fValuesWithDefaults)) {
          return ok(fValuesWithDefaults);
        } else {
          return ok(fValuesWithDefaults);
        }
      } else {
        return error(
          new ParseError(new Error('Invalid request data'), fValuesWithDefaults)
        );
      }
    }
  });
};