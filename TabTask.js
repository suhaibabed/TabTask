let nums = [2, 7, 11, 15];

function solution(nums) {
  let target = 9;
  let newArr;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        newArr = [nums[i], nums[j]];
        console.log(newArr);
        return;
      }
    }
  }
  console.log(nums);
}

solution(nums);
