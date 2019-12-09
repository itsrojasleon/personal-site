---
title: Objects
path: /blog/objects
date: 2016-12-02
featuredImage: "./picture.jpeg"
tags: ["objects"]
---

An **object** is a container of properties where a property has a name and a value. A property name can be any `string`, including the `empty string`. A property value can be any javascript value except for `undefined`; arrays are objects, functions are objects, regular expressions are objects, and, of course, objects are objects.

Objects in Javascript are mutable keyed collections and class-free. There is no contraint on the names of new properties or on the values of properties. Objects are useful for collecting and organizing data. Objecs can contain other objects, so they can easily represent tree or graph structures.

```javascript
const myObject = {
  propertyName: "Property value"
}

// 🐶
const dogObject = {
  dad: "Max",
  age: 5, // Years
  children: {
    child1: "Rocky",
    child2: "Cooper"
  },
  married: true,
}
```

## Accessing object properties

**"VALID KEYS"**: All keys are converted to strings. *Except for `Symbols`*

You can attempt to use a number as a key or a boolean as a key but it will be turned into a string even if it doesn't appear that way.

We have a second syntax to access values out of an object:

```javascript
const numbers = {
  50: "Fifty",
  11: "Eleven"
}

// This is converted to:
const numbers = {
  "50": "Fifty",
  "11": "Eleven"
}

> numbers[50] // ✅ === "Fifty";
> numbers["50"] // ✅ === "Fifty";

/***************/
const stuff = {
  "What is up": "Not much"
}

> stuff."What is up" // ❌
> stuff["What is up"] // ✅ === "Not much"

/***************/

const colors = {
  red: "#D50000",
  blue: "#536DFE",
  pink: "#D500F9"
}

> colors.red // ✅ === "#D50000"
> colors[blue] // ❌ It doesn't exist any blue variable
> colors["blue"] // ✅ === "#536DFE"
```

## Adding and updating properties

A value in a object can be created or updated by assignment. If the property name already exists in the object, the property value is replaced.

```javascript
const greetings = {};

greetings["first"] = "Hello";
greetings.second = "Hi";
greetings.third = "What is bad" // Oooppsss!
greetings.third = "What is good" // Better!

console.log(greetings)
> {first: "Hello", second: "Hi", third: "What is good"}

/***************/

const numbers = {};

for (let i = 1; i <= 3; i++) {
  numbers[`number${i}`] = i;
}
console.log(numbers)
> {number1: 1, number2: 2, number3: 3}
```

## Objects and reference types

Objects are passed around by reference. They are never copied.

```javascript
const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b"
}

const palette2 = palette;

palette2.green = "#33691E";

console.log(palette, palette2);
> {red: "#eb4d4b", yellow: "#f9ca24", blue: "#30336b", green: "#33691E"}
> {red: "#eb4d4b", yellow: "#f9ca24", blue: "#30336b", green: "#33691E"}

console.log(palette === palette2)
> true
```

The simple types of Javascript are numbers, strings, booleans (true and false), null, and undefined. All other values are objects. Numbers, strings and booleans are object-like in that they have methods, but they are immutable.
