FROM mhart/alpine-node:10.19

WORKDIR /src

COPY server     /src/server

EXPOSE 3099

CMD [ "./server" ]