// // setupTests.js
// import { JSDOM } from 'jsdom';

// const dom = new JSDOM('<!doctype html><html><body></body></html>');
// global.document = dom.window.document;
// global.window = dom.window;
// global.localStorage = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
// };

// // Now import this file at the beginning of your test files
import 'jsdom-global/register';
