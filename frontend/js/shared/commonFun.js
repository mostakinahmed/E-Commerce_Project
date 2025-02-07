export const sliceDescription = (description) => {
  const result =
    description.length > 65 ? description.slice(0, 65) + "..." : description;
  return result;
};

export function makeUrl(path) {
  const url = `http://localhost:5000/api${path}`;
  return url;
}
