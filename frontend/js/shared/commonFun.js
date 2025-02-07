export const sliceDescription = (description) => {
  const result =
    description.length > 70 ? description.slice(0, 700) + "..." : description;
  return result;
};

export function makeUrl(path) {
  const url = `http://localhost:5000/api${path}`;
  return url;
}
