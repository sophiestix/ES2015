'use strict';

const student = { name: 'James', followerCount: 34 };

let tableHtml = `
  <table class="table">
    <thead>
      <tr>
        <td>Name</td>
        <td>Followers</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${student.name}</td> //value insterted in from outside the string
        <td>${student.followerCount}</td>
      </tr>
    </tbody>
  </table>`;

console.log(tableHtml);