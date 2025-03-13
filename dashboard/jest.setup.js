import { TextEncoder, TextDecoder } from 'util'; // Polyfill for TextEncoder/TextDecoder
import '@testing-library/jest-dom'; // Add custom Jest matchers
// Add TextEncoder and TextDecoder to the global scope
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;