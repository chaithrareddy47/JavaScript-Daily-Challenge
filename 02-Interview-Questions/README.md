# Interview Questions

### 1. What is hoisting
  - Hoisting in JavaScript involves moving the declarations of variables and entire function declarations to the top of their containing scope during the compilation phase. However, it's important to note that only the declarations are hoisted, not their values or initializations

### 2. Explain variable hoisting.
  - Variable hoisting in JavaScript means that variable declarations are moved to the top of their containing scope during the compilation phase. This allows you to access a variable before it's formally declared in the code. However, it's important to note that only the declaration is hoisted, not the initialization.

  When you access a variable before its declaration, JavaScript doesn't throw an error; instead, it returns undefined

### 3. How does function hoisting work in JavaScript? 
   - Function Declaration Hoisting:

  Function declarations are hoisted entirely to the top of their containing scope during the compilation phase.
  This means you can invoke a function before it appears in the code.
   - Variable Declaration Hoisting within Functions:
  Variables declared within a function using var are also hoisted to the top of the function, but only the declaration, not the initialization.
  When a variable is hoisted, it is initialized with undefined by default.


### 4. What will be the output of the following code?
console.log(a);  - undefined
var a = 5; 5 assigned to a


  
