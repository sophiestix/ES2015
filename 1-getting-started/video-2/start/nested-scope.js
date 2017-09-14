'use strict';

(function () {
  const student = { name: 'James' };
  
  function createStudent(name) {
    const student = { name: name };
    return student;
  }
  
  console.log(createStudent('Ken'));
  console.log(student);
})();



// (function () {
//   const student = { name: 'James' };
  
//   function createStudent(name) {
//     student = { name: name }; // the root const cannot be reassigned
//     return student;
//   }
  
//   console.log(createStudent('Ken'));
//   console.log(student);
// })();

(function () {
  let student = { name: 'James' };
  
  function createStudent(name) {
    student = { name: name }; // the root let will let it reassigned
    return student;
  }
  
  console.log(createStudent('Ken'));
  console.log(student);
})();