// 该文件为调试函数

function randomNum(minNum: number, maxNum: number) {
	return Math.round(Math.random() * (maxNum - minNum + 1) + minNum);
}

export { randomNum };
