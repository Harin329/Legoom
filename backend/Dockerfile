FROM node:18
WORKDIR /code
COPY package*.json ./
RUN npm install --build-from-source --python=/usr/bin/python3
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]