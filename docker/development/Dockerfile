FROM node:15.9.0-buster-slim

RUN apt update && apt install -y sudo curl unzip zip

ARG UID
ARG GID
ARG UNAME

ENV UID ${UID}
ENV GID ${GID}
ENV UNAME ${UNAME}

RUN useradd --uid ${UID} --create-home --shell /bin/sh -G sudo,root ${UNAME}
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

WORKDIR /home/${UNAME}/workspace

COPY package.json /home/${UNAME}/workspace/package.json
COPY package-lock.json /home/${UNAME}/workspace/package-lock.json

RUN npm install