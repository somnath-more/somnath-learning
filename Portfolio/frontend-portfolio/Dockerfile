FROM nginx:alpine
COPY nginx.conf ./etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*sv
COPY build /usr/share/nginx/html/
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]