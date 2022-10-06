FROM node:16.17.0-alpine

# Setup user account
# id -g, id -u
ARG uid
ARG gid
ARG usr
ARG fname

# 작업 폴더를 만들고 npm 설치
RUN mkdir -p /${fname} # && chown ${usr} /${fname}
WORKDIR /${fname}

COPY ./app/package.json /${fname}
RUN npm install react-scripts@5.0.1 -g
RUN npm install


COPY ./app /${fname}
CMD ["npm", "run", "start"]
