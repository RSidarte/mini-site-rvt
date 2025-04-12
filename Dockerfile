# Dockerfile à la racine du projet
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html
