FROM node:18

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY prisma/schema.prisma ./





RUN npm ci --only=production

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3005

CMD ["node", "index.js"]