FROM --platform=linux/amd64 vulnerables/web-dvwa:latest

COPY start.sh /start.sh
RUN chmod +x /start.sh

ENTRYPOINT ["/start.sh"]
