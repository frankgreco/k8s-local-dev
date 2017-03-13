#!/bin/bash

# build docker container
sudo docker build -t fbgrecojr/helloworld:node .

# push docker container
sudo docker push fbgrecojr/helloworld:node
