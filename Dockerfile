 
# Node.js imajını belirle
FROM node:14-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# Projeyi Docker imajına kopyala
COPY . .

# Bağımlılıkları yükle
RUN npm install

# Uygulamayı çalıştır
CMD ["npm", "start"]
