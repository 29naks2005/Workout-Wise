// Fix for Node.js v25+ which has a built-in localStorage global
// that is incompatible with browser's localStorage API.
// This causes Next.js's bundled 'debug' module to crash.
delete globalThis.localStorage;
