FROM node:16.17.0

# Setup user account
# id -g, id -u
ARG uid
ARG gid
ARG usr
RUN groupadd -r -f -g ${gid} ${usr} && useradd -o -r -l -u ${uid} -g ${gid} -ms /bin/bash ${usr}
RUN usermod -aG sudo ${usr}
RUN echo ${usr}:${usr}1 | chpasswd

# 작업 폴더를 만들고 npm 설치
RUN mkdir -p /react_search_project  && chown ${usr} /react_search_project
WORKDIR /react_search_project

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install
# RUN npm install -g serve
RUN npm install react-scripts@5.0.1 -g
RUN npm install react@18.2.0 -g


# RUN npm install react-scripts -g
# RUN npm install -g create-react-app 
# RUN npm update
COPY . .

CMD ["npm", "run", "start"]
# CMD ["serve", "-s", "build"]
