#!/bin/bash

docker container stop $(docker container ls -aq)
docker container rm $(docker container ls -aq)
docker rmi $(docker images -f "dangling=true" -q)
docker volume rm $(docker volume ls -qf dangling=true)
yes | docker network prune
# yes | docker volume prune

DOCKER_UID=$(id -u $USER) DOCKER_GID=$(id -g $USER) docker-compose up