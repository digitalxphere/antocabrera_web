# Build
FROM node:20 AS build
WORKDIR /app
# Force cache bust - 1757037148
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npx esbuild server/production.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/index.js

FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node","dist/index.js"]