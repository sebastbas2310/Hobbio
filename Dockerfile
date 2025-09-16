# Imagen base de Node.js (alpine = liviana)
FROM node:22-alpine

# Crea carpeta de trabajo
WORKDIR /app

# Copia archivos de dependencias
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Instala pnpm y dependencias
RUN npm install -g pnpm && pnpm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto de Next.js
EXPOSE 3000

# Comando por defecto
CMD ["pnpm", "dev"]
