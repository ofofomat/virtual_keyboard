"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeyboardLayout = generateKeyboardLayout;
exports.generateKeyboardHash = generateKeyboardHash;
const crypto = require("crypto");
function generateKeyboardLayout() {
    const numbers = Array.from({ length: 10 }, (_, i) => i);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    const keyboardLayout = [];
    for (let i = 0; i < 10; i += 2) {
        keyboardLayout.push([numbers[i], numbers[i + 1]]);
    }
    return keyboardLayout;
}
function generateKeyboardHash(keyboardLayout) {
    const layoutString = JSON.stringify(keyboardLayout);
    return crypto.createHash('sha256').update(layoutString).digest('hex');
}
//# sourceMappingURL=index.js.map