const res = add(10, 20);
console.log(res);

import add from "./math.js";

/* 
Flow
-----------
index.js
   ↓
1. Parse
  ↓
2. Discover imports
  ↓
3. Resolve dependencies
  ↓
4. Load dependencies
  ↓
5. Parse dependencies
  ↓
6. Link import/export bindings
  ↓
7. Initialize dependencies
  ↓
8. Execute module bodies


Don't think of it as JavaScript literally moving: [import add from "./math.js";] to the top.
Instead, imports are resolved and their bindings are established before the module body executes.
The import is processed during module linking before execution.

CommonJS
--------------
console.log(add(10, 20));
const add = require("./math.js");
require() is just executed when that line is reached.

|                          | `import`                      | `require()`                        |
| ------------------------ | ----------------------------- | ---------------------------------- |
| System                   | ES Modules                    | CommonJS                           |
| Processing               | Module linking                | Runtime execution                  |
| Special hoisting/linking | Yes                           | No                                 |
| Can appear after usage?  | Generally yes                 | No                                 |
| Example                  | `import add from "./math.js"` | `const add = require("./math.js")` |
| Dynamic loading          | `import()`                    | `require()`                        |

*/
