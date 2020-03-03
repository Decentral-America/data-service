import { DecimalsFormat } from '../types';

export enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

export const isSortOrder = (raw: unknown): raw is SortOrder =>
  [SortOrder.Ascending, SortOrder.Descending].includes(raw as SortOrder);

export type WithSortOrder = {
  sort: SortOrder;
};

export type WithLimit = {
  limit: number;
};

export const DEFAULT_DECIMALS_FORMAT = DecimalsFormat.Float;
