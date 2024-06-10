# bun-typia-temp-jsonup-experiment

Fun playgournd with [Bun](https://bun.sh), [Typia](https://typia.io/), and [jsonup](https://github.com/tani/jsonup) by [@tani](https://github.com/tani)

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run build
bun run start
```

Result
```sh
main• ❱ bun run build && bun run start
$ bun run ./build.ts

 ╭──────────────────────────────────╮
 │                                  │
 │  [unplugin-typia] Cache enabled  │
 │                                  │
 ╰──────────────────────────────────╯

$ bun run ./out/index.js
true
false
{
  name: "jsonup",
}
1 | var Cj=Object.create;var{defineProperty:zO,getPrototypeOf:Qj,getOwnPropertyNames:Nj}=Object;var Aj=Object.prototype.hasOwnProperty;var wj=(
O,j,H)=>{H=O!=null?Cj(Qj(O)):{};const _=j||!O||!O.__esModule?zO(H,"default",{value:O,enumerable:!0}):H;for(let W of Nj(O))if(!Aj.call(_,W))zO(_
,W,{get:()=>O[W],enumerable:!0});return _};var g=(O,j)=>()=>(j||O((j={exports:{}}).exports,j),j.exports);var t=g((eK,CO)=>{CO.exports={ROOT:0,G
ROUP:1,POSITION:2,SET:3,RANGE:4,REPETITION:5,REFERENCE:6,CHAR:7}});var UO=g((Vj)=>{var Y=t(),KO=()=>[{type:Y.RANGE,from:48,to:57}],QO=()=>{retu
rn[{type:Y.CHAR,value:95},{type:Y.RANGE,from:97,to:122},{type:Y.RANGE,from:65,to:90}].concat(KO())},NO=()=>{return[{type:Y.CHAR,value:9},{type:
Y.CHAR,value:10},{type:Y.CHAR,value:11},{type:Y.CHAR,value:12},{type:Y.CHAR,value:13},{type:Y.CHAR,value:32},{type:Y.CHAR,value:160},{type:Y.CH
AR,value:5760},{type:Y.RANGE,from:8192,to:8202},{type:Y.CHAR,value:8232},{type:Y.CHAR,value:8233},{type:Y.CHAR,value:8239},{type:Y.CHAR,value:8
287},{type:Y.CHAR,value:122 | ... truncated 

error: Error on typia.json.assertParse(): invalid type on $input.name, expect to be string
 path: "$input.name"
      at new $ (/private/tmp/bun-typia-template/out/index.js:1:18367)
      at /private/tmp/bun-typia-template/out/index.js:1:18728
      at /private/tmp/bun-typia-template/out/index.js:1:18701
      at /private/tmp/bun-typia-template/out/index.js:1:37913
      at H (/private/tmp/bun-typia-template/out/index.js:1:37971)
      at /private/tmp/bun-typia-template/out/index.js:1:38032

Bun v1.1.12 (macOS arm64)
error: script "start" exited with code 1
```
