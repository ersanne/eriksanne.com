FROM node:10

COPY ./ /app
WORKDIR /app
RUN npm install

EXPOSE 8082
CMD [ "npm", "start" ]