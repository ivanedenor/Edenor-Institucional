# IMAGEN DE DOCKER PARA DESARROLLO

El objetivo de este directorio es proveer una imagen docker con las mismas características que en producción.
Acomodar las versiones de php, mysql, etc a las condiciones de producción y lanzar con:  docker-compose up -d

Notas:
	- la imagen de azure webapp fué tomada del repositorio oficial: https://github.com/Azure/app-service-builtin-images.git 
	
Instructivo
- revisar la configuración en docker-compose.yml
- ejecutar el comando docker-compose up -d
- ejecutar 'docker ps' y verificar que hay 3 servicios funcionando: mysql,webapp y phpmyadmin
- ejecutar 'docker-machine ip' para saber la ip asignada y utilizar esa ip desde el navegador para acceder al sitio y a phpmyadmin
- importar la base de datos accediendo desde el navegador al phpmyadmin usando el puerto 8081. Ej: http://192.168.99.100:8081 (la base ya está creada y se llama 'drupaldb)
- acceder al sitio usando el puerto 8080. Ejemplo: http://192.168.99.100:8080
