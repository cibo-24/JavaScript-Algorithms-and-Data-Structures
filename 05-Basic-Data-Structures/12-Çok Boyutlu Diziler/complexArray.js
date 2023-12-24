let nestedArray = [
    ['deep'],
    [
        ["deeper"], ["deeper"]
    ],
    [
        [
            ["deepest"],["deepest"]
        ]
    ],
    [
        [
            ["deepest-est?"]
        ]
    ],
];

console.log(nestedArray[2][1][0][0][0]);
console.log(nestedArray[2][1][0][0][0]) = "deep still";
console.log(nestedArray[2][1][0][0][0]); // "deep still". bu şekilde dizi içerisinde ki verileri değiştirebiliriz.

let myNestedArray = [
    // change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
    // change code above this line
  ];

