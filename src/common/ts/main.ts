let hello = 'hello world, I\'m coming;'
console.log(hello);

function getFunction() : () => void {
    return () => logSomething();
}

function logSomething() {
    console.log(hello);
}

const func = getFunction();
func()

// how to define a set:
let newSet:Set<string> = new Set()
newSet.add('hello')
newSet.add('world')
newSet.delete('world')
console.log(newSet)
// Convert set to JSON. 这是因为 Set 在 JavaScript 和 TypeScript 中，无法被直接序列化为 JSON 格式。
// 在 JavaScript 中，JSON.stringify 默认只处理普通对象的可枚举属性，而 Set 是一种特殊的数据结构，它的内容并不是以普通对象属性的方式存储的。
console.log(JSON.stringify(Array.from(newSet)))