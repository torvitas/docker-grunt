FROM node:0.12
MAINTAINER "Sascha Marcel Schmidt" <docker@saschaschmidt.net>

RUN useradd -m node
WORKDIR /home/node/
COPY vendor /home/node/vendor
RUN mkdir config
COPY package.json /home/node/
RUN chown node.node -R /home/node/
USER node
RUN npm install

COPY Gruntfile.js /home/node/
VOLUME ["/home/node/config"]
CMD ["/home/node/node_modules/grunt-cli/bin/grunt"]
