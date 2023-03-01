(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{985:function(e,a,n){"use strict";n.r(a);var o=n(1),r=Object(o.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"implantacion-de-aplicaciones-web-php-en-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implantacion-de-aplicaciones-web-php-en-docker"}},[e._v("#")]),e._v(" Implantación de aplicaciones web PHP en docker")]),e._v(" "),a("p",[a("strong",[e._v("Imaginemos que el equipo de desarrollo de nuestra empresa ha desarrollado una aplicación PHP que se llama "),a("a",{attrs:{href:"https://github.com/evilnapsis/bookmedik",target:"_blank",rel:"noopener noreferrer"}},[e._v("BookMedik"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("Queremos crear una imagen Docker para implantar dicha aplicación.")])]),e._v(" "),a("p",[a("strong",[e._v("Tenemos que tener en cuenta los siguientes aspectos:")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Contenedor mariadb")])])]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Es necesario que nuestra aplicación guarde su información en un contenedor docker mariadb.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("El script para generar la base de datos y los registros lo encuentras en el repositorio y se llama schema.sql. Debes crear un usuario con su contraseña en la base de datos. La base de datos se llama bookmedik y se crea al ejecutar el script.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Ejecuta el contenedor mariadb y carga los datos del script schema.sql. Para más información.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("El contenedor mariadb debe tener un volumen para guardar la base de datos.")])])])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Contenedor bookmedik")])])]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Vamos a crear tres versiones de la imagen que nos permite implantar la aplicación PHP.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("La imagen debe crear las variables de entorno necesarias con datos de conexión por defecto.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Al crear un contenedor a partir de estas imágenes se ejecutará un script bash que realizará las siguientes tareas:")])]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Modifique el fichero core\\controller\\Database.php para que lea las variables de entorno. Para obtener las variables de entorno en PHP usar la función getenv. Para más información.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Inicialice la base de datos con el fichero schema.sql.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Ejecute el servidor web.")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("El contenedor que creas debe tener un volumen para guardar los logs del servidor web.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("La imagen la tienes que crear en tu entorno de desarrollo con el comando docker build.")])])])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("em",[e._v("Creación del contenedor MariaDB")])]),e._v(" "),a("p",[e._v("Primero creamos un contenedor con la imagen mariadb y que tenga las variables de entorno que nos han indicado. También crearemos una nueva red para la aplicación web.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker network create red_bookmedik\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker run -d --name db-mariadb -v bookmedik_vol:/var/lib/mysql --network red_bookmedik -e MARIADB_ROOT_PASSWORD=root -e MARIADB_DATABASE=bookmedik -e MARIADB_USER=admin -e MARIADB_PASSWORD=admin mariadb\n")])])]),a("p",[e._v("Esto será para realizar las pruebas necesarias y comprobar que la imagen de la aplicación funcione como es debido.")]),e._v(" "),a("h2",{attrs:{id:"tarea-1-creacion-de-una-imagen-docker-con-una-aplicacion-web-desde-una-imagen-base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tarea-1-creacion-de-una-imagen-docker-con-una-aplicacion-web-desde-una-imagen-base"}},[e._v("#")]),e._v(" Tarea 1: Creación de una imagen docker con una aplicación web desde una imagen base")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Vamos a crear una imagen que se llame usuario/bookmedik:v1.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Crea una imagen docker con la aplicación desde una imagen base de debian o ubuntu.")])])])]),e._v(" "),a("p",[e._v("En primer lugar hemos hecho un fork del repositorio de bookmedik y lo hemos clonado en nuestro entorno de desarrollo. Una vez hecho esto, vamos a modificar el fichero schema.sql para que podamos ejecutarlo en un contenedor que ya tendrá una base de datos creada. Así pues, eliminamos las siguientes líneas de ese fichero:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("create database bookmedik;\nuse bookmedik;\n")])])]),a("p",[e._v("A continuación modificamos el fichero "),a("code",[e._v("core/controller/Database.php")]),e._v(" para que se configure a través de las variables de entorno que introduzcamos al crear el contenedor:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("<?php\nclass Database {\n        public static $db;\n        public static $con;\n        function Database(){\n                $this->user=getenv('USER_BOOKMEDIK');$this->pass=getenv('PASSWD_BOOKMEDIK');$this->host=getenv('DB_HOST');$this->ddbb=getenv('NOMBRE_DB');\n        }\n\n        function connect(){\n                $con = new mysqli($this->host,$this->user,$this->pass,$this->ddbb);\n                $con->query(\"set sql_mode=''\");\n                return $con;\n        }\n\n        public static function getCon(){\n                if(self::$con==null && self::$db==null){\n                        self::$db = new Database();\n                        self::$con = self::$db->connect();\n                }\n                return self::$con;\n        }\n}\n?>\n")])])]),a("p",[e._v("Con esto ya podemos crear el Dockerfile que usaremos para crear la imagen:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano Dockerfile\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('FROM debian:bullseye\nMAINTAINER oscarlucas "oscarlucasleo124@gmail.com"\nRUN apt update && apt upgrade -y && apt install apache2 libapache2-mod-php php php-mysql mariadb-client -y && apt clean && rm -rf /var/lib/apt/lists/*\nADD bookmedik /var/www/html/\nADD script.sh /opt/\nRUN chmod +x /opt/script.sh && rm /var/www/html/index.html\nENTRYPOINT ["/opt/script.sh"]\n')])])]),a("p",[e._v("Como vemos, al final le indicamos que ejecute un script. Dicho script lo hemos creado nosotros, y en él hacemos que introduzca la información del fichero schema.sql en la base de datos y hacemos que ejecute apache en modo demonio. El contenido del script es el siguiente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano script.sh\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('#! /bin/sh\n\nwhile ! mysql -u ${USER_BOOKMEDIK} -p${PASSWD_BOOKMEDIK} -h ${DB_HOST}  -e ";" ; do\n        sleep 1\ndone\nmysql -u $USER_BOOKMEDIK --password=$PASSWD_BOOKMEDIK -h $DB_HOST $NOMBRE_DB < /var/www/html/schema.sql\n/usr/sbin/apache2ctl -D FOREGROUND\n')])])]),a("p",[e._v("Este script lo hemos introducido en el directorio bookmedik (el que hemos obtenido de la clonación de github) para que se añada al contenedor junto con el contenido de dicho directorio. Con esto ya podemos crear la imagen con el siguiente comando:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker build -t oscarlucas/bookmedik:v1 .\n")])])]),a("p",[e._v("Una vez creada, ya la podemos ver en nuestro registro local:")]),e._v(" "),a("p",[e._v("![image]")]),e._v(" "),a("h2",{attrs:{id:"tarea-2-despliegue-en-el-entorno-de-desarrollo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tarea-2-despliegue-en-el-entorno-de-desarrollo"}},[e._v("#")]),e._v(" Tarea 2: Despliegue en el entorno de desarrollo")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Crea un script con docker-compose que levante el escenario con los dos contenedores.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Recuerda que para acceder a la aplicación: Usuario: admin, contraseña: admin.")])])])]),e._v(" "),a("p",[e._v("Así pues, crearemos un fichero docker-compose.yaml con la configuración necesaria para levantar los dos contenedores:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano docker-compose.yaml\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("version: '3.1'\nservices:\n  bookmedik:\n    container_name: cont-bookmedik\n    image: oscarlucas/bookmedik:v1\n    restart: always\n    environment:\n      USER_BOOKMEDIK: admin\n      PASSWD_BOOKMEDIK: admin\n      DB_HOST: db-mariadb\n      NOMBRE_DB: bookmedik\n    ports:\n      - 8082:80\n    depends_on:\n      - db\n  db:\n    container_name: db-mariadb\n    image: mariadb\n    restart: always\n    environment:\n      MARIADB_ROOT_PASSWORD: root\n      MARIADB_DATABASE: bookmedik\n      MARIADB_USER: admin\n      MARIADB_PASSWORD: admin\n    volumes:\n      - mariadb_data:/var/lib/mysql\nvolumes:\n    mariadb_data:\n")])])]),a("p",[e._v("Ahora levantamos los contenedores:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker-compose up -d\n")])])]),a("p",[e._v("Podemos verlos funcionando con el siguiente comando:")]),e._v(" "),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Y si entramos desde el navegador web, debería funcionar correctamente:")]),e._v(" "),a("p",[e._v("![image]")]),e._v(" "),a("h2",{attrs:{id:"tarea-3-creacion-de-una-imagen-docker-con-una-aplicacion-web-desde-una-imagen-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tarea-3-creacion-de-una-imagen-docker-con-una-aplicacion-web-desde-una-imagen-php"}},[e._v("#")]),e._v(" Tarea 3: Creación de una imagen docker con una aplicación web desde una imagen PHP")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Vamos a crear una imagen que se llame usuario/bookmedik:v2.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Realiza la imagen docker de la aplicación a partir de la imagen oficial PHP que encuentras en docker hub. Lee la documentación de la imagen para configurar una imagen con apache2 y php, además seguramente tengas que instalar alguna extensión de php.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Modifica el fichero docker-compose.yml` para probar esta imagen.")])])])]),e._v(" "),a("h2",{attrs:{id:"tarea-4-ejecucion-de-una-aplicacion-php-en-docker-con-nginx-optativa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tarea-4-ejecucion-de-una-aplicacion-php-en-docker-con-nginx-optativa"}},[e._v("#")]),e._v(" Tarea 4: Ejecución de una aplicación PHP en docker con nginx (OPTATIVA)")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Vamos a crear una imagen que se llame usuario/bookmedik:v3.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("En este caso queremos usar un contenedor que utilice nginx para servir la aplicación PHP. Puedes crear la imagen desde una imagen base debian o ubuntu o desde la imagen oficial de nginx.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Vamos a crear otro contenedor que sirva php-fpm.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Para que funcione de forma adecuada el php-fpm tiene que tener acceso al directorio donde se encuentra la aplicación.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Y finalmente nuestro contenedor con la aplicación.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Crea un script con docker compose que levante el escenario con los tres contenedores.")])])])]),e._v(" "),a("p",[a("strong",[e._v("A lo mejor te puede ayudar el siguiente enlace: Dockerise your PHP application with Nginx and PHP7-FPM")])]),e._v(" "),a("h2",{attrs:{id:"tarea-5-puesta-en-produccion-de-nuestra-aplicacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tarea-5-puesta-en-produccion-de-nuestra-aplicacion"}},[e._v("#")]),e._v(" Tarea 5: Puesta en producción de nuestra aplicación")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Elige una de las tres imágenes y súbela a Docker Hub.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("En tu VPS instala Docker y utilizando el docker-compose.yml correspondiente, crea un contenedor en ella de la aplicación.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Configura el nginx de tu VPS para que haga de proxy inverso y nos permita acceder a la aplicación con https://bookmedik.tudominio.xxx")])])])]),e._v(" "),a("h2",{attrs:{id:"tarea-6-modificacion-de-la-aplicacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tarea-6-modificacion-de-la-aplicacion"}},[e._v("#")]),e._v(" Tarea 6: Modificación de la aplicación")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("En el entorno de desarrollo vamos a hacer una modificación de la aplicación. Por ejemplo modifica el fichero core/app/view/login-view.php y pon tu nombre en la línea")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Vamos a trabajar con la primera imagen que construimos. Vuelve a crear la imagen con la etiqueta v1_2.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Cambia el docker-compose para probar el cambio.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Modifica la aplicación en producción.")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);