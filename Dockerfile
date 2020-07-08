FROM node:12.17.0-slim

WORKDIR /usr/client

COPY ["package.json", "package-lock.json", "/usr/client/"]

RUN npm install --porcelain

COPY ["*.*", "/usr/client/"]

EXPOSE 3000

CMD ["npm", "start"]
