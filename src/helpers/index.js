export function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

export function loadRoute(cb) {
  return (module) => cb(null, module.default);
}
