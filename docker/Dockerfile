FROM mcr.microsoft.com/playwright:latest

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npx", "playwright", "test"]
