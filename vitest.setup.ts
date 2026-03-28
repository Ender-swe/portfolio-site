import "@testing-library/jest-dom";

// JSDOM doesn't implement IntersectionObserver; mock it for framer-motion's whileInView
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;
