FROM node:16.14-alpine

WORKDIR /app/back-end
 
COPY . .
RUN npm install
RUN npm run db:reset
CMD [ "npm", "run", "dev" ]
