FROM node:18.2.0

# 작업 폴더를 만들고 npm 설치
RUN mkdir -p /react_search_project
WORKDIR /react_search_project
COPY . .
RUN npm i -g npm-check-updates
RUN ncu -u
RUN npm install
# RUN npm install tar@latest -g
RUN npm install react-scripts -g

# COPY package.json /usr/src/app/package.json
CMD ["npm","run","start"]
