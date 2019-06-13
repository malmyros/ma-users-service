# Docker

Docker is a set of coupled software-as-a-service and platform-as-a-service products that use operating-system-level visualization to develop and deliver software in packages called containers

## Using the services a docker image

To use the service as a docker image, we need to build an image from the
source code, and then run the image as a container. The source code
to wrap the service as a docker image can be found in the [DockerFile](../Dockerfile). 

Below you can find the steps to achieve this as well as some useful commands
to use when working with docker.


## Steps

- Building the image

To build the image for this service we need to run the following command:

```
docker build -t <OUR_IMAGE_NAME> .
``` 

- Verify our image exists

```
docker images --filter reference=<OUR_IMAGE_NAME>
```

We should see something like the following

```
REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
<OUR_IMAGE_NAME>   latest              0870a746e38d        8 minutes ago       112MB
```

- Running our image as a container

```
docker run -t -i -p 3000:3000 <OUR_IMAGE_NAME>
```

- Running our image as a container in deamon mode

```
docker run -t -i -d -p 3000:3000 <OUR_IMAGE_NAME>
```

Notice the extra `-d` flag that instructs docker to run the service as a deamon

- Verify our container is running

```
docker container ls
```

We should see our output as follows:

```
CONTAINER ID        IMAGE                 COMMAND             CREATED             STATUS              PORTS                    NAMES
9bd8ec36b513        <OUR_IMAGE_NAME>   "npm start"         17 seconds ago      Up 16 seconds       0.0.0.0:3000->3000/tcp   agitated_newton
```

- Stop our container from running

```
docker container stop <CONTAINER_ID>
```
