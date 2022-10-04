FROM node:latest

# 작업 폴더를 만들고 npm 설치
RUN mkdir -p /react_search_project
WORKDIR /react_search_project
COPY . .
WORKDIR ./react_search_project/app
RUN npm install --silent
RUN npm install tar@latest -g
RUN npm install -g npm-check-updates
RUN npm install react-scripts -g --silent

# COPY package.json /usr/src/app/package.json
CMD ["npm", "start"]
