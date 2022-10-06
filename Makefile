UID=1014
USR=tglee
APP_NAME=metafront
IMAGE_NAME=metafront_image
TARGET_PATH=/home/${USR}/metaproject/react_search_project/app
MODEL_VOLUME = ${TARGET_PATH}:/$(APP_NAME)
 
# Build and run the container
build:
	@echo "docker image build --build-arg uid=$(UID) --build-arg gid=$(UID) --build-arg usr=$(USR) --build-arg fname=$(APP_NAME) -t $(IMAGE_NAME) ."
	docker image build --build-arg uid="$(UID)" --build-arg gid="$(UID)" --build-arg usr="$(USR)" --build-arg fname=$(APP_NAME) -t $(IMAGE_NAME) .
run:
	@echo 'docker run -ti --name="$(APP_NAME)" --shm-size 32gb -p 3000:3000 -v $(MODEL_VOLUME) $(IMAGE_NAME)'
	docker run -ti --name="$(APP_NAME)" --shm-size 32gb -p 3000:3000 -v $(MODEL_VOLUME) $(IMAGE_NAME)
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
	docker stop $(APP_NAME) && docker rm $(APP_NAME)
	docker rmi $(IMAGE_NAME)
