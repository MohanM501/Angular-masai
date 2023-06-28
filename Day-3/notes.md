# To Install Angular
  * npm install -g @angular/cli
  (250MB file downloaded)

  * ng new heloworld (To create a new project)
  * cd heloworld
  * ng serve 

  (would you like to share pesuodnymous usage data about this project with the angular Team at Google - No)
  (Would you like to enable autocompletion? This will set up your terminal so pressing - Yes)

  - Folder structure
  editorconfig- to make things uniform (like size,font etc) across all the platforms;
  "outDir": "./dist/out-tsc", When you create build file(production time);

  In angular.json
  - "prefix": "app", // client like google,dell for this application ; its for name spacing (in angular same name components we create with namespacing using the prefix)

  -  "assets": [
              "src/favicon.ico",
              "src/assets"            
               // This assets is for storing images in folder; letting know the angular where it is locate otherwise angular wont' recongize the images;
            ],
            "styles": [
              "src/styles.css"
              // This is to give the css file location
            ],
            "scripts": []
            // To link external js file

- ng new steps
- ng serve
- ng serve -o    /   ng serve --open
- ng generation application step1-binding
or
- ng g application step1-binding --routing=false --style=css

Eg: OLA CAB - user interface (one(separate) application(project)), cab driver interface, admin (backend) interface; Multiple projects (application) with same environment;

- ng serve --project=step1-binding
or 
- ng serve step1-binding

# Architecture of Angular

- One way data flow : Data flows only from parent to child unlike Angular1; (Similar to React but in react we can pass from child to parent also, by event bubling (function as props))

- Dependancy Injection: Resources are passed to components as and when it requires (like props in react)

- Custom Components;
- Directives: Adds to new functionalities to HTML elements that they never had;
- Templates: are separate from component.

# Building Blocks of Angular
- Modules
- Components
- Services
- Pipe
- Directive
- Routes

