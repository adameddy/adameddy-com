# Build the Hugo static site
FROM floryn90/hugo:0.119.0 AS builder
WORKDIR /src
COPY . .

# Run minify to optimize HTML, CSS, and JS output
# TODO: Fix errors causing the command below to fail.
# RUN hugo --minify

# Serve the static files using Nginx
FROM nginx:alpine

# Clear any default Nginx boilerplate files
RUN rm -rf /usr/share/nginx/html/*

# Copy build files
COPY --from=builder /src/public /usr/share/nginx/html

# Start
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]