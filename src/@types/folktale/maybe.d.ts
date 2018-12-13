declare module 'folktale/maybe' {
  import { Matchable } from 'folktale';

  interface Semigroup<A> {
    concat(a: A): A;
  }

  export type MaybePattern<A, B> = {
    Nothing: () => B;
    Just: (a: A) => B;
  };

  export interface Maybe<A> extends Matchable {
    // pattern matching
    matchWith<B>(pattern: MaybePattern<A, B>): B;

    map<B>(f: (a: A) => B): Maybe<B>;
    chain<B>(f: (a: A) => Maybe<B>): Maybe<B>;
    // checks if the current applicative contains an appropriate function
    // @todo consider using `never` instead
    apply<B>(f: Maybe<B>): A extends (b: B) => infer R ? Maybe<R> : unknown;

    // extracting values
    getOrElse(a1: A): A;
    unsafeGet(): A;

    orElse(f: () => Maybe<A>): Maybe<A>;
    or(m: Maybe<A>): Maybe<A>;

    // @todo test
    concat(m: Maybe<A>): A extends Semigroup<A> ? Maybe<A> : unknown;

    fold<B>(l: () => B, r: (a: A) => B): B;

    // @todo test
    filter<B extends A>(pred: (a: A) => a is B): Maybe<B>;
  }

  export const of: <A>(value: A) => Maybe<A>;
  export const empty: <A>() => Maybe<A>;
  export const fromNullable: <A>(a: A | null | undefined) => Maybe<A>;
}
