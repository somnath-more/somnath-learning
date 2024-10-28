const questions = [
    {
        title: "Question 1: Declaration and Initialization",
        code: `let a;\nconsole.log(a);\na = 10;`
    },
    {
        title: "Question 2: Comparison Chain",
        code: `console.log(1 < 2 < 3);\nconsole.log(1 > 2 > 3);`
    },
    {
        title: "Question 3: Type Coercion with Addition and Subtraction",
        code: `console.log(5 + '5');\nconsole.log(5 - '5');`
    },
    {
        title: "Question 4: Equality vs. Strict Equality",
        code: `console.log(5 == '5');\nconsole.log(5 === '5');`
    },
    {
        title: "Question 5: Variable Scope in Functions",
        code: `function xyz() {\n    var a = b = 4; \n    let c = 9;\n    console.log(c);\n    console.log(a);\n}\nxyz();\nconsole.log(b);`
    },
    {
        title: "Question 6: Type of Type",
        code: `console.log(typeof typeof 1);`
    },
    {
        title: "Question 7: Variable Hoisting with `let`",
        code: `g = 7;\nconsole.log(g);\nlet g;`
    },
    {
        title: "Question 8: Array Concatenation and Type",
        code: `let arr1 = [2];\nlet arr2 = [3];\nconsole.log(arr1 + arr2);\nconsole.log(typeof arr1);`
    },
    {
        title: "Question 9: Accessing Object Properties",
        code: `const data = {\n    "name": 'john',\n    "work": 'engineer'\n};\nconsole.log(data.name);`
    },
    {
        title: "Question 10: Modifying Object Properties",
        code: `const data1 = {\n    "name": 'john',\n    "work": 'engineer'\n};\ndata1.name = "Roman";\nconsole.log(data1.name);`
    },
    {
        title: "Question 11: Frozen Object Behavior",
        code: `const data2 = {\n    "name": 'john',\n    "work": 'engineer'\n};\nObject.freeze(data2);\ndata2.name = "Roman";\nconsole.log(data2.name);`
    },
    {
        title: "Question 12: Extracting Keys from an Object",
        code: `const data3 = {\n    "name": 'john',\n    "work": 'engineer'\n};\nconsole.log(Object.keys(data3));\ndata3.name = "Roman";\nconsole.log(data3.name);`
    },
    {
        title: "Question 13: Comparing with Falsy Values",
        code: `let arr = [];\nconsole.log(false == arr);`
    },
    {
        title: "Question 14: Variable Scope within Blocks",
        code: `if (false) {\n    console.log("Hello");\n    var a = 10;\n}\nconsole.log(a);`
    },
    {
        title: "Question 15: Clearing a Timer",
        code: `const timer = setTimeout(() => {\n    console.log("Hello JavaScript Lover");\n}, 2000);\nclearTimeout(timer);\nconsole.log("Will it clear timer variable");`
    },
    {
        title: "Question 16: Variable Shadowing",
        code: `var x = 4;\nlet y = 3;\n{\n    var x = 2;\n    let y = 6;\n    console.log(y);\n}\nconsole.log(x + " " + y);`
    },
    {
        title: "Question 17: Postfix Increment",
        code: `let a = 5;\nlet b = a++;\nconsole.log(a + b);\nconsole.log(a, b);`
    },
    {
        title: "Question 18: Modifying Object Properties with Constants",
        code: `const data4 = {\n    id: "1",\n};\ndata4.id = "2";\nconsole.log(data4.id);`
    },
    {
        title: "Question 19: Order of Console Outputs with `setTimeout`",
        code: `setTimeout(() => {\n    console.log("1");\n}, 0);\nconsole.log("2");`
    },
    {
        title: "Question 20: Array Slicing and Mutation",
        code: `var a = [1, 2, 3];\nvar b = a.slice();\nb[0] = 0;\nconsole.log(a);\nconsole.log(b);`
    },
    {
        title: "Question 21: Object Reference and Mutation",
        code: `let person = { name: 'venus' };\nconst members = [person];\nconsole.log(members);\nperson = null;\nconsole.log(members);`
    },
    {
        title: "Question 22: Shallow Copy of Objects",
        code: `const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];\nconst ingredientsListCopy = Array.from(ingredientsList);\nconsole.log(ingredientsListCopy);\ningredientsListCopy[1].list = ["rice flour", "water"];\nconsole.log(ingredientsList[1].list);`
    },
    {
        title: "Question 23: Deep Copy of Objects",
        code: `const ingredientsListDeep = ["noodles", { list: ["eggs", "flour", "water"] }];\nconst ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsListDeep));\ningredientsListDeepCopy[1].list = ["rice flour", "water"];\nconsole.log(ingredientsListDeep[1].list);`
    },
    {
        title: "Question 24: Closure Concept",
        code: `function printArray() {\n    for (var i = 0; i < 4; i++) {\n        setTimeout(() => {\n            console.log(i);\n        }, 1000 * i);\n    }\n    console.log("Hello");\n}\nprintArray();`
    },
    {
        title: "Question 25: Default Parameters in Functions",
        code: `function defaultValues(x = 10, y = 14) {\n    return x + y;\n}\nconsole.log(defaultValues(null, 7));\nconsole.log(defaultValues(undefined, 8));`
    },
    {
        title: "Question 26: Type of NaN",
        code: `console.log(typeof NaN);`
    },
    {
        title: "Question 27: Array Push and Length",
        code: `let arrList = [1];\nlet arrList1 = arrList.push(9);\nconsole.log(arrList1);`
    },
    {
        title: "Question 28: Operator Precedence",
        code: `console.log(3 + 4 + '7');`
    },
    {
        title: "Question 29: Immutable String Behavior",
        code: `let str = "Jupyter";\nstr[0] = 'c';\nconsole.log(str);\nlet str1 = "Jupyter";\nlet charArray = str.split("");\nconsole.log(charArray);`
    },
    {
        title: "Question 30: Hoisting of Variables",
        code: `console.log(name);\nlet name = "John";`
    },
    {
        title: "Question 31: Variable Hoisting with `var`",
        code: `console.log(num);\nvar num;\nnum = 9;\nconsole.log(num);\nvar num = 1;\nconsole.log(num++);\nconsole.log(++num);`
    },
    {
        title: "Question 32: Variable Declaration Without `var`, `let`, or `const`",
        code: `numb = 6;\nconsole.log(numb);`
    },
    {
        title: "Question 33: Variable Hoisting with `let`",
        code: `var numb = 2;\nconsole.log(numb);\nlet numb;`
    },
    {
        title: "Question 34: Comparison of Primitive vs Object",
        code: `let a = 1;\nlet b = new Number(1);\nconsole.log(a == b);\nconsole.log(a === b);`
    },
    {
        title: "Question 35: Closures in Functions",
        code: `function a() {\n    var x = 0;\n    return function b() {\n        console.log(x);\n    }\n}\na()();`
    },
    {
        title: "Question 36: Function Expression",
        code: `var hello = function () {\n    console.log("Hello JS");\n}\nhello();`
    },
    {
        title: "Question 37: Variable Shadowing with `var` and `let`",
        code: `var a = 99;\nlet b = 100;\n{\n    var a = 101;\n    let b = 102;\n    console.log(a);\n    console.log(b);\n}\nconsole.log(a);\nconsole.log(b);`
    },
    {
        title: "Question 38: Arrow Function Usage",
        code: `const arrowFunc = (x, y) => x + y;\nconsole.log(arrowFunc(5, 10));`
    },
    {
        title: "Question 39: Ternary Operator Example",
        code: `let age = 20;\nlet canVote = (age >= 18) ? 'Yes' : 'No';\nconsole.log(canVote);`
    },
    {
        title: "Question 40: `this` Keyword in Arrow Functions",
        code: `const obj = {\n    name: "JS",\n    greet: () => {\n        console.log(this.name);\n    }\n};\nobj.greet();`
    },
    {
        title: "Question 41: Spread Operator with Arrays",
        code: `const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst arr3 = [...arr1, ...arr2];\nconsole.log(arr3);`
    },
    {
        title: "Question 42: Using `map` with Arrays",
        code: `const numbers = [1, 2, 3, 4];\nconst squares = numbers.map(n => n * n);\nconsole.log(squares);`
    },
    {
        title: "Question 43: Filter Even Numbers from an Array",
        code: `const nums = [1, 2, 3, 4, 5];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens);`
    },
    {
        title: "Question 44: Reducing an Array to a Sum",
        code: `const nums2 = [1, 2, 3, 4, 5];\nconst sum = nums2.reduce((acc, n) => acc + n, 0);\nconsole.log(sum);`
    },
    {
        title: "Question 45: Async/Await Example",
        code: `async function fetchData() {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n}\nfetchData();`
    },
    {
        title: "Question 46: Promise Example",
        code: `const promise = new Promise((resolve, reject) => {\n    setTimeout(() => resolve('Done!'), 1000);\n});\npromise.then(console.log);`
    },
    {
        title: "Question 47: Using `forEach` on Arrays",
        code: `const items = ['apple', 'banana', 'cherry'];\nitems.forEach((item, index) => {\n    console.log(index, item);\n});`
    },
    {
        title: "Question 48: Object Destructuring",
        code: `const person = { name: 'Jane', age: 30 };\nconst { name, age } = person;\nconsole.log(name, age);`
    },
    {
        title: "Question 49: Array Destructuring",
        code: `const arr = [1, 2, 3];\nconst [first, second] = arr;\nconsole.log(first, second);`
    },
    {
        title: "Question 50: Template Literals",
        code: `const name = 'John';\nconst greeting = \`Hello, \${name}!\`;\nconsole.log(greeting);`
    },
];

// Use this array to generate a quiz, a review session, or for teaching purposes.

let currentQuestionIndex = 0;
let originalConsoleLog = console.log; // Define this globally

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-title').innerText = question.title;
    document.getElementById('code-editor').value = question.code;
    document.getElementById('output').innerText = ''; // Clear previous output
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputArea = document.getElementById('output');
    outputArea.innerText = ''; // Clear previous output

    try {
        // Redirect console.log to output area while also showing it in the console
        console.log = function (message) {
            originalConsoleLog(message); // Log to console
            outputArea.innerText += message + '\n'; // Log to output area
        };

        // Execute the code
        eval(code);
    } catch (error) {
        outputArea.innerText += error + '\n';
        originalConsoleLog(error); // Log errors to console
    } finally {
        console.log = originalConsoleLog; // Restore original console.log
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

document.getElementById('run-btn').addEventListener('click', runCode);

loadQuestion();
