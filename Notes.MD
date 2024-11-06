### Types:

- Number, String, Boolean, Null, Undefined, Void, Object, Array, Tuples, Never, Unkown, Any(don't use)...
- JavaScript does not have a special runtime value for integers, so there’s no equivalent to `int` or `float` - everything is simply number

### Situations:

- A function accepts 2 numbers.
- A function returns a string.

### Syntax:

let variableName:`type` = value

### Type Inference

Whenever you are assigning the value for a variable immediately after declaring, there is no need to metnion type, TS is smart enough to know infer the type of the variable from the assigned value.

```typescript
let userId: number = 135431.696; //Not needed
let userId = 3533.2; // Is enough
userId = "hello"; // will throw error
//Needed
let userId: number;
userId = 56543.54;
```

The compiled JS will not have `:type`.
