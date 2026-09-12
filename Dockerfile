# Stage 1: Build aplikasi menggunakan Node.js (direkomendasikan versi LTS seperti 22 atau 24 untuk stabilitas)
FROM node:24-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Menyajikan aplikasi menggunakan Nginx
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
