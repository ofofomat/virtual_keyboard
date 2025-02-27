import crypto from 'crypto';

/**
 * Generates a random keyboard layout with 5 unique pairs of numbers (0-9).
 * @returns {number[][]} An array of 5 arrays, each containing 2 unique numbers.
 */
export function generateKeyboardLayout(): number[][] {
    const numbers = Array.from({ length: 10 }, (_, i) => i);

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    const keyboardLayout: number[][] = [];
    for (let i = 0; i < 10; i += 2) {
        keyboardLayout.push([numbers[i], numbers[i + 1]]);
    }

    return keyboardLayout;
}

/**
 * Generates a unique hash for a given keyboard layout.
 * @param keyboardLayout An array of 5 pairs of numbers ([[num1, num2], ...])
 * @returns {string} A SHA-256 hash of the sorted layout
 */
export function generateKeyboardHash(keyboardLayout: number[][]): string {
    const sortedLayout = keyboardLayout.map(pair => pair.sort((a, b) => a - b)).sort();
    
    const layoutString = JSON.stringify(sortedLayout);
    
    return crypto.createHash('sha256').update(layoutString).digest('hex');
  }