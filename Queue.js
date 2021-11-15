function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // add to end of queue
  this.enqueue = function (element) {
    collection.push(element);
  };
  // remove first item
  this.dequeue = function () {
    return collection.shift();
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
