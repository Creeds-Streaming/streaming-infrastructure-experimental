FROM node:12
WORKDIR /usr/src/app
COPY expressAuth/package.json ./
RUN npm install
COPY server.js ./
CMD ["npm", "start"]