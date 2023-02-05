Steps to run and test the app:

1. Cloning the Repository and Installing Node Modules
- Clone the repository to your local machine
- Run the command `npm install` to install all the necessary node modules.

2. Setting up the Environment Variable
- Create a `.env` file in the root directory of your project.
- Add the following line to the `.env` file:
  DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.wel4gxd.mongodb.net/test
  Replace `<username>` and `<password>` with your actual MongoDB connection credentials.

3. Running the App
- Run the command `npm run start` to start the app.
- The app will be running on `http://localhost:3000`.

4. Login the User
- Make a POST request to `http://localhost:3000/user/login` and add the following header:
  x-user-email: [user's email id]
- This will create a hash token for the user using its email, if they are already present in the database, using the formula:
  crypto.createHash('sha256').update(user.email).digest('hex')
- The user is now logged in.

5. Running the Test Cases
- Run the command `npm run test` to run all the test cases for the app.
