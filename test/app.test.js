const test = require("node:test");
const assert = require("node:assert");

test("Basic application test", () => {
    const message = "Hello from my Node.js DevOps application!";

    assert.strictEqual(
        message,
        "Hello from my Node.js DevOps application!"
    );
});