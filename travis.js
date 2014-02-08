// CREATE AND INITIALIZE DATABASE
var db = new ydn.db.Storage('personal-travis-1');
db.put('muuvi', {weight: '34', reps: '10', interval: '10'}, '11-13-24');
db.put('muuvi', {weight: '34', reps: '10', interval: '5'}, '12-13-24');
db.put('muuvi', {weight: '34', reps: '10', interval: '5'}, '13-13-24');
db.put('muuvi', {weight: '304', reps: '10', interval: '5'}, '14-13-24');

db.from('muuvi').list(10).done(function(records) {
  console.log(records[0].weight);
});

db.from('muuvi').list(10).done(function(records) {
  //console.log(records[0].weight);
  alert(records[(records.length - 1)].weight);
});

// ei toimi
// var reverse = false; // sorted by ascending of date
// db.from('muuvi').order('born', reverse).list(10).done(function(records) {
//   console.log(records);
// });


// var getAllTodoItems = function () {
//   var todos = document.getElementById("todoItems");
//   todos.innerHTML = "";
// 
//   var df = db.values('todo');
// 
//   df.done(function (items) {
//     var n = items.length;
//     for (var i = 0; i < n; i++) {
//       renderTodo(items[i]);
//     }
//   });
// 
//   df.fail(function (e) {
//     throw e;
//   })
// };
// 
// var renderTodo = function (row) {
//   var todos = document.getElementById("todoItems");
//   var li = document.createElement("li");
//   var a = document.createElement("a");
//   var t = document.createTextNode(row.text);
// 
//   a.addEventListener("click", function () {
//     deleteTodo(row.timeStamp);
//   }, false);
// 
//   a.textContent = " [Delete]";
//   li.appendChild(t);
//   li.appendChild(a);
//   todos.appendChild(li)
// };
// 
// var addTodo = function () {
//   var todo = document.getElementById("todo");
// 
//   var data = {
//     "text":todo.value,
//     "timeStamp":new Date().getTime()
//   };
//   db.put('todo', data).fail(function(e) {
//     throw e;
//   });
// 
//   todo.value = "";
// 
//   getAllTodoItems();
// };
// 
// function init() {
//   getAllTodoItems();
// }
// 
// init();
