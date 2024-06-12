import typia from "typia"
import type { ObjectLike } from 'jsonup'

const jsonSample = `{ "name": "jsonup" }`;

type Obj = ObjectLike<typeof jsonSample> // Type: `{ name: string }`

/* Create a type guard function */
const is = typia.createIs<Obj>();

console.log(is({ name: 'hi' })); // true
console.log(is({ name: 34 })); // false

console.log(typia.json.assertParse<Obj>(jsonSample)) // { name: "jsonup" }

try {
  console.log(typia.json.assertParse<Obj>(`{ "name": 34 }`)) // throws an error
} catch(e: any) {
  console.log({
    message: e.message,
    path : e.path,
  }) // "Expected string at name, got number"
}
