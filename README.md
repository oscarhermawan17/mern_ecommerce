## How to Running this App?

### Minimum node version, because in backend we are using ES module, not Node Module (import, require)
Node JS 12.19.0
We recommend using Node JS 14 / 16 LTS

### Notes
We are using moongose as ODM, make sure you have mongodb
We are using Paypal API, make sure you have Paypal Demo

### Create .env file
NODE_END=development
PORT=5000
MONGO_URI=mongodb+srv://something:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority&appName=cluster
JWT_SECRET=something
PAYPAL_CLIENT_ID=something

### Run seeder (Mongoose DB must be already connect)
<code>npm run data:import</code>

### Install BackEnd
<code>npm i</code>

### Install FrontEnd
<code>cd /frontend && npm i</code>

### Run FrontEnd and BackEnd
<code>npm run dev</code>

### Check FrontEnd, is up?
<code>http://localhost:3000/</code>

### Check BackEnd(Server), is up?
<code>http://localhost:5000/</code>

### Don't use this command, this command just for reset all data
<code>npm run data:destroy</code>
