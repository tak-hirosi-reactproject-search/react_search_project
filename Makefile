UID=
USR=
PORT_NUM=3000
SRC_NAME=videofront

APP_NAME=${SRC_NAME}_$(USR)
IMAGE_NAME=${SRC_NAME}_image_$(USR)
TARGET_PATH=`pwd`
MODEL_VOLUME = ${TARGET_PATH}:/${SRC_NAME}
 
# Build and run the container
build:
	@echo "docker image build -t $(IMAGE_NAME) ."
	docker image build --build-arg uid="$(UID)" --build-arg gid="$(UID)" --build-arg usr="$(USR)" --build-arg portnum=$(PORT_NUM) --build-arg fname=${SRC_NAME} -t $(IMAGE_NAME) .
run:
	@echo 'docker run -ti --name="$(APP_NAME)_$(USR)"'
	docker run -ti --name="$(APP_NAME)_$(USR)" --shm-size 32gb -p $(PORT_NUM):$(PORT_NUM) -v $(MODEL_VOLUME) $(IMAGE_NAME)
stop:
	@echo 'stop docker $(APP_NAME)'
	docker stop $(APP_NAME)
rm:
	@echo 'rm docker $(APP_NAME)'
	docker rm -f $(APP_NAME)
rmi:
	@echo 'rmi docker $(IMAGE_NAME)'
	docker rmi $(IMAGE_NAME)
	
rmrmi:
	docker stop $(APP_NAME)) && docker rm $(APP_NAME)
	docker rmi $(IMAGE_NAME)
