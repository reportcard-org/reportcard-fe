# ReportCard ✅ 

## Table of Contents
  - [Overview](#overview)
  - [Technologies](#technologies)
  - [Contributors](#contributors)
  - [Deployed Webpage](#deployed-page)
  - [Illustrations](#illustrations)
  - [Planning](#planning)
  - [Future Additions and Improvements](#future-additions-and-improvements)
  - [Project Spec](#project-spec)
  - [Set Up](#set-up)

## Overview

The effect that a classroom teacher has on a student is sometimes second only to a parent.
Nationwide, teachers salaries and work conditions should better reflect the value they provide to our lives. This application is designed to assist teachers in their search for school districts that might better meet their financial needs and provide better work conditions.

Login with a test email and password ( use your numbers 0-4, test_email0@email.test, Welcome2022 ), then provide an address to search for the nearest school district. Your Report Card will provide you with up-to-date, relevant information for educators about the district. You can save this district to your Favorites for later review. If you don't want to save any info or enter an email, you can continue as a guest. Thank you for using our application and for helping create a better future for our children.

Welcome to Report Card!

## Technologies
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![Vercel](https://user-images.githubusercontent.com/101746747/188785090-4abee495-4f46-4dba-b554-e16ded576297.png)
![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Contributors
- [Patrick Becker](https://github.com/PatrickGBecker) | [LinkedIn](https://www.linkedin.com/in/patrickgarrettbecker/)
- [Maia Cochran](https://github.com/Maia-Cochran) | [LinkedIn](https://www.linkedin.com/in/maiaecochran/)
- [Eddie Rodriguez](https://github.com/edjrodriguez) | [LinkedIn](https://www.linkedin.com/in/edward-rodriguez-1b497423b/)

## Deployed Page
You can view the deployed webpage [here](https://reportcard-8xtook7k8-report-card.vercel.app/)!

## Demo

View our demo [here](https://youtu.be/Ysel43sO-P4)!

## Planning
You can view our wireframe and planning process [here](https://www.figma.com/file/pBWCRc3bERq8ELucFixT3l/ReportCard-Wireframe).

## Lessons Learned
GraphQL was the most relevant piece of technology in the tech stack of our application. This was our team’s first experience building an application utilizing GraphQL. It was used to make queries and mutations to our back end GraphQL server. Our Back End team had four members. They hand crafted our GraphQL server leveraging various different RESTful APIs including National Center for Educational Statistics and a Python based Custom User database. Our team communicated consistently throughout the project about the different queries and mutations we needed from the Back End server to make for the Front End of the application. We leveraged the Apollo Client state management library for JavaScript in order to enable and manage both local and remote data with GraphQL. We also made use of built-in React Hooks from the Apollo Client library including the useQuery(), useLazyQuery(), and useMutation() hooks in order to manage the state of our application.

Mutations were by far the most challenging aspect of building this application. The first time that we made use of this was for adding a user’s favorite school districts for later viewing. Although this seems simple, certain aspects of it posed a challenge for my collaborators and I, such as getting the syntax correct for the mutation itself, setting up the useMutation() hook properly, and getting it connected to our Add to Favorites component. However, we were able to successfully get this functionality fully operational after some research and practice. 
## Set Up
1. Go to [this](https://github.com/camianderson/chefYeezy) repository and clone it. 
2. `cd` into the directory.
3. Run `npm i` in your terminal
4. Run `npm start`
6. Go to http://localhost:3000/ to view the site.

## Future Additions and Improvements
- Authentication for true login ability
- Map of location included on the District Info page

## Project Spec
Click [here](https://mod4.turing.edu/projects/capstone/index.html) for project specs, provided by [Turing School of Software and Design](https://turing.edu/).
