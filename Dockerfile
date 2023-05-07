FROM node

WORKDIR /client

COPY package.json .
RUN npm install --quiet

COPY . .