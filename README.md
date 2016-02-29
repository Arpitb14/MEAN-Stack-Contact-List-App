# MEAN RESTful API - Single Page App - Contact List
A MEAN stack contact list single page application
![MEAN Stack](https://raw.githubusercontent.com/miztiik/MEAN-Stack-Contact-List-App/master/images-for-readme/mean-stack-tutorial.jpg)
Format: ![MEAN Stack Logo](https://raw.githubusercontent.com/miztiik/MEAN-Stack-Contact-List-App/master/images-for-readme/mean-stack-tutorial.jpg)

This repo contains the code for a RESTful API Contact List App that was built using the MEAN stack, This app assumes you have necessary expertise in reading and writing `node.js` apps. If not check out these [resources](https://github.com/ericdouglas/MEAN-Learning)

The key components are:

- **M**ongoDB from MongoLabs (Database)
- **E**xpressJS (Web Framework)
- **A**ngularJS (Front-end Framework)
- **N**odeJS (Application Server)


### Lets set up the environment
Copy or clone the repo to the directory from where you want to run the app

#### Install the dependancies
The necessary dependancies are added to the `package.json` file. To install them run, 

```
npm install -d
```

#### Setting up the database
We are using mongoose to set up the schema. The actual data itself is stored on Mongo DB from [MongoLabs](https://mongolab.com). You can have your db locally, This tutorial will use MongoLabs

You will need four attributes to setup the DB

- Database Name (*<Database-Name>*)
- DB Username (*<db-user-name>*)
- DB Password (*<db-user-password>*)
- DB Port (*<XXXX>*)

Set up your account(or setup your mongodb locally), Create a new database and user and password. It is not necessary to set up the collection, But if you want, go ahead.

These configs will be need to changed on file `./database/connect-to-database.js`, 
```
mongoose.connect("mongodb://<db-user-name>:<db-user-password>@dsXXXXX.mlab.com:<XXXX>/<Database-Name>");
```

#### Lets start the node server
The node server is configured to run on port `8081`. You can change it in `server.js`. The app is written to write out most of the `GET` & `POST` messages to console. You are welcome to disable them all.

If you are happy with everything, run
```
node server.js &
```

##### Contact List Running


