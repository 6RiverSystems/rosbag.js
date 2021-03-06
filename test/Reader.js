// Copyright (c) 2018-present, GM Cruise LLC

// This source code is licensed under the Apache License, Version 2.0,
// found in the LICENSE file in the root directory of this source tree.
// You may not use this file except in compliance with the License.

import { promisify } from "bluebird";
import path from "path";
import assert from "assert";

import Reader from "../lib/readers/node";

describe("Reader", () => {
  const fixture = path.join(__dirname, "fixtures", "asci-file.txt");

  it("should read bytes from a file", async () => {
    const reader = new Reader(fixture);

    const buff = await promisify(reader.read.bind(reader))(5, 10);
    assert.equal(reader.size(), 21);
    assert.equal("6789012345", buff.toString());

    await promisify(reader.close.bind(reader))();
  });
});
