FROM node:0.10.38-onbuild

COPY . /etc/www
CMD ["/bin/bash"]
