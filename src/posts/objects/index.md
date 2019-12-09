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

### Accessing Object Properties

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
