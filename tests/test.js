// Performance test for email validation
const utils = require('../src/utils');

// Test data
const testEmails = [
  'user@example.com',
  'john.doe@company.co.uk',
  'invalid.email@',
  'test@domain',
  'hello@world.com'
];

// Benchmark
console.log('Running email validation benchmark...');
const iterations = 1000000;

console.time('Email Validation Performance');
for (let i = 0; i < iterations; i++) {
  for (const email of testEmails) {
    utils.validateEmail(email);
  }
}
console.timeEnd('Email Validation Performance');

console.log(`\n✓ Validated ${iterations * testEmails.length} emails`);
console.log('With regex memoization, this should be ~50-70% faster than recreating the regex each call');
