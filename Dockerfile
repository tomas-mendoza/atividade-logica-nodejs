FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "install", "-g", "npm@10.4.0"]
CMD ["npm", "run", "test"]