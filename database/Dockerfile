FROM mysql:latest

COPY ./init/* /docker-entrypoint-initdb.d/
COPY ./sproc/* /docker-entrypoint-initdb.d/