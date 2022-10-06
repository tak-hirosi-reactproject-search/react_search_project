FROM node:16.17.0

# Setup user account
# id -g, id -u
ARG uid
ARG gid
ARG usr
ARG fname
RUN groupadd -r -f -g ${gid} ${usr} && useradd -o -r -l -u ${uid} -g ${gid} -ms /bin/bash ${usr}
RUN usermod -aG sudo ${usr}
RUN echo ${usr}:${usr}1 | chpasswd

# download chrome
RUN sudo apt install wget
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN sudo dpkg -i google-chrome-stable_current_amd64.deb
RUN sudo apt-get install -f


# 작업 폴더를 만들고 npm 설치
RUN mkdir -p /${fname} && chown ${usr} /${fname}
WORKDIR /${fname}

COPY ./app/package.json /${fname}
RUN npm install
RUN npm install -g serve
RUN npm install react-scripts@5.0.1 -g


COPY ./app /${fname}

CMD ["serve", "-s", "build"]
# CMD ["npm", "run", "start"]
