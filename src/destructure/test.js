const arr = ["a", ["b", "c", ["d"], [undefined, "g", ["x"], ["y"]]], "h", ["l"]];
/*补充代码*/
const [, [, , , [a = 1, , [b],]], ,] = arr
console.log(a)
console.log(b)