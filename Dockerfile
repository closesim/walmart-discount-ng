# Stage 1
FROM node:12-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install -g @angular/cli
RUN npm install
COPY . /app
RUN npm run build-prod
# Stage 2
FROM nginx:1.19.1
COPY deploy/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/dist/walmart-discount-ng /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'