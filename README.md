# URL Parser

In this exercise, you will create a library that helps us parse URLs.

## Goals

- Start your first project using modern technologies from scratch.
- Create your first node package with _Yarn_. 🐱
- Set up a build tool with _Parcel_. 📦
- Get your first contact with ESModules and see the differences with CommonJS.
- Set up a testing environment with _Mocha_. ☕️
- Implement a library from written requirements, following TDD: writing tests first.

## Description

> A URL (Uniform Resource Locator) is a specific type of URI (Universal Resource Identifier). A URL normally locates an existing resource on the Internet. A URL is used when a web client makes a request to a server for a resource. – IBM

With them, we can access any resource on the Internet like web pages (an HTML index file), an image, a video, a CSS file, etc.

![URL schema; OmenBreeze; CC BY-SA 4.0](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/URI_syntax_diagram.svg/2136px-URI_syntax_diagram.svg.png)

For example, we have this URL, which loads a JS logo image.

```
https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=instagram
```

We can split it into different components:

- **Scheme** – `https`
- **Host** – `upload.wikimedia.org`
- **Port** – 80 (no explicit port in the URL; default to 80, it means web)
- **Path** – /wikipedia/commons/6/6a/JavaScript-logo.png
- **Query** – `utm_source=instagram`

## Requirements

Implement a library called URLScan to help developers get the different components of a URL. The library should be accessed with ESModules. This means:

```js
import URLScan from 'urlscan'
```

The library will expose a method `parse` that, given a string containing a URL, it will return an object with the different components of the URL as properties.

```js
URLScan.parse(
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=instagram'
)
/*
 * Returns:
 * {
 *   scheme: 'https',
 *   host: 'upload.wikimedia.org',
 *   port: 80,
 *   path: '/wikipedia/commons/6/6a/JavaScript-logo.png',
 *   query: 'utm_source=instagram',
 * }
 */
```

Take into consideration the following rules:

- In the example, some components are missing because they're missing in the URL string. Remember that you should return the user information or the fragment if present.
- The port defaults to 80, and it's listed as an attribute even if not present in the original URL string.
- The query in the example has one single key, but it can have several, joined by the ampersand character `&`. ie `utm_source=instagram&utm_campaign=feature%20launch`

The library should be fully tested. Here are some ideas on what you can try:

- Parsing the case of a string with all URL components.
- URL with some missing, optional components.
- The default value of the _port_ component.
- What happens if the string doesn't have a URL format? 😱 (No requirement here; choose the behavior of your library yourself).

Come up yourself with other success and failure tolerance tests!

## Steps

1. Fork and clone this repo.

2. Follow the instructions in the [Yarn Getting Started docs](https://classic.yarnpkg.com/en/docs/getting-started) to **set up your new yarn package**.

   > ☝️ You'll see a message in the Yarn docs that this guide is for yarn 1.x.x, and that there's a new version 2.0. For now, we'll omit it, as the classic version shares functionality with npm. There's always time to update.

3. Now it's time to install our **build system**. It will help us bundle all our js and other files into a package that other developers can use. Also, it offers excellent development features that we will see in detail later in the course.
   Although there are different options, like Webpack, we're going to use Parcel, as its zero-configuration feature makes it really easy for us to get started. Follow the instructions on their [Building a library with Parcel](https://parceljs.org/getting-started/library/) docs. Notice we're building a library and not a web app in this case.

   1. You can ignore the TypeScript section for now.
   2. When you're done with Parcel documentation, I want you to run a build (`yarn build`) and then go with your editor to the `dist` folder and inspect the generated code. Ugly, uh? Don't worry; it is only for machines to read.
      Can you tell the difference between `dist/main.js` and `diet/module.js`?
   3. Finally, I want you to add the property _type_ and set it to `"module"` in the `package.json` file. This will tell Parcel that we want to work exclusively with ESModules. Then run a build. Can you see what changed in the `dist` folder?
      We're leaving it like this for the rest of the exercise. We'll be working only with `import/export`.

4. Time to set up a **testing environment**.
   For that, we're going to go with Mocha. Other options are more modern, like Jest, which we will work with later, but for now, Mocha is simple and will offer us, newbies, the simplicity we need.
   There's a drawback, tho. The documentation is written in CommonJS, so we'll have to adapt it when trying the code they offer us.
   Go to the [Getting Started](https://mochajs.org/#getting-started) section and follow the instructions to run our first tests.

   1. Notice the test is written for testing `Array.indexOf`, it's just an example; we won't ever test a native function. We only test our code.

   2. This documentation uses [Node.js Assert](https://nodejs.org/api/assert.html#assert) as a function to check if a result is correct. You can check the documentation. For now, we only need the `equal` method.

      ```js
      assert.equal(actualValue, expectedValue, errorMessage)
      ```

   3. Implement a test for the add function you coded when following the Parcel documentation. Nothing fancy, just a success case. Run `yarn test` and see if it passes. If so, try to change the expected result to something wrong and see how a failing report is.

5. **Code the URLScan library**.

   1. Read and understand the requirements.
   2. Following a TDD approach, think and code the tests first.
   3. Run the tests and see how they're failing.
   4. Code the library and make the tests.

## Extra credit

- Create a method `build` for our library that takes the opposite direction: it takes an object with the different components and returns a string with the URL.

- Code a method `parseQuery` that, given a string containing the query, it gives back the object with the different properties.

  ```js
  URLScan.parseQuery('utm_source=instagram&utm_campaign=superuser')
  /*
   * Returns:
   * {
   *   utm_source: 'instagram',
   *   utm_campaign: 'superuser',
   * }
   */
  ```

  - Keep in mind that query params allow multiple entries with the same name. You should return an array.
    ```js
    URLScan.parseQuery('car=mercedes&car=jeep')
    /*
     * Returns:
     * {
     *   car: ['mercedes', 'jeep'],
     * }
     */
    ```
