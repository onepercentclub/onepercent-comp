# Frontend development setup guide

## Text editor

### Atom

You can use Atom text editor, it can be downloaded from: https://atom.io/

### Sublime

You can use Sublime text editor, it can be downloaded from: https://www.sublimetext.com/

### Brackets

You can use Brackets text editor, it can be downloaded from: https://www.brackets.io/

## Code rules

### Editorconfig

We use the file `.editorconfig` for maintaining of code rules like spaces and tabs. To unify this we use a editor plugin which is avalible for a lot of different editors. The plugin itself is called 'editorconfig'.
The .editorconfig file has to be in the project root which is in most cases ./reef/frontend for frontend development.

### Why?

We use this universal code rules for maintaining concistency within the code, to make the code more easy to work on and make it more editable by different developers.

## Editor linters

As a general linter plugin we use 'Linter'. The plugins we use for linter are 'linter-htmlhint', 'linter-handlebars', 'Linter-sass-lint' and 'linter-jshint'

### HTML / Handlebars (linter-htmlhint, linter-handlebars)

We use the 'Linter Handlebars' in our porjects. We use default settings.

### Css / SCSS (Linter-scss-lint)

We use 'Linter SCSS' in our projects. The setings file `scss-lint.yml` needs to be in the root of the frontend directory. 
`./reef/frontend`

#### Css Comb

We use Css comb to  organise our css properties bij using the 'CSS comb plugin'. It is avalible for Atom, Brackets and Sublime.

### Javascript (Linter jshint)

We use 'Linter jshint'. The settings file .jshintrc needs to be in the root of the frontend directory. `./reef/frontend`
