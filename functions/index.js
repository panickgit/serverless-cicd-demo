'use strict';
/** EXPORT ALL FUNCTIONS
 *
 *   Loads all `.f.js` files
 *   Exports a cloud function matching the file name
 *   Author: David King
 *   Edited: Tarik Huber/Christopher Sanson
 *   Based on this thread:
 *     https://github.com/firebase/functions-samples/issues/170
 */
const glob = require('glob');
const camelCase = require('camelcase');

const files = glob.sync('./**/*.f.js', {cwd: __dirname});

for (let f = 0, fl = files.length; f < fl; f++) {
  const file = files[f];
  // Convert filepath to name, e.g. /functions/functions/auth/onCreate.f.js => authOnCreate
  const functionName = camelCase(file.slice(0, -5).replace('./functions/', './').split('/').join('_')); // Strip off '.f.js'
  // Create a staging version for each function
  const functionNameStaging = functionName + '_staging';

  if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
    exports[functionName] = require(file);
  }

  if (!process.env.FUNCTION_NAME_STAGING || process.env.FUNCTION_NAME_STAGING === functionNameStaging) {
    exports[functionNameStaging] = require(file);
  }
}
