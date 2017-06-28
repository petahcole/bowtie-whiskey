This is a simple React/Rails app. The React frontend consumes a Rails JSON api with whiskey data from a MySQL database.


To get the frontend running, clone the repo locally and run the following commands:

```
$ npm install
```

```
$ npm run start
```

To get the backend running:

```
$ rake db:migrate
$ rake db:seed
```

This will create your database locally.

```
$ rails server
```

This will spin up the rails server.

If MySQL asks for a username and password:

```
username: user
password: password
```
