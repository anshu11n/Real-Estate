# Project Setup

## Enviroment Variables

Make a .env file in api folder and set all your environment variables.

A Demo .env file is shown below

DATABASE_URL= ""

JWT_SECRET_KEY = CzCsm/WPxcHgyjXhniW3FdzX/tgMUVYXTPQcxvcX15A=

CLIENT_URL = http://localhost:5173

## Cloudinary Details

Search for UploadWidget, you will find this component used in newPostPage.jsx and profileUpdatePage.jsx.

Now give your cloudinary details in place of uwConfig cloudName - ( you can simply make account on Cloudinary, from there in dashboard you can get your CloudName )

Run command:
npx prisma db push

All set now you can run 

## Run the Project:

Api: 
npm run start

Client:
npm run dev

Socket:
npm run start
