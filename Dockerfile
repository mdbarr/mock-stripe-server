FROM node:erbium-alpine

WORKDIR /mock-stripe

RUN yarn global add forever

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

EXPOSE 5757/tcp
CMD [ "npm", "start" ]
