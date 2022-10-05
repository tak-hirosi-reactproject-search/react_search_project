FROM node:18.2.0

# Setup user account
# id -g, id -u
ARG uid
ARG gid
ARG usr
RUN groupadd -r -f -g ${gid} ${usr} && useradd -o -r -l -u ${uid} -g ${gid} -ms /bin/bash ${usr}
RUN usermod -aG sudo ${usr}
RUN echo ${usr}:${usr}1 | chpasswd

# 작업 폴더를 만들고 npm 설치
RUN mkdir -p /react_search_project
WORKDIR /react_search_project
COPY ./home/tglee/react-django/react_search_project/app .
# RUN npm i -g npm-check-updates
# RUN ncu -u
RUN npm install
# RUN npm install tar@latest -g
RUN npm install react-scripts -g

# COPY package.json /usr/src/app/package.json
CMD ["npm","run","start"]
