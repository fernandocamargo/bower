export default (stack, fragment) =>
  stack.hasOwnProperty(fragment) ? stack[fragment] : stack;
