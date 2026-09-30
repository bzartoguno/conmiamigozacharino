# INFO3300 Annotated Study Copy

This folder is a copy of your uploaded INFO3300 code with short `TIP` comments added above
important lines. The original logic was intentionally left alone so you can study the code you
actually wrote and used in class.

## High-value patterns that repeat in your files

### 1. Forms: `action`, `method`, and `name`
- `action="results.php"` tells the browser which file gets the form.
- `method="get"` means PHP reads the values with `INPUT_GET`.
- `method="post"` means PHP reads the values with `INPUT_POST`.
- An input's `name="..."` must match the quoted name used by `filter_input()`.

### 2. `filter_input()`
Your assignments use it to read form, cookie, and URL data.
Examples in your code include GET forms, POST forms, cookies, integer validation,
email validation, and receiving arrays from checkboxes/multi-selects.

### 3. Arrays
You use arrays for:
- Random fortunes.
- Profession scores.
- Lists of checkbox / multi-select values.
- Validation errors and user data.
- Arrays of objects.

Remember: the first array position is index `0`.

### 4. `random_int()`
Used to choose a random array position. A common pattern is:

`random_int(0, count($array) - 1)`

The `- 1` matters because an array with 3 items has indexes `0, 1, 2`.

### 5. Sessions
Your later assignments use:
- `session_start()` before working with session data.
- `$_SESSION['name'] = $value;` to save data between pages.
- `isset($_SESSION['name'])` to make sure required data exists.
- `session_destroy()` when logging out.

### 6. Redirects
`header('Location: page.php');` sends the browser to another page.
Your validation and login code use redirects a lot.
A redirect should happen before normal HTML/output is sent.

### 7. Cookies
Your login work uses `setcookie()` to keep login information between visits.
Setting the expiration date in the past deletes a cookie.

### 8. Validation
Your waiver code shows the common pattern:
1. Read a value.
2. Test it with `if / elseif`.
3. Add an error if it is invalid.
4. Redirect back to the form.
5. Refill the user's old values and display the errors.

### 9. Classes and objects
Assignment 5/6 introduces:
- `class` = blueprint.
- public properties = object data.
- `__construct()` = runs when the object is created.
- getters = return stored values.
- setters = change stored values.
- `__toString()` = controls what appears when the object is echoed.
- `new ClassName(...)` = creates an object.

### 10. Loops
Your files use:
- `for` when counting/indexing.
- `foreach` when visiting every item in an array.
- `while` when repeating until a condition changes.

## Best way to use this study copy
Open the annotated version beside a blank practice folder. Try to recreate a page from memory,
then compare your work to the comments only when you get stuck. Focus on understanding the
flow between pages rather than memorizing every line.
