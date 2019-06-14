# select the node image from the docker repository
FROM node:10-alpine

# set the working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy
COPY . .

# install npm modules
RUN npm install

# expose our port to run our service
EXPOSE 3000

# start the service
CMD [ "npm", "start" ]
