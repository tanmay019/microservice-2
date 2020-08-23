FROM mhart/alpine-node:10.19

WORKDIR /src

COPY server.js      /src/server.js

EXPOSE 3099

CMD [ "node", "server.js" ] 
