"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tests/index.test.ts
const script_1 = require("../src/script");
test('greets the user with "Hello, {name}!"', () => {
    expect((0, script_1.greet)('World')).toBe('Hello, World!');
});
