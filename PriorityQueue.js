function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  // return empty status
  this.isEmpty = function () {
    return collection.length === 0;
  };
  // add element based on priority
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  // remove first element
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };
  // return first element
  this.front = function () {
    return collection[0];
  };
  // return size
  this.size = function () {
    return collection.length;
  };
  // return empty status
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
