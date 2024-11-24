# Utiliser l'image officielle de Node.js version 20.15.1
FROM node:20.15.1

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposer le port sur lequel l'application écoutera (par exemple, 3000)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "app.js"]