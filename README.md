# Dynamic User Dashboard

## Goal
Demonstrate proficiency in Angular (7+) by creating an interactive user dashboard while
employing advanced features like state management frameworks, directives, and observables.
Emphasize proper styling, animations, and caching techniques. Usage of UI libraries like
Angular Material is permitted.


## Task Specifications:

Project Setup: 
Create a new Angular 7+ project using Angular CLI as the foundation.

Page Layout: 
Develop a page layout comprising a header and a horizontally centered, paginated users list.

Data Retrieval:
Utilize the HTTP endpoints:
Fetch user card data (including avatar image, first_name, last_name, and id) from https://reqres.in/api/users?page={page} for pagination.
Fetch details for a single user via https://reqres.in/api/users/{id}.

Navigation:
Enable click functionality on the user cards to navigate to a new page displaying
detailed information about the selected user.

Search Functionality:
Implement an instant search field within the header to search for users by ID without requiring a separate button. Display search results and allow navigation
to the user details page if the user exists.

User Details Page:
Include a back button on each individual user's page to navigate back to the main user list.

Caching Implementation:
Introduce caching mechanisms to avoid redundant HTTP requests, optimizing the application's performance.

User Experience Enhancements:
Display a loading bar to indicate pending network requests, ensuring a smoother
user experience during data retrieval.

Additional Considerations:

1. Employ state management frameworks like NgRx or Redux for efficient state handling.
2. Implement custom directives for improved UI interactions or functionalities.
3. Utilize observables from RxJS to manage asynchronous operations.
4. Apply proper styling and animations to enhance the user interface.
5. Ensure a well-documented and structured project codebase.


Submission Requirements:
Share the project via a Github/Gitlab link or provide a zipped project file that includes all
necessary files.


## Run Locally

```bash
git clone https://github.com/oghene-ella/dynamic_dashboard.git
```

Go to the project directory. you will see 2 folders

### For the Frontend
```bash
  cd user_dashboard
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
```

code scaffolding
- Run to generate a new component.

```bash
  Run `ng generate component component-name`. 
```

- Run to generate a new component, You can also use.

```bash
  Run `ng generate directive|pipe|service|class|guard|interface|enum|module`.
```

Run that command to build, The build artifacts will be stored in the `dist/` directory. 

```bash
    ng build`  
```

## Tech Stack
Angular JS



## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

[@oghene-ella](https://github.com/oghene-ella)


## Support

For support, email oghenekaro57@gmail.com.


