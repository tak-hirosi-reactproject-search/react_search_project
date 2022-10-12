# react_search_project
using (react - django RESTapi ) study project!

# how to install
```bash
git clone https://github.com/tak-hirosi-reactproject-search/react_search_project.git videofront
cd videofront
```

# node.js 가 깔린 환경에서 실행
react가 실행가능한 환경 구축

### how to update
```bash
./react_search_project$ cd app
./react_search_project/app$ npm install
```

### how to run
```bash
./react_search_project/app$ npm start
```

# Docker 베이스 실행
도커가 실행가능한 환경 구축

### plz Change Makefile
```Makefile
UID={#change}
USR={#change}
PORT_NUM=3000 # {#change}
VIDEO_TARGET_PATH=/home/samchu/project-meta/ # {#change}
```

### how to docker run
```bash
make build
make run
```

### how to delete docker image
```bash
make rmrmi
```

