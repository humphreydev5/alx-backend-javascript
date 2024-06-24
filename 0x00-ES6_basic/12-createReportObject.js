export default function createReportObject(employeesList) {
  const obj = {};
  obj.allEmployees = { ...employeesList };

  obj.getNumberOfDepartments = (employeesList) => {
    let count = 0;
    Object.keys(employeesList).forEach(() => {
      count += 1;
    });
    return count;
  };
  return obj;
}
