var twoSum = function (nums, target) {
    let list = [];

    for(let i = 0; i < nums.length; i++){
        const missing = target - nums[i];
        if (list[missing] != undefined) return [list[missing], i];
        list[nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));