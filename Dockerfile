FROM node:7-alpine
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /root/
RUN apk add --no-cache bash
COPY prep.sh .
RUN ./prep.sh
COPY . .


CMD ["/bin/bash", "./test-plugin.sh"]
