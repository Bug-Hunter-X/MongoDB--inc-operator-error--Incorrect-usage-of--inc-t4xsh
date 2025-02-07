# MongoDB $inc Operator Error: Incorrect Usage

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.

The `$inc` operator is used to increment a numerical field by a specified value.  However, a common mistake is to provide a string value instead of a number.  This results in unexpected behavior or an error.

## Bug
The `bug.js` file demonstrates the incorrect usage:

```javascript
// Incorrect use of $inc operator
db.collection.updateOne({ _id: 1 }, { $inc: { field: '1' } });
```

This will not increment the field correctly.

## Solution
The `bugSolution.js` file demonstrates the correct usage:

```javascript
// Correct use of $inc operator
db.collection.updateOne({ _id: 1 }, { $inc: { field: 1 } });
```

This will correctly increment the field by 1.
