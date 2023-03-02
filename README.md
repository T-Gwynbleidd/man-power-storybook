# Introduction 
Manpower Group project Talent Solutons.
This is a React-based component library built in line with the style-guide and designs provided by UNRVLD.

# Getting Started
Ensure you have Node v14.21.3 and yarn installed.

# Build and Test
## Setup project
Install dependencies:
`yarn`

## Development / Testing build
To view the component library in StorybookJS:
`yarn storybook`

It will run on http://localhost:6006/

## Production build
To build the library for use in a project:
`yarn rollup`

# Usage
To use the production library in a project:  

1. **Extract the library**  
Extract the dist folder from the build to a location on your machine.  
If you are using a npm package repository then skip this step.  

2. **Install the library**  
From local (relative path): `yarn add file:..\relative\path\to\library`  
Or from local (absolute path): `yarn add C:\absolute\path\to\library`  
Or from npm package repository.  

3. **Include component imports**  

```
    in MyComponent.js
    ...
    import * as TalentSolutions from 'manpowergroup-talent-solutions';
    ...

    ...
    return (
        <TalentSolutions.Button onClick={() => {}}>
            Test button text
        </TalentSolutions.Button>
    );
```

4. **Include CSS imports**  
A global CSS file should be included in every page to ensure that all styling and static assets are loaded.

```
    in index.js
    ...
    import 'manpowergroup-talent-solutions/index.css';
    ...
```

5. **Update the library**  
To update the library in the project, re-extract the dist folder and re-run the `yarn add {...path...}` command used in step 2.

## Additional notes
The library is not currently optimised, and the above process may need to be revised slightly to more efficiently bundle files and static assets.
