var majorityElement = function (nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
};



console.log(majorityElement([3, 2, 3]));