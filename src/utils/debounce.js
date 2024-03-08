function debounce(fn, ms) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      fn.apply(context, args);
    }, ms);
  };
}

export default debounce;
