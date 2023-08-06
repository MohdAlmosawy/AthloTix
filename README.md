# SEI Project 2: AthloTix - Your Ticket to Success

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Planning and Design](#planning-and-design)
- [Development](#development)
- [Testing and Bug Fixing](#testing-and-bug-fixing)
- [Coding Approach and Techniques](#coding-approach-and-techniques)
- [Coding Standards and Contribution Guidelines](#coding-standards-and-contribution-guidelines)
- [Summary](#summary)
- [Contact](#contact)

## Project Overview

AthloTix is a comprehensive ticketing system designed for the Bahrain Athletics Association. This web application serves as a powerful tool for efficient communication and management between athletes and the association's management team. With the aim of streamlining the handling of inquiries, requests, and issue reporting within the athletics community, AthloTix provides a user-friendly platform that enhances user engagement, accelerates issue resolution, and offers a seamless experience to all stakeholders involved.

Jump to: [Table of Contents](#table-of-contents)
## Features

- User authentication and authorization for athletes and management personnel.
- Creation and tracking of tickets for inquiries, requests, and issues.
- Real-time status updates and history tracking for efficient monitoring.
- Comment system for seamless communication between users.
- Kanban methodology for effective task management.
- Responsive design for optimal user experience across devices.

Jump to: [Table of Contents](#table-of-contents)
## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, EJS (View Templating)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose (Object Modeling)
- **Authentication**: Passport.js

Jump to: [Table of Contents](#table-of-contents)
## Getting Started

- [Installation](#installation)
- [Usage](#usage)

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

### Usage

1. Configure your MongoDB connection in `config/database.js`.
2. Run the application using `npm start`.
3. Access the application in your browser at `http://localhost:3000`.

## User Manual

# [Managing AthloTix: A Step-by-Step Navigation](https://app.tango.us/app/workflow/ca22e52f-7002-4544-a2a5-311012e29486?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)

__Creation Date:__ August 6, 2023  
__Created By:__ Mohd Almosawy  
[View most recent version on Tango.us](https://app.tango.us/app/workflow/ca22e52f-7002-4544-a2a5-311012e29486?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)



***




## # [AthloTix - Bahrain Athletic Association Support Ticketing System](http://localhost:3000/)


### 1. AthloTix Login page
![Step 1 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/41ac5e5a-d3ed-46b6-866b-70b475921538/91028369-8431-4a4a-9075-37b7bae51b3d.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0029&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=2&mark-y=2&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTk3Jmg9ODcxJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 2. Log in using  your Google Account
![Step 2 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/c304bbf3-76af-449a-8ea6-1db815f1fcc3/aa38fcaf-a97e-482f-ae03-223885de3ef6.png?crop=focalpoint&fit=crop&fp-x=0.1668&fp-y=0.4096&fp-z=2.4636&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=337&mark-y=411&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTMmaD01MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 3. As a manager you can see all tickets
![Step 3 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/fe52f67a-4dcb-45ec-812f-335f2a914376/8b6a6515-11da-48a8-a9ca-e381b523dae1.png?crop=focalpoint&fit=crop&fp-x=0.5241&fp-y=0.5973&fp-z=1.1167&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=38&mark-y=165&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTI1Jmg9NjMyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 4. as a manager you will have a button to show all users
![Step 4 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/ce24cb76-3968-47dc-9019-581794ab85d5/00b70eea-a3e5-46c2-b202-8e6c46351660.png?crop=focalpoint&fit=crop&fp-x=0.0375&fp-y=0.1877&fp-z=2.7088&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=9&mark-y=365&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMjUmaD0xNDUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 5. as a manager you can see all users list
![Step 5 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/db813a0b-5229-48a7-b404-987ad47f911e/ee90278b-7a1f-4e2d-be0f-cc046995b3b3.png?crop=focalpoint&fit=crop&fp-x=0.5241&fp-y=0.6512&fp-z=1.1167&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=38&mark-y=238&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTI1Jmg9NTkzJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 6. as a manager you can click on this icon
![Step 6 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/40ea2be7-7e82-4188-b421-3d24f52096c5/98bee2ad-6847-4cf0-b65b-b9d821c41df1.png?crop=focalpoint&fit=crop&fp-x=0.0375&fp-y=0.2451&fp-z=2.7088&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=9&mark-y=365&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMjUmaD0xNDUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 7. or by clicking on this button
![Step 7 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/c949a001-3487-4a93-bb2b-3a8811c1d7a2/9cbf62b8-c45d-4d43-9703-d2bef2ca6713.png?crop=focalpoint&fit=crop&fp-x=0.8743&fp-y=0.3123&fp-z=2.8947&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=637&mark-y=380&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNTMmaD0xMTUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 8. as a manager you can create a new user
![Step 8 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/d6ca2aa1-53b1-45a1-9997-2408cdff5104/98b3600a-84f9-45dc-be8b-06820365a9cb.png?crop=focalpoint&fit=crop&fp-x=0.5241&fp-y=0.4249&fp-z=1.0903&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=23&mark-y=173&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTU1Jmg9NDY2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 9. when login as a user you can see all of your tickets
![Step 9 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/f5252aa4-616f-4236-8639-c816ccb0b7e0/1bb9321d-0ce4-4a1c-a0bf-4d877ba20e69.png?crop=focalpoint&fit=crop&fp-x=0.5263&fp-y=0.3671&fp-z=1.1025&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=27&mark-y=332&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTQ3Jmg9NDUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 10. as a user you can create a ticket
![Step 10 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/5bd6d6fd-7e41-4a33-969e-4b75460de775/18e61f19-1492-47b9-ad27-07f72c91fa96.png?crop=focalpoint&fit=crop&fp-x=0.9049&fp-y=0.2223&fp-z=2.8947&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=735&mark-y=380&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNzAmaD0xMTUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 11. by filling up this forum
![Step 11 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/f1652f11-3739-433b-bf5f-45136339ff65/626c84ca-6e2d-439f-a769-fa9ae047b695.png?crop=focalpoint&fit=crop&fp-x=0.5241&fp-y=0.5124&fp-z=1.0539&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=2&mark-y=29&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTk2Jmg9ODE3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 12. from your ticket dashboard
![Step 12 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/8e45d2fa-d20d-4c2e-97dd-bfed04e8991b/d9e24624-0c72-4bf6-ae89-d77272c27b6a.png?crop=focalpoint&fit=crop&fp-x=0.5263&fp-y=0.3671&fp-z=1.1025&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=27&mark-y=332&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTQ3Jmg9NDUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 13. Click on Show Details
![Step 13 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/9b429818-e0d6-4fdf-99ea-260786a0a7de/de08612e-1d91-4022-9500-591830ba16e5.png?crop=focalpoint&fit=crop&fp-x=0.8375&fp-y=0.3666&fp-z=3.0704&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=481&mark-y=403&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDImaD02OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 14. to see a current ticket details
![Step 14 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/43853122-f9c3-4023-adf7-c6d932002995/ef7d101c-d542-4cfc-ba45-7d1ff59b5f4d.png?crop=focalpoint&fit=crop&fp-x=0.5184&fp-y=0.4298&fp-z=1.0405&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1&mark-y=48&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTk3Jmg9Njg3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 15. any user can click on his picture
![Step 15 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/dc3b001b-b38a-431b-aeef-8aee650e286b/2f55b04e-7757-44a8-bfc3-14576ad096e5.png?crop=focalpoint&fit=crop&fp-x=0.9301&fp-y=0.0272&fp-z=2.9712&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=745&mark-y=23&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTEmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 16. and navigate to his profile page
![Step 16 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/4544a292-dc39-425b-be50-ce2484f3ca14/a0fe6673-f8a8-4a76-9a9d-ff747ad12c6f.png?crop=focalpoint&fit=crop&fp-x=0.9409&fp-y=0.0771&fp-z=3.0336&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=814&mark-y=165&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNDEmaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 17. Click on Mohd Almosawy…
![Step 17 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/b6526632-aa23-4f29-b6f8-e354d8a40605/10540597-e786-4041-8918-e40795fa0804.png?crop=focalpoint&fit=crop&fp-x=0.5184&fp-y=0.3202&fp-z=1.0405&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1&mark-y=48&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTk3Jmg9NDg4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 18. and also you can logout from the system
![Step 18 screenshot](https://images.tango.us/workflows/ca22e52f-7002-4544-a2a5-311012e29486/steps/110ce169-1cea-4e9b-b310-ac3425287d21/cb5b80e8-b0ee-4766-bd9d-924a5719e60f.png?crop=focalpoint&fit=crop&fp-x=0.9409&fp-y=0.1018&fp-z=3.0336&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=814&mark-y=231&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNDEmaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

<br/>

***
Created with [Tango.us](https://tango.us?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)

## Planning and Design

Before starting the development process for AthloTix, we carefully planned and designed the application to ensure that it met the needs of our target audience. This involved the following steps:


1. [Identifying Requirements](#identifying-requirements)
2. [Creating User Stories](#creating-user-stories)
3. [Wireframing and Prototyping](#wireframing-and-prototyping)
4. [Architecture and Data Modeling](#architecture-and-data-modeling)

### Identifying Requirements

We started by identifying the requirements for the project, including determining the target audience, defining core features and functionality, and outlining any specific technical requirements. Our target audience consists of coaches and trainers who need to track athlete performance data. Core features include CRUD operations for athlete records.

### Creating User Stories

User stories were created to understand how users would interact with the application. Key use cases were defined, potential pain points were identified, and an intuitive user interface was designed. User actions such as adding, editing, searching, and deleting athletes were mapped out.

### Wireframing and Prototyping

Wireframes and prototypes were developed to visualize the user interface. This step allowed us to make necessary design changes before proceeding to development. A clean and user-friendly interface was designed to facilitate seamless user interactions.

### Architecture and Data Modeling

The application's architecture and data model were carefully planned. Node.js and Express were chosen for the server, MongoDB for the database. The data model includes athlete details such as name, age, gender, sport, and performance data.

Jump to: [Table of Contents](#table-of-contents)
## Development

The development of AthloTix involved the following steps:

- [Environment Setup](#environment-setup)
- [Server-Side Code](#server-side-code)
- [User Interface](#user-interface)
- [Integration](#integration)

### Environment Setup

The development environment was set up by installing Node.js, Express, and MongoDB. A Git repository was established for code management, enabling effective collaboration.

### Server-Side Code

Server-side code was written, including routes and handlers for CRUD operations. Connection to the MongoDB database and input validation were implemented to ensure data integrity.

### User Interface

Concurrently with server-side development, the user interface was created using HTML, CSS, and Bootstrap. The goal was to design a modern and intuitive interface.

### Integration

Server-side code and the user interface were integrated using JavaScript and jQuery. This integration facilitated real-time updates and seamless user interactions.

Jump to: [Table of Contents](#table-of-contents)
## Testing and Bug Fixing

Testing and bug fixing were essential throughout the development process:

- [Manual Testing](#manual-testing)
- [Bug Fixing](#bug-fixing)
### Manual Testing

Manual testing was conducted to ensure proper functioning and responsiveness across devices and browsers. Security features and user interactions were thoroughly tested.

### Bug Fixing

Bugs and issues identified during testing were tracked and prioritized. Debugging tools and manual testing were used to resolve these issues promptly.

By prioritizing testing and bug fixing, we created a reliable, secure, and user-friendly CRUD application.

Jump to: [Table of Contents](#table-of-contents)

## Coding Approach and Techniques

- [Technical Analysis](#technical-analysis)
  - [User Schema](#user-schema)
  - [Controllers](#controllers)
  - [User Authentication and Authorization](#user-authentication-and-authorization)
  - [Database Interaction with Mongoose](#database-interaction-with-mongoose)
  - [Real-time Status Updates and History Tracking](#real-time-status-updates-and-history-tracking)
  - [Comment System](#comment-system)
  - [Responsive Design](#responsive-design)
- [Additional Technical Aspects](#additional-technical-aspects)
  - [RESTful API Design](#restful-api-design)
  - [Error Handling and Validation](#error-handling-and-validation)
  - [Data Security and Privacy](#data-security-and-privacy)
  - [Modular Codebase](#modular-codebase)
  - [Version Control and Collaboration](#version-control-and-collaboration)
  - [Continuous Integration and Deployment](#continuous-integration-and-deployment)
  - [Documentation](#documentation)

### Technical Analysis

#### User Schema

The project utilizes a user schema that captures user details, including personal information, role (athlete/manager), and authentication data. Passport.js is integrated for secure authentication and authorization.

#### Controllers

Controllers manage user-related and ticket-related operations. The `users.js` controller handles CRUD operations for users, while the `tickets.js` controller manages ticket creation, status updates, and comment addition.

#### User Authentication and Authorization

Passport.js is employed for user authentication, enabling secure login and session management. Different user roles (athlete/manager) are distinguished to grant role-based access.

#### Database Interaction with Mongoose

Mongoose simplifies database operations, providing data validation, modeling, and queries. It ensures data integrity by enforcing predefined rules.

Jump to: [Table of Contents](#table-of-contents)
#### Real-time Status Updates and History Tracking

Ticket status changes are recorded using the `history` array in the ticket schema. Each status change is timestamped and associated with the responsible user.

#### Comment System

A comment system allows users to collaborate on tickets. Comments are associated with specific tickets and store user details and timestamps.

#### Responsive Design

The frontend is designed responsively using HTML, CSS, JavaScript, and EJS. This ensures a consistent user experience across different devices.

Jump to: [Table of Contents](#table-of-contents)
### Additional Technical Aspects

#### RESTful API Design

AthloTix follows RESTful API design principles, ensuring logical and consistent endpoint naming, HTTP methods, and resource representations.

#### Error Handling and Validation

Custom error handling middleware is implemented to provide meaningful error messages and enhance the user experience.

#### Data Security and Privacy

User passwords are hashed and stored securely. Sensitive user data is protected through authentication and authorization mechanisms.

Jump to: [Table of Contents](#table-of-contents)
#### Modular Codebase

The project is structured using modular design principles, promoting code reusability and maintainability.

#### Version Control and Collaboration

Git and GitHub are used for version control, enabling effective collaboration, branch management, and conflict resolution.

#### Continuous Integration and Deployment

The project utilizes continuous integration tools to automate testing and deployment processes, ensuring code quality and reliability.

#### Documentation

Codebase documentation is provided using comments and README files, promoting code understanding and onboarding for new developers.

Jump to: [Table of Contents](#table-of-contents)
## Coding Standards and Contribution Guidelines

We welcome contributions from the community to enhance AthloTix. To ensure a smooth and collaborative development process, please adhere to the following coding standards and guidelines:

1. **Code Consistency**: Maintain consistent coding style by following the established conventions throughout the codebase.

2. **Modularization**: Encourage modular code design to improve code maintainability and readability.

3. **Descriptive Naming**: Use descriptive variable and function names that convey their purpose and functionality.

4. **Comments**: Provide clear and concise comments to explain complex logic, algorithms, and important sections of the code.

5. **Error Handling**: Implement robust error handling to gracefully handle exceptions and provide meaningful error messages to users.

6. **Testing**: Write unit tests for new functionality and ensure existing tests are not broken.

7. **Documentation**: Update the README and inline comments as needed to reflect changes and additions.

8. **Pull Requests**: When submitting a pull request, provide a clear description of the changes made and reference any related issues.

9. **Collaboration**: Maintain open and respectful communication within the development team and the broader community.

10. **Security**: Prioritize data security and user privacy in all code contributions.

We appreciate your dedication to maintaining code quality and fostering a collaborative environment. Let's work together to ensure AthloTix continues to thrive!

Jump to: [Table of Contents](#table-of-contents)
## Summary

AthloTix exemplifies the team's expertise in web development, collaboration, and application of industry best practices. The project demonstrates the successful integration of various technologies and techniques to create an efficient, secure, and user-friendly ticketing system for the Bahrain Athletics Association.


## Contact

If you have any questions, comments, or feedback about the AthloTix CRUD application, please feel free to contact us. You can reach us by email at mohd.s.aqeel@gmail.com, or by submitting a GitHub issue to the AthloTix CRUD repository.

We are always looking for ways to improve the AthloTix CRUD application, and we value input from our users. If you have a suggestion for a new feature or improvement, please let us know.

If you are interested in contributing to the AthloTix CRUD application, please see the Contributing guide for more information on how to get involved. We welcome contributions from all members of the community, and we are committed to maintaining a welcoming and inclusive environment for all contributors.

Thank you for using the AthloTix CRUD application, and we look forward to hearing from you!

Jump to: [Table of Contents](#table-of-contents)