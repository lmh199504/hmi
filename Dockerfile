
# FROM openssl:1.0.7
FROM nginx:1.17.5-alpine
COPY dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf