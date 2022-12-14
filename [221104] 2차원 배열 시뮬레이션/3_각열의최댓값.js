// 열에 대한 최댓값
// 열로 탐색 : i 와 j 의 위치가 바뀌어야 함

function solution(nums) {
  let answer = [];
  for (let i = 0; i < 9; i++) {
    let max = 0;
    for (let j = 0; j < 9; j++) {
      if (nums[j][i] > max) {
        max = nums[j][i]; // 행렬 중 기준이 되는 것이 앞에 오거나 첫번째 for 문으로 돌아야 함
      }
    }
    answer.push(max);
  }
  return answer;
}

console.log(
  solution([
    [3, 23, 85, 34, 17, 74, 25, 52, 65],
    [10, 7, 39, 42, 88, 52, 14, 72, 63],
    [87, 42, 18, 78, 53, 45, 18, 84, 53],
    [34, 28, 64, 85, 12, 16, 75, 36, 55],
    [21, 77, 45, 35, 28, 75, 90, 76, 1],
    [25, 87, 65, 15, 28, 11, 37, 28, 74],
    [65, 27, 75, 41, 7, 89, 78, 64, 39],
    [47, 47, 70, 45, 23, 65, 3, 41, 44],
    [87, 13, 82, 38, 31, 12, 29, 29, 80],
  ])
);
