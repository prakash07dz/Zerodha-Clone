import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

// Add TextEncoder and TextDecoder to the global scope
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;