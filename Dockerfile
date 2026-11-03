# Builds the static site and serves it with Caddy, as production does.
FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY --from=build /app/build /srv
EXPOSE 3000
CMD ["caddy", "file-server", "--root", "/srv", "--listen", ":3000"]
