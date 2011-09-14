// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property LOG2E of the Math Object has the attribute DontDelete
 *
 * @section 15.8.1.4
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.4_LOG2E/S15.8.1.4_A3.js
 * @description Checking if Math.LOG2E property has the attribute DontDelete
 * @strict_only
 * @negative
 */

// CHECK#1
if (delete Math.LOG2E === true) {
    $ERROR('#1: Value Property LOG2E of the Math Object hasn\'t attribute DontDelete: \'Math.LOG2E === true\'');
}


