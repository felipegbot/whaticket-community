FROM node:18.12.1

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --frozen-lockfile --non-interactive --production=false --ignore-scripts

COPY . ./

RUN npm run build

CMD REACT_APP_ENV=production node server.js
