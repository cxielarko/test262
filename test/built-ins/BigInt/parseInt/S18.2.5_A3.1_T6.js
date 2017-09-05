// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToNumber
esid: sec-bigint-parseint-string-radix
description: Checking for String object
---*/

assert.sameValue(BigInt.parseInt("11", new String("2")), BigInt.parseInt("11", 2));
assert.sameValue(BigInt.parseInt("11", new String("Infinity")), BigInt.parseInt("11", Infinity));
