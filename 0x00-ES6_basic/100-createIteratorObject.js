export default function createIteratorObject(report) {
  const iterator = [];
  Object.values(report.allEmployees).forEach((value) => {
    iterator.push(...value);
  });
  return iterator;
}
