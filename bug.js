```javascript
// Incorrect use of $inc operator in MongoDB update
db.collection.updateOne({ _id: 1 }, { $inc: { field: '1' } });
```