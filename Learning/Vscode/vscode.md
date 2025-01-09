# for files icons theme

- install extension materal icon themes by phillip kief

# Live Server

- install live server by ritwick Dey

# Auto Save

- Save Typing by Michel Betancourt

# Git History

- git history by Don jayamanne

# Npm Intellisence

- npm Intellisense by christian Kohler


<!-- ========================== (For mearn and node.js) ============================= -->


# Prettier - Code formatter

- 

# ESLint (Linting tool to catch syntax errors and enforce coding standards.)




<!-- ========================== (JavaScript/Node.js Development
) ============================= -->

# Node.js Extension Pack

- A collection of extensions for Node.js development, including IntelliSense and snippets.

# Path IntelliSense

- Autocompletes file paths in your project.

# REST Client

- Allows testing APIs directly within VS Code.

# npm Intellisense

- Auto-imports Node.js modules from node_modules.



<!-- ========================== (React Development
) ============================= -->


# React Developer Tools

- Provides React snippets and autocompletion.

# React Icons IntelliSense

- Autocompletion for react-icons.

# React Native Tools

- Debugging tools for React Native projects.





<!-- ========================== (MongoDB
) ============================= --> 


# MongoDB for VS Code

- Connect to MongoDB, view data, and run queries directly from VS Code.



<!-- ========================== (Git & Version Control
) ============================= --> 


# GitLens

- Enhances Git capabilities with blame annotations, code authorship, and more.

# GitHub Copilot

- AI-powered code suggestions and autocompletions.



<!-- ========================== (Terminal & Debugging
) ============================= --> 


# Code Runner

- Run JavaScript, Node.js, or any script directly in VS Code.


# Debugger for Chrome

- Debug front-end JavaScript running in Google Chrome.


<!-- ========================== (Snippets
) ============================= --> 
'
# JavaScript (ES6) Code Snippets

- Includes ES6 code snippets for fast coding.


# React/Redux/GraphQL/React-Native Snippets

- Snippets for React, Redux, and GraphQL.


<!-- ========================== (Utility
) ============================= --> 

# DotENV

- Syntax highlighting for .env files.


# Bracket Pair Colorizer 2

- Colorizes matching brackets for better code navigation.

# Todo Tree

- Highlights TODO and FIXME comments in the code.


<!-- ========================== (Themes (Optional)
) ============================= --> 

# Dracula Official

- A dark, modern theme for developers.


# Material Icon Theme

- Adds icons for files and folders to make your workspace visually organized.


<!-- ========================== (Database & Backend Utilities)
) ============================= --> 

# REST Client

- Test API endpoints directly from VS Code.

<!-- ======================================= (Blob 1) =========================================-->

1. Prettier - Code Formatter
Purpose: Automatically formats your code for better readability.
Author: Prettier
Installation:
Open the Extensions Marketplace (Ctrl+Shift+X or Cmd+Shift+X).
Search for "Prettier - Code formatter" and install it.
Usage:
Set Prettier as the default formatter:
Go to File > Preferences > Settings.
Search for Default Formatter and choose Prettier.
Enable "Format on Save" to auto-format your files.
2. ESLint
Purpose: Identifies syntax errors and enforces coding standards.
Author: Microsoft
Installation:
Install the extension ESLint from the marketplace.
Run the command:
bash
Copy code
npm install eslint --save-dev
npx eslint --init
Usage:
ESLint will underline problematic code.
Fix errors using the lightbulb icon or run:
bash
Copy code
npx eslint . --fix
3. EditorConfig for VS Code
Purpose: Ensures consistent coding styles in projects with team members.
Author: EditorConfig
Installation:
Search and install "EditorConfig for VS Code".
Usage:
Create a .editorconfig file in the project root.
Add the following rules:
ini
Copy code
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
4. Node.js Extension Pack
Purpose: Bundles multiple extensions for Node.js development.
Author: Microsoft
Installation:
Install the "Node.js Extension Pack".
Usage:
IntelliSense and snippets for Node.js APIs.
Automatically imports and autocompletes require() or import statements.
5. Path IntelliSense
Purpose: Autocompletes file paths.
Author: Christian Kohler
Installation:
Install "Path IntelliSense".
Usage:
Start typing a file path in your project, and it will suggest completions.
6. REST Client
Purpose: Test APIs directly in VS Code.
Author: Huachao Mao
Installation:
Search for "REST Client" and install it.
Usage:
Create a .http file.
Write an API request, e.g.,
http
Copy code
GET https://jsonplaceholder.typicode.com/posts
Click Send Request.
7. npm Intellisense
Purpose: Autocompletes node_modules imports.
Author: Christian Kohler
Installation:
Install "npm Intellisense".
Usage:
Start typing a module name in import or require and get suggestions.
8. MongoDB for VS Code
Purpose: Connect to MongoDB and query databases.
Author: MongoDB
Installation:
Install "MongoDB for VS Code".
Usage:
Open the MongoDB tab in the Activity Bar.
Add a connection string to connect to your MongoDB server.
9. GitLens
Purpose: Enhanced Git capabilities.
Author: GitKraken
Installation:
Install "GitLens".
Usage:
View Git history and blame for any line in the editor.
Access commands via the Source Control view.
10. Bracket Pair Colorizer 2
Purpose: Highlights matching brackets for better navigation.
Author: CoenraadS
Installation:
Install "Bracket Pair Colorizer 2".
Usage:
Matching brackets are automatically colorized.
11. React Developer Tools
Purpose: Provides React snippets and autocompletion.
Author: EQuimper
Installation:
Install "React Developer Tools".
Usage:
Start typing React component names or hooks, and it will suggest snippets.
12. Styled Components
Purpose: Syntax highlighting for styled-components.
Author: Styled Components
Installation:
Install "Styled Components".
Usage:
Open files using styled-components, and you’ll see syntax highlighting.
13. REST Client
Purpose: Test API endpoints directly.
Author: Huachao Mao
Installation:
Install "REST Client".
Usage:
Open a .http file, type an API request, and click Send Request.
14. DotENV
Purpose: Syntax highlighting for .env files.
Author: mikestead
Installation:
Install "DotENV".
Usage:
Open .env files, and variables will be highlighted.
15. Dracula Official
Purpose: A dark, modern theme for developers.
Author: Dracula Theme
Installation:
Install "Dracula Official".
Usage:
Set it as your theme via File > Preferences > Color Theme.




<!-- ======================================= (Blob 2) =========================================-->

1. Prettier - Code Formatter
File to Use: Any .js, .jsx, .ts, or .json file.
Where to Configure: In your project root folder, create a .prettierrc file or use settings.json in VS Code.
Commands to Run: None, Prettier runs automatically.
Usage Steps:
Configure Prettier:
Create a .prettierrc file in your project folder:
json
Copy code
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
Enable Format on Save:
Go to File > Preferences > Settings > Text Editor > Formatting and check "Format on Save."
Run Prettier: Save your file, and it formats automatically.
2. ESLint
File to Use: JavaScript or TypeScript files (.js, .jsx, .ts, .tsx).
Where to Configure: Root folder, create an .eslintrc.json file.
Commands to Run:
bash
Copy code
npx eslint your-file.js
Usage Steps:
Initialize ESLint: Run:
bash
Copy code
npx eslint --init
Fix Errors Automatically: Run:
bash
Copy code
npx eslint . --fix
Live Linting: Open a JavaScript file in VS Code, and ESLint will underline problematic code.
3. EditorConfig
File to Use: Any source file in your project.
Where to Configure: Root folder, .editorconfig file.
Commands to Run: None.
Usage Steps:
Create a .editorconfig file in your project folder:
ini
Copy code
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
Open any file, and VS Code will automatically adjust settings like indentation.
4. Node.js Extension Pack
Files to Use: .js, .json, or .env files.
Where to Execute Commands: Terminal in VS Code.
Commands to Run:
Install dependencies:
bash
Copy code
npm install
Usage Steps:
Use IntelliSense for Node.js APIs.
Autocomplete for require() or import statements.
5. Path IntelliSense
Files to Use: Any file where paths are referenced (.js, .jsx, .css).
Where to Use: VS Code editor.
Commands to Run: None.
Usage Steps:
Start typing a relative path (e.g., ./src/components/...), and the extension will suggest completions.
Navigate folders quickly without manually typing paths.
6. REST Client
Files to Use: .http or .rest.
Where to Execute: Directly in VS Code editor.
Commands to Run: None.
Usage Steps:
Create a file named test.http.
Write an API request:
http
Copy code
GET https://jsonplaceholder.typicode.com/posts
Click Send Request above the line. Results will show in a new tab.
7. npm Intellisense
Files to Use: JavaScript files importing npm packages.
Where to Use: VS Code editor.
Commands to Run: None.
Usage Steps:
Start typing an import statement, e.g., import express from '', and it will suggest available npm modules.
8. MongoDB for VS Code
Files to Use: MongoDB queries (.js, .json).
Where to Execute: MongoDB Explorer in VS Code.
Commands to Run: None for setup, but you can run queries in the Explorer.
Usage Steps:
Open the MongoDB tab from the Activity Bar.
Add your MongoDB URI in the connection dialog.
Browse collections and run queries.
9. GitLens
Files to Use: Any file in a Git-tracked repository.
Where to Use: Source Control sidebar or in the editor.
Commands to Run: None.
Usage Steps:
Open a file.
Hover over any line to see the last commit that changed it.
Use the Source Control tab to view the full history.
10. Bracket Pair Colorizer 2
Files to Use: Code files with nested brackets (.js, .jsx, .css).
Where to Use: Directly in the editor.
Commands to Run: None.
Usage Steps:
Open any file with brackets.
The extension will colorize matching brackets automatically.
11. React Developer Tools
Files to Use: React components (.jsx, .tsx).
Where to Execute Commands: None required; used in editor.
Usage Steps:
Start typing useState, useEffect, or a React component name, and the extension will provide autocomplete options.
12. Styled Components
Files to Use: React files using styled-components (.jsx, .tsx).
Where to Use: Directly in the editor.
Commands to Run: None.
Usage Steps:
Open a file using styled-components.
Syntax highlighting will be applied automatically.
13. DotENV
Files to Use: .env.
Where to Configure: Root folder of your project.
Commands to Run: None.
Usage Steps:
Open your .env file.
Environment variables will be highlighted for easy readability.
14. Dracula Official
Files to Use: All files.
Where to Configure: VS Code settings.
Commands to Run: None.
Usage Steps:
Go to File > Preferences > Color Theme.
Select Dracula Official.