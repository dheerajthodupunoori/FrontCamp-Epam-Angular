// 1. SET
// Rewrite the sample code below so that every time a property is set a callback runs.
// your callback will check if the property changed is employees.

//If it is employees, make sure if it is an Array, a string or null.
//If anything else comes, respond with an appropriate message
//If not employees, let it pass

let manager = {
  office: `Dubai`,
  dept: `sales`,
  employees: 0
};

let managerHandler = {
  set: (target, prop, value) => {
    if (prop === "employees") {
      if (
        typeof value === `string` ||
        value == null ||
        value instanceof Array
      ) {
        target[prop] = value;
      } else {
        console.log("cannot be updated with value , ", typeof value, value);
      }
    }
  }
};

const managerProxy = new Proxy(manager, managerHandler);
managerProxy.office = `London`; //updates
managerProxy.employees = ["Jim", "Patrick", "Mary"]; //updates
console.log("array", manager);

managerProxy.employees = 3; // doesn't update
console.log("number", manager);

managerProxy.employees = null; // updates
console.log("null", manager);

managerProxy.employees = { name: "Jim" };
console.log("complex object", manager);

managerProxy.employees = "qwerty";
console.log("string", manager); // doesn't update

// 2. GET
// adjust the following code so that anytime an internal object with accessLevel of 1 is accessed,
//"Access Denied" is returned.

const user = {
  username: `Harold`,
  accessLevel: 1,
  accessCode: 9999
};

let usersProxyHandler = {
  get: (target, propName) => {
    if (target.accessLevel === 1) {
      console.log("Access Denied");
    }
  }
};
let usersProxy = new Proxy(user, usersProxyHandler);
console.log(usersProxy.username);
