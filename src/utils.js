// Utils with performance issues
const fs = require('fs');
const path = require('path');

// PERF-1: Inefficient string concatenation in loops
function buildLargeString(items) {
  let result = '';
  for (let i = 0; i < items.length; i++) {
    result += items[i] + ',';  // Creates new string each iteration
  }
  return result;
}

// PERF-2: Repeated regex compilation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// PERF-3: Unnecessary deep cloning
function processData(data) {
  const clonedData = JSON.parse(JSON.stringify(data));  // Expensive deep clone
  return clonedData.map(item => item * 2);
}

// PERF-4: Reading entire file for single line lookup
function findLineInFile(filePath, targetLine) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  return lines.find(line => line.includes(targetLine));
}

// PERF-5: No memoization for expensive calculations
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);  // Exponential time
}

// PERF-6: Repeated array searches
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);  // O(n) search each time
      }
    }
  }
  return duplicates;
}

// PERF-7: Synchronous operations in loop
function processMultipleFiles(filePaths) {
  const results = [];
  for (const filePath of filePaths) {
    const content = fs.readFileSync(filePath, 'utf-8');  // Blocking I/O
    results.push(content);
  }
  return results;
}

// PERF-8: Inefficient object lookups with nested loops
function matchUsers(userList, roleMap) {
  const matches = [];
  for (const user of userList) {
    for (const role in roleMap) {
      if (roleMap[role].includes(user.id)) {
        matches.push({ user, role });
      }
    }
  }
  return matches;
}

// PERF-9: No pagination on large datasets
function getAllUsers(database) {
  const users = database.query('SELECT * FROM users');  // Loads all rows
  return users;
}

// PERF-10: Repeated object property access
function sumUserScores(users) {
  let total = 0;
  for (const user of users) {
    total += user.score.value;  // Repeated property chain lookup
    total += user.score.bonus;
    total += user.score.penalty;
  }
  return total;
}

module.exports = {
  buildLargeString,
  validateEmail,
  processData,
  findLineInFile,
  fibonacci,
  findDuplicates,
  processMultipleFiles,
  matchUsers,
  getAllUsers,
  sumUserScores
};
