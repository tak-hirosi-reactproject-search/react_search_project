FROM node:latest

# 작업 폴더를 만들고 npm 설치
RUN mkdir -p /react_search_project
WORKDIR /react_search_project
COPY . .
# RUN npm install tar@latest -g
RUN npm audit fix --force
RUN npm install
RUN npm install -g npm-check-updates
RUN npm install react-scripts -g

# COPY package.json /usr/src/app/package.json
CMD ["npm","run","start"]
