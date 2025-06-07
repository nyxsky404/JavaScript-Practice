## 🧮 JS Calculator

**Time Limit:** 2
**Memory Limit:** 128000

---

### 📝 Problem Statement

Write a JavaScript program that functions as a simple calculator using a `switch` statement. The program should:

* Use the following **pre-defined inputs**:

  * A variable `a` with a number.
  * A variable `b` with a number.
  * A variable `sign` with a string representing a mathematical operation (e.g., `"+"`).

* Use a `switch` case to evaluate the value of `sign` and perform the corresponding operation on `a` and `b`. Handle the following operations:

  * Addition (`+`)
  * Subtraction (`-`)
  * Multiplication (`*`)
  * Division (`/`)
  * Modulus (`%`)

* Print the result of the operation (if valid) in the console or display it on the webpage.

* If not possible, print: `"Invalid operation"`.

---

### 📥 Input

The predefined inputs for the program are:

* A variable `a` (number)
* A variable `b` (number)
* A variable `sign` (string)

---

### 📤 Output

Print the result of the operation in the console or display it.
If the `sign` variable contains an invalid operation (anything other than `+`, `-`, `*`, `/`, `%`), print:

```
Invalid operation. Please use +, -, *, /, or %.
```

---

### ✅ Example

**Sample Input:**

```
a = 10
b = 20
sign = "+"
```

**Sample Output:**

```
30
```