// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
findMatching(drivers, 'Sammy');

function findMatching(arr, string) {
    return arr.filter( (driver) => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(arr, string) {
    //arr.filter(drivers => console.log(drivers.charAt(0).toLowerCase() === string.toLowerCase()))
    let subset = []
    arr.filter((driver) =>    {
      if (driver.slice(0, string.length).toLowerCase() === string.toLowerCase()) {
        subset.push(driver);
      }
      })
    return subset;
  }

function matchName(arr, string) {
    let subset = []
    arr.filter((driver) => {
      if (driver.name.toLowerCase() === string.toLowerCase()) {
        subset.push(driver);
      }                                          
    })
    return subset
  }
    