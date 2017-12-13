# CSC583-Final
Create a `sign-in` application that runs on a mobile device, e.g., an iPad or an Android tablet that communicates with a back-end database.  This application is used as a kiosk device to collect information on visitors to a corporation.

## Action Plan

- [x] Nonfunctional analysis
- [x] Architecture design
- [ ] Implementation
- [ ] Testing
- [ ] Deployment

## Nonfunctional Requirements

### Visitor View

The application shall provide a form that visitors can use to sign in. The form shall include the following fields:

- Name
- Email 
- Telephone
- Company
- Official visit (checkbox)
- Escort required (checkbox)
- Escort name (if Escort is checked)

Upon the visitor selecting `submit`, the form shall be sent to a server and the visitor information shall be stored in a database. The application shall then be redirected to the `sign in` screen.

### Admin View

The application shall offer a password-protected admin view.  This view shall list all the data from the database as a table.

## Architecture design

This application uses the MEVN (MongoDB, Express.js, VueJS, Node.js) stack. MongoDB is a NoSQL database, Express.js is a server framework that is used with Node.js, and VueJS is a front-end web application framework. All four components of the stack are JavaScript-based.

## Build Instructions

Create .env file with the following information and save it in your project folder:

```
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/toro-net
APP_URL=http://127.0.0.1:3000/
```

Install dependencies (mongo, node, npm packages).  
```
bash dev-env.sh
```

Install node packages with npm.  
```
npm install
``` 

Build and watch for changes.  
```
npm run serve
```

Open a new terminal window and navigate to toro-net.  
Run mongo as a service.  
```
sudo service mongod start
```

Run the backend using nodemon  
```
./node_modules/nodemon/bin/nodemon.js server.js
```

Open http://localhost:3000 in any web browser.



