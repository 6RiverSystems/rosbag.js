// Copyright (c) 2018-present, GM Cruise LLC

// This source code is licensed under the Apache License, Version 2.0,
// found in the LICENSE file in the root directory of this source tree.
// You may not use this file except in compliance with the License.

import { isBrowser, isNode } from "browser-or-node";

let Reader;

// borrowing this webpack detection technique from
// https://github.com/thejameskyle/react-loadable/blob/master/src/index.js#L9
if (isBrowser) {
  // eslint-disable-line
  // this is set to true in webpack config
  Reader = require("./browser"); // eslint-disable-line
} else if (isNode) {
  // otherwise we're in node
  Reader = require("./node"); // eslint-disable-line
} else {
  throw new Error("Unknown execution environment");
}

module.exports = Reader;
