// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint-parseint-string-radix
description: >
    parseInt - 'S' is the empty string when inputString does not
    contain any such characters
---*/

assert.throws(SyntaxError, () => BigInt.parseInt(""));
