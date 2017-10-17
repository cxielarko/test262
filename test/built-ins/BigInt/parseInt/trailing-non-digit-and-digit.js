// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint-parseint-string-radix
description: 10 with trailing non-digit
info: >
  BigInt.parseInt ( string, radix )

  The parseInt function produces a BigInt value dictated by
  interpretation of the contents of the string argument according to
  the specified radix.

  The algorithm is the same as 18.2.5 but with the following edits:

  * For all cases which result in returning NaN, throw a SyntaxError
    exception.
  * For all cases which result in returning -0, return 0n.
  * Replace the second to last step, which casts mathInt to a Number,
    with casting mathInt to a BigInt.

  18.2.5 parseInt ( string, radix )

  The parseInt function produces an integer value dictated by
  interpretation of the contents of the string argument according to the
  specified radix. Leading white space in string is ignored. If radix is
  undefined or 0, it is assumed to be 10 except when the number begins
  with the code unit pairs 0x or 0X, in which case a radix of 16 is
  assumed. If radix is 16, the number may also optionally begin with the
  code unit pairs 0x or 0X.

  [...]

  NOTE: parseInt may interpret only a leading portion of string as an
  integer value; it ignores any code units that cannot be interpreted as
  part of the notation of an integer, and no indication is given that
  any such code units were ignored.
features: [BigInt]
---*/

for (var i = 2; i <= 36; i++) {
    assert.sameValue(BigInt.parseInt("10$1", i), BigInt(i));
}
