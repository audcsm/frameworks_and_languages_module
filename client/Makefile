DOCKER_IMAGE:=client

build:
	docker build --tag ${DOCKER_IMAGE} .

run: 
	docker run --rm -it -p 8001:8001 ${DOCKER_IMAGE}