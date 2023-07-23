export function merge(target: any, source: any) {
  Object.keys(source).forEach(function (key) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
        target[key] = target[key] || {};
        merge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  });
}