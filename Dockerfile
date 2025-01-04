FROM node:18-alpine AS base

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --include=dev

COPY . .

ENV NODE_ENV=production
ENV PORT=3000

# Note: Make sure to set these below in the next-config.js file for the client as well
# or will have CSP errors. (It's auto set from here, but take care of edge case)


# defid RPC
ENV NEXT_PUBLIC_RPC_CLIENT_ENDPOINT=https://ocean.defichain.com/v0/mainnet/rpc
# Ocean API
ENV NEXT_PUBLIC_API_CLIENT_ENDPOINT=https://ocean.defichain.com


# For HTTP testing only
# ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# export NEXT_PUBLIC_RPC_CLIENT_ENDPOINT=https://ocean.defichain.com/v0/mainnet/rpc
# export NEXT_PUBLIC_API_CLIENT_ENDPOINT=https://ocean.defichain.com

RUN npm run build

EXPOSE ${PORT}
CMD ["npm", "run", "start"]
