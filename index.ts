import typia from "typia"
import type { ObjectLike } from 'jsonup'

const jsonSample = `{ "name": "jsonup" }`;

type Obj = ObjectLike<typeof jsonSample> // Type: `{ name: string }`

/* Create a type guard function */
const is = typia.createIs<Obj>();

console.log(is({ name: 'hi' })); // true
console.log(is({ name: 34 })); // false

console.log(typia.json.assertParse<Obj>(jsonSample)) // { name: "jsonup" }
console.log(typia.json.assertParse<Obj>(`{ "name": 34 }`)) // throws an error
