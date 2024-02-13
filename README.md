
# Tutorial 3

* *Date Created*: 13 February 2024
* *Last Modification Date*: 13 February 2024
* *Tutorials URL*: https://git.cs.dal.ca/anagpal/csci-5709-tutorials
* *GitLab URL*: https://git.cs.dal.ca/anagpal/csci-5709-tutorials/-/tree/main/Tutorial3
* *Github URL*: https://github.com/ashishnagpal2498/tutorial-3-profile-reg
* *Deployment Link*: https://tut-3-profile-reg.netlify.app/

## Authors

* [Ashish Nagpal](ashish.nagpal@dal.ca)

## Getting Started

To start with the project, I created a new sample react application using ```npx create-react-app .``` command. Following this I created my required components ``Profile`` and ``ProfileRegistration`` and used CSS to beautify the pages. Moreover I have installed [react-router-dom](https://www.npmjs.com/package/react-router-dom) to navigate between pages.

### Prerequisites

1. [React](https://legacy.reactjs.org/docs/getting-started.html/) - Web framework
2. [Npm](https://docs.npmjs.com//) - Dependency Management
3. [Node](https://nodejs.org/docs/latest/api/) - Javascript Runtime environment

### Installing

1. Clone the project repository

2. Go into the project directory and install the required dependency using ```npm install``` command.

3. Once the dependencies are installed, start the development server by ```npm start``` command.

4. Server will be running on port - 3000 [http://localhost:3000](http://localhost:3000). 

## Deployment

The deployment is made through Netlify. 
[![Netlify Status](https://api.netlify.com/api/v1/badges/d7925ac7-7968-42fd-86a8-68885baa9e02/deploy-status)](https://app.netlify.com/sites/tut-3-profile-reg/deploys)

## Sources Used

### Code 

### 1.  ProfileRegistration.js

*Lines 50 - 53*

```js
      if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(formData.password)) {
        newErrors.password = "Password should be alpha-numeric, at least 8 characters long and have atleast 1 special character ";
      }
```

The code above was created by adapting the code in [stackoverflow](https://stackoverflow.com/a/21456918) as shown below: 

```js
"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
```

- The code was used to have an understanding on regex.

- I used the code because I wanted to have a check on password that it should be 8 characters long with 1 special character and a number

- I used the regex expression in ``if `` statement to check the password along with ``.test`` inbuilt javascript method.

### 2.  ProfileRegistration.js

*Lines 72 - 78*

```js
navigate("/profile", {
          state: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
          },
        });
```

The code above was created by adapting the code in [dev.to](https://dev.to/raaynaldo/react-router-usehistory-uselocation-and-useparams-10cd) as shown below: 

```js
{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
```

- The code was used by studying about different options to pass information between pages in React.

- I used the code because I wanted to display the information of user in the profile page which is submitted by user on Profile Registration page. Since there is no backend yet, thus the information must be pass through navigation or stored on browser locally.

- I used the navigate method to pass the ``firstName lastName and email`` of the user to profile page.

## Acknowledgments
* I am grateful to the coding community for all of their hardwork in materials related to frontend development. The content provided served as a foundation for understanding and learning it's functionality and logic. 