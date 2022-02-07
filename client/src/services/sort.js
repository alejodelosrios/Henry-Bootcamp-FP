export const sortByProp = (array, prop) => {
  return (array = array.sort((b, a) => {
    if (b[prop] - a[prop] !== 0) {
      return b[prop] - a[prop];
    } else {
      if (a.hasOwnProperty("name")) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }
    }
  }));
};
