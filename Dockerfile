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
# install
RUN apt-get update \
    && apt-get install -y sudo \
    && apt-get install -y libgl1-mesa-glx git locales \
    && apt-get install -y wget \
    && dpkg -i vufind_3.1.1.deb || true \
    && locale-gen ko_KR.UTF-8

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN sudo apt-get install -f
RUN sudo dpkg -i google-chrome-stable_current_amd64.deb


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
