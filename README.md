<h2>Suwariyomi Source Base</h2>
<h4><code>thank you for your contributions!</code></h4>
<h2> CURRENT VERSION: <b>~0.8.4</b></h2>
This is the base to make a custom source for the Suwariyomi
application. In the unlikely case that this may be out of date, please read through the Suwariyomi source to find accurate type explanations.
<br/><br/>
<h2>Get Started</h2>

1. Clone this repository by doing `git clone https://github.com/Nowaaru/suwariyomi-source-base.git`
2. Then, enter the directory by doing `cd suwariyomi-source-base` (or, whatever you named it to be)
3. Install all dependencies by running `npm install`.
4. Get coding!
5. When you're ready to see if everything works, test by running `npm test`.

<h2>Field Types</h2>
<h3>Checkbox</h3>

##### ⚠️ This only works on array-based options!

```json
{
  "fieldType": "checkbox",
  "writeTo": "test", // Writes to the `test` filter field
  "choices": [
    {
      "display": "Test",
      "value": "testvalue"
    }
  ]
}
```

<h3>Select</h3>

##### ⚠️ This only works on string-based options!

```json
{
  "fieldType": "select",
  "writeTo": "test", // Writes to the `test` filter field
  "choices": [
    {
      "label": "Test", // These are the names for the option itself.
      "value": "testvalue" // When selected, will change the field value to "testvalue".
    }
  ]
}
```

<h3>Checkbox3</h3>

##### ⚠️ This only works on **two** array-based options!

```json
{
  "fieldType": "checkbox3",
  "disallowedWriteTo": "testExcluded", // Writes to `test` filter field if toggled off
  "writeTo": "testIncluded", // Writes to the `test` filter field if toggled on
  "choices": [
    {
      "display": "Test",
      "value": "testvalue"
    }
  ]
}
```

<br/>
<h2>ADDENDUM</h2>

The code in your <code>main.js</code> file are commented, and you can run tests using <code>npm test</code>. Thank you again for your contributions!
