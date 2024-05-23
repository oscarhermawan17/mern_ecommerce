How to Running this App?

#### Minimum node version, because in backend we are using ES module, not Node Module (import, require)

Node JS 12.19.0
We recommend using Node JS 14 / 16 LTS

#### Notes

We are using moongose as ODM, make sure you have mongodb
We are using Paypal API, make sure you have Paypal Demo

#### Create .env file

NODE_END=development
PORT=5000
MONGO_URI=
JWT_SECRET=

#### Run seeder (Mongoose DB must be already connect)

npm run data:import

#### Install BackEnd

npm i

#### Install FrontEnd

cd /frontend && npm i

#### Run FrontEnd and BackEnd

npm run dev

#### Check FrontEnd, is up?

http://localhost:3000/

#### Check BackEnd(Server), is up?

http://localhost:5000/

#### Don't use this command, this command just for reset all data

npm run data:destroy
