function compareTriplets(a, b) {
  let result = [];
  let alice = 0;
  let bob = 0;
  for ( let i = 0; i < a.length; i += 1) {
      if (a[i] > b[i]) {
          alice += 1;
      }
      if (a[i] < b[i]) {
          bob += 1;
      }
  }
  result.push(alice, bob);
  console.log(result)
  return result;
}

console.log(compareTriplets(a = [1, 2, 3], b = [3, 2, 1]))