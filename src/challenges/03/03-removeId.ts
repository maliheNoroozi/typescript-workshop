import { Equal, Expect } from '../../helpers';

/**
 * Create a generic that removes the `id` key
 * from an object type.
 */
type RemoveId<Obj> = Omit<Obj, 'id'>;

// DO NOT CHANGE THE CODE BELOW
type res1 = RemoveId<{
  id: number;
  name: string;
  age: unknown;
}>;

type test1 = Expect<Equal<res1, { name: string; age: unknown }>>;

type res2 = RemoveId<{
  id: number;
  title: string;
  content: string;
}>;

type test2 = Expect<Equal<res2, { title: string; content: string }>>;
