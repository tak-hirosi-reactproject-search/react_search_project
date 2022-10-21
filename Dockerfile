FROM node:16.17.0

# Setup user account
# id -g, id -u
ARG uid
ARG gid
ARG usr
ARG portnum
ARG fname

ENV Portnum="0.0.0.0:${portnum}"

# datapath copy
RUN mkdir -p /videometadata

# 작업 폴더를 만들고 npm 설치
RUN mkdir -p /${fname}
WORKDIR /${fname}

COPY ./app/package.json /${fname}
RUN npm install react-scripts@5.0.1 -g && npm install && npm install --save react-router-dom 

COPY . /${fname}
CMD npm run start ${Portnum}
