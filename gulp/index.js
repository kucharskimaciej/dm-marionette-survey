var gulp = require('gulp');
var path = require('path');

module.exports = function registerTasks(tasks) {
  tasks.forEach(function(task) {
     gulp.task(task, require(path.join(__dirname, 'tasks', task)));
  });
};

