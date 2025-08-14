# PG6301 Web Development and API design - Exercises

## Exercise 1

Good programming is about getting frequent feedback from what you are working on, both from team members and from
programming tools.

Test-driven development is a method where the tools help you take small, quick steps and validate the work along the
way.

Pair programming is a normal way of working where two programmers sit at the same machine, screen, keyboard, and mouse,
and solve the task together.

Both methods are useful for quality, progress, and—perhaps most importantly—for making programming more fun.

In exercise 1, we will go through setting up the necessary tools to get started. We will then combine test-driven
development and pair programming to implement a program that converts a number to Roman numerals. For example, given
1999, the program should output "MCMXCIX".

For a full description of the coding problem,
see [Coding Dojo description of Roman Numerals](https://codingdojo.org/kata/RomanNumerals/)

### Step 1: Install and sign up for necessary tools

1. Install [NodeJS](https://nodejs.org/en/download/package-manager) (if you don't already have it)
2. Sign up for [GitHub student developer pack](https://education.github.com/pack/join) which gives you access to
   important resources like IntelliJ Ultimate and Heroku for free. Make sure to use your school email address for the
   registration.
3. Download [IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/download/). You can use a Trial license until your
   GitHub student pack is registered. You can then
   use [the IntelliJ student page](https://www.jetbrains.com/shop/eform/students)
   to get a long term license

### Step 2: Create a new project with NodeJS and Vitest

1. Find a partner
2. One of you should [create a new repository](https://github.com/new) on GitHub
3. Add your partner under Settings > Collaborator
4. In IntelliJ, select ☰ > File > New Project from Version Control and copy your new GitHub repo as the URL
5. Open the terminal Windows in IntelliJ
6. Create the `package.json` files for your Vitest tests to work
    1. `npm init -y`
    2. `npm install --save-dev vitest husky prettier`
    3. `npx husky init`
    4. `npm pkg set scripts.test="prettier --check ."`
    5. `npm pkg set scripts.test:watch="vitest --watch"`
7. Start running the tests: `npm run test:watch`

You should now see an error message saying "No test files found. You can change the file name pattern by pressing "p"".
This means that your tests are configured correctly.

### Step 3: Write your first failing test

1. Create a file named `romanNumerals.test.js`
    - The output from "vitest" should now say "No test suite found in file ...". This means that Vitest found the test
      file, but it was empty
2. Add code for your first test in `romanNumerals.test.js`
    ```js
    import { test, expect } from "vitest";
    
    test("1 in roman numerals is I", () => {
      expect(romanNumerals(1)).toBe("I");
    });
    ```
3. You should now receive the error message "ReferenceError: romanNumerals is not defined". This means that your test
   ran, but we haven't yet created the code for it to test
4. In IntelliJ, press F2 to select the next problem and `Alt-enter` (`opt-enter` on Mac) to get a quick fix. You can now
   select to create a new function.
5. Creating an empty function is fine. You test will fail with "AssertionError: expected undefined to be 'I' //
   Object.is equality"

This means that it is time to give control to your partner. You need to commit your code. In IntelliJ, you can select
☰ > Git > Git commit. However, when you try to commit, you will receive an error because Husky (which we installed
earlier)
is calling Prettier (which we installed earlier) to check that your code is formatted well.

In the terminal, write `npx prettier --write .` to reformat your code. You can now commit.

Select ☰ > Git > Push to push your changes to GitHub.

### Step 4: Make the test pass

The other programmer should now take over.

1. The other programmer should get the code to their computer from GitHub
2. In IntelliJ, select ☰ > File > New Project from Version Control and copy your GitHub repo as the URL
3. In the terminal, run `npm install`, then run `npm run test:watch`. You should now get a failing test
4. Implement the test as simply as possible: Just make `romanNumerals` always `return "I"`
5. You tests run green. You should now give each other a HIGH FIVE
6. Implement the second test:
    ```js
    test("2 in roman numerals is II", () => {
      expect(romanNumerals(2)).toBe("II");
    });
    ```
7. The test should fail with "AssertionError: expected 'I' to be 'II'"
8. Reformat you code with Prettier (if needed), git commit and git push

### Step 5: Ping-pong

The first programmer should now take over.

1. Use Git pull to get the failing test from GitHub. See that it is failing on your computer, too
2. Update `romanNumerals`: `if (number === 2) return "II";`
3. See the test pass
4. Add another test for 3 ("III")

Instead of running Prettier manually, you may want to install the Prettier plugin in IntelliJ: File > Settings
and select Plugins. Then go to Languages & frameworks > JavaScript > Prettier

Commit and push your code to GitHub

### Step 6: Refactoring towards of logic

The other programmer should take over.

1. Copy the line for dealing with 2 to also deal with 3 - this is the fastest way to get the test to green
2. See the test run green. Now you can refactor.
3. Instead of having a list of "ifs", make a loop that adds one "I" to the resulting value. Changing the working code is
   called "refactoring"
4. If you do it correctly, you tests will still pass
5. You can now add a test for 4 ("IV"). If you do it correctly, you will get the message "AssertionError: expected 
   'IIII' to be 'IV'". This a satifying result as it is reflecting the current understanding in your code

Commit and push your code to GitHub and let your partner take over.

Continue creating new tests and pass control back and forth. If you do it smartly, your tests will probably continue
with 5, 6, then skip to 9, 10, 11 and then skip to 20

