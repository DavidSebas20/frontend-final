# Etapa de construcción: Construir la aplicación
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación de Astro
RUN npm run build

# Etapa de producción: Servir la aplicación
FROM node:18-alpine AS runner

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar solo los archivos necesarios para ejecutar la aplicación
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]