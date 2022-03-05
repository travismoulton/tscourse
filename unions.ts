// Aliasing. Commonly done with unions to reduce boilerplate
// Can be used with literal types as well
type Combinable = number | string;

// Union types

function combine(
  input1: Combinable,
  input2: number | string,
  // This is a literal type. These will be the only strings the function will
  // accept without throwing an error
  resultConversion: "as-number" | "as-text"
) {
  let result: string | number;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result;
  }
}

const combinedAges = combine(2, 5, "as-number");
const combinedStrAges = combine("2", "5", "as-number");

// Literal types
