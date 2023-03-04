(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1088:function(a,e,s){"use strict";s.r(e);var t=s(1),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mariadb-en-debian-11-bullseye"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mariadb-en-debian-11-bullseye"}},[a._v("#")]),a._v(" MariaDB en Debian 11 Bullseye")]),a._v(" "),e("p",[e("img",{attrs:{src:s(860),alt:"image"}})]),a._v(" "),e("p",[a._v("Para conseguir una instalación correcta debemos cumplir los siguientes requisitos:")]),a._v(" "),e("p",[e("input",{attrs:{type:"checkbox",name:"vehicle",value:"Bike"}}),a._v(" Tener una máquina Debian 11 actualizada")]),a._v(" "),e("p",[e("input",{attrs:{type:"checkbox",name:"vehicle",value:"Bike"}}),a._v(" Tener un usuario con privilegios de sudo")]),a._v(" "),e("p",[e("input",{attrs:{type:"checkbox",name:"vehicle",value:"Bike"}}),a._v(" Tener acceso a internet")]),a._v(" "),e("p",[a._v("Antes de comenzar con la instalación actualizaremos nuestra máquina")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo apt update && sudo apt upgrade\n")])])]),e("p",[a._v("Una vez completada la actualización del sistema, ejecuta el siguiente comando para instalr los paquetes necesarios")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo apt-get install software-properties-common dirmngr gnupg2 -y\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo apt-get install apt-transport-https wget curl -y\n")])])]),e("h2",{attrs:{id:"instalar-mariadb-en-debian-11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instalar-mariadb-en-debian-11"}},[a._v("#")]),a._v(" Instalar MariaDB en Debian 11")]),a._v(" "),e("p",[a._v("Para comenzar con la instalación ejecuta el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo apt install mariadb-server -y\n")])])]),e("p",[a._v("Para iniciar, detener y reiniciar el servidor de bases de datos MariaDB, utiliza los siguientes comandos:")]),a._v(" "),e("p",[a._v("Iniciar")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo systemctl start mariadb\n")])])]),e("p",[a._v("Detener")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo systemctl stop mariadb\n")])])]),e("p",[a._v("Reiniciar")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo systemctl restart mariadb\n")])])]),e("p",[a._v("Para que MariaDB se inicie automáticamente al arrancar el sistema, ejecuta el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo systemctl enable mariadb\n")])])]),e("p",[a._v("MariaDB debería estar en marcha en este momento. Puedes comprobar si se esta ejecutando, ejecutando el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo systemctl status mariadb\n")])])]),e("p",[a._v("Ejemplo de salida:")]),a._v(" "),e("p",[e("img",{attrs:{src:s(861),alt:"image"}})]),a._v(" "),e("p",[e("code",[a._v("Ctrl + C")]),a._v(" para salir del fichero")]),a._v(" "),e("p",[a._v("Y con esto ya tendriamos instalado MariaDB y para ejecutarlo, ejecutaremos el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo mysql\n")])])]),e("h2",{attrs:{id:"creacion-de-usuario"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creacion-de-usuario"}},[a._v("#")]),a._v(" Creación de usuario")]),a._v(" "),e("p",[a._v("Los siguientes pasos que vas a ver se ejecutan dentro de MariaDB (cambia el usuario y la contraseña por los tuyos)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("create user lucas;\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("grant all privileges on *.* to 'lucas'@'%' identified by 'root' with grant option;\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("FLUSH PRIVILEGES;\n")])])]),e("p",[e("img",{attrs:{src:s(862),alt:"image"}})]),a._v(" "),e("p",[a._v("Y una vez ya creado el usuario salimos de MariaDB ejecutando "),e("code",[a._v("exit;")]),a._v("\nY para conectarnos a nuestro usuario ejecutaremos el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mysql -u lucas -p\n")])])]),e("p",[e("img",{attrs:{src:s(863),alt:"image"}})]),a._v(" "),e("h3",{attrs:{id:"creacion-de-base-de-datos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creacion-de-base-de-datos"}},[a._v("#")]),a._v(" Creación de base de datos")]),a._v(" "),e("p",[a._v("Para ejecutar una base de datos ejecutaremos el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mysql> CREATE DATABASE nombre-db;\n")])])]),e("p",[e("img",{attrs:{src:s(864),alt:"image"}})]),a._v(" "),e("p",[a._v("Para meternos en una base de datos ejecutaremos el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mysql> use nombre-db;\n")])])]),e("p",[a._v("Para crear una tabla ejecutaremos el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mysql> CREATE TABLE NOMBRE (\n    ->     DATO,\n    ->     DATO,\n    ->     DATO\n    -> );\n")])])]),e("p",[a._v("Para ejecutar los insert dentro de la table ejecutaremos el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mysql> INSERT INTO NOMBRE VALUES ('DATO','DATO','DATO');\n")])])]),e("p",[a._v("Ejemplo práctico:")]),a._v(" "),e("p",[e("img",{attrs:{src:s(865),alt:"image"}})]),a._v(" "),e("h2",{attrs:{id:"acceso-remoto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#acceso-remoto"}},[a._v("#")]),a._v(" Acceso remoto")]),a._v(" "),e("p",[e("font",{attrs:{color:"#800080"}},[e("strong",[a._v("Paso 1")])]),a._v(" Modificamos el fichero "),e("code",[a._v("50-server.conf")])],1),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo nano /etc/mysql/mariadb.conf.d/50-server.cnf\n")])])]),e("p",[a._v("Y editamos la linea donde pone "),e("code",[a._v("bind-address")]),a._v(" y lo dejaremos como se muestra en la imagen:")]),a._v(" "),e("p",[e("img",{attrs:{src:s(866),alt:"image"}})]),a._v(" "),e("p",[e("font",{attrs:{color:"#800080"}},[e("strong",[a._v("Paso 2")])]),a._v(" Reiniciamos el servicio mariadb")],1),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo service mariadb restart\n")])])]),e("p",[e("font",{attrs:{color:"#800080"}},[e("strong",[a._v("Paso 3")])]),a._v(" Nos iremos al cliente e instalaremos mariadb-client")],1),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo apt install mariadb-client\n")])])]),e("p",[e("font",{attrs:{color:"#800080"}},[e("strong",[a._v("Paso 4")])]),a._v(" Nos conectamos")],1),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mariadb -u lucas -h ip-servidor -p \n")])])]),e("p",[e("img",{attrs:{src:s(867),alt:"image"}})]),a._v(" "),e("p",[a._v("¡Gracias!")])])}),[],!1,null,null,null);e.default=r.exports},860:function(a,e,s){a.exports=s.p+"assets/img/mariadb.0ea8a168.png"},861:function(a,e,s){a.exports=s.p+"assets/img/1-mariadb.9718ed09.png"},862:function(a,e,s){a.exports=s.p+"assets/img/2-mariadb.c79bb55e.png"},863:function(a,e,s){a.exports=s.p+"assets/img/5-mariadb.ce13d89b.png"},864:function(a,e,s){a.exports=s.p+"assets/img/6-mariadb.4f3ed4be.png"},865:function(a,e,s){a.exports=s.p+"assets/img/7-mariadb.340f2ba6.png"},866:function(a,e,s){a.exports=s.p+"assets/img/3-mariadb.f5a55a0f.png"},867:function(a,e,s){a.exports=s.p+"assets/img/4-mariadb.32ba8e60.png"}}]);