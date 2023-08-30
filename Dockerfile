FROM ubuntu
USER root
RUN sudo lshw
RUN sudo lscpu
RUN sudo lsblk

CMD ["echo", "Hello World...! from my first docker image"]
