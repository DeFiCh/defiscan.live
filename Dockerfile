FROM node:18-alpine AS base

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --include=dev

COPY . .

ENV NODE_ENV=production
# Note: Make sure to set these in the next-config.js file for the client as well
# or will have CSP errors
ENV NEXT_PUBLIC_RPC_CLIENT_ENDPOINT=https://ocean.defichain.com/v0/mainnet/rpc
ENV NEXT_PUBLIC_API_CLIENT_ENDPOINT=https//ocean.defichain.com

# For HTTP testing only
# ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# export NEXT_PUBLIC_RPC_CLIENT_ENDPOINT=https://ocean.defichain.com/v0/mainnet/rpc
# export NEXT_PUBLIC_API_CLIENT_ENDPOINT=https://ocean.defichain.com

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
