// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check If Statement for automatic semicolon insertion
 *
 * @section 7.9, 12.5
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A11_T3.js
 * @description Use if (false);\n x = 1 and check x
 */

//CHECK#1
var x = 0;
if (false);
x = 1
if (x !== 1) {
  $ERROR('#1: Check If Statement for automatic semicolon insertion');
}

