function printAnArray<T>(arr: T[]): void {
  arr.forEach((e: T) => console.log(e));
}

const printArr = <T>(arr: T[]): void => {
  arr.forEach((e: T) => console.log(e));
};

let nums: number[] = [1, 2, 34, 42, 2];
printAnArray(nums);
printArr(nums);
