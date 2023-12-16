const sp = new URLSearchParams(window.location.search);
//  console.log(sp);

// this is how to define parameters
$fx.params([
  {
    id: "number_id",
    name: "A number/float64",
    type: "number",
    //default: Math.PI,
    options: {
      min: 1,
      max: 10,
      step: 0.0001,
    },
  },
  {
    id: "string_id",
    name: "A string",
    type: "string",
    update: "code-driven",
    //default: "hello",
    options: {
      minLength: 1,
      maxLength: 512,
    },
  },
  {
    id: "bigint_id",
    name: "A bigint",
    type: "bigint",
    update: "code-driven",
    //default: BigInt(Number.MAX_SAFE_INTEGER * 2),
    options: {
      min: Number.MIN_SAFE_INTEGER * 4,
      max: Number.MAX_SAFE_INTEGER * 4,
      step: 1,
    },
  },
  {
    id: "select_id",
    name: "A selection",
    type: "select",
    // update: "code-driven",
    update: "sync",
    //default: "pear",
    options: {
      options: ["apple", "orange", "pear"],
    },
  },
  {
    id: "color_id",
    name: "A color",
    type: "color",
    update: "code-driven",
    //default: "ff0000",
  },
  {
    id: "boolean_id",
    name: "A boolean",
    type: "boolean",
    update: "code-driven",
    //default: true,
  },

  {
    id: "x_id",
    name: "x (sync)",
    type: "number",
    update: "sync",
    default: 100,
    options: {
      min: 0,
      max: 800,
      step: 0,
    },
  },
  {
    id: "y_id",
    name: "y (code-driven)",
    type: "number",
    update: "code-driven",
    default: 100,
    options: {
      min: 0,
      max: 800,
      step: 0,
    },
  },
  {
    id: "l_id",
    name: "l (page-reload)",
    type: "number",
    update: "page-reload",
    default: 100,
    options: {
      min: 0,
      max: 800,
      step: 0,
    },
  },
]);

// this is how features can be defined
$fx.features({
  "A random feature": Math.floor($fx.rand() * 10),
  "A random boolean": $fx.rand() > 0.5,
  "A random string": ["A", "B", "C", "D"].at(Math.floor($fx.rand() * 4)),
  "Feature from params, its a number": $fx.getParam("number_id"),
});
