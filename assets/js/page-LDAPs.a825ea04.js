(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1141:function(a,e,s){"use strict";s.r(e);var t=s(1),o=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"ldaps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ldaps"}},[a._v("#")]),a._v(" LDAPs")]),a._v(" "),e("p",[e("strong",[a._v("Configura el servidor LDAP de alfa para que utilice el protocolo ldaps:// a la vez que el ldap:// utilizando el certificado x509 de la práctica de https o solicitando el correspondiente a través de gestiona. Realiza las modificaciones adecuadas en los clientes ldap de alfa para que todas las consultas se realicen por defecto utilizando ldaps://")])]),a._v(" "),e("p",[a._v("Para empezar, crearemos el directorio que usaremos para almacenar las claves SSL y le otorgaremos los permisos adecuados. Luego, procederemos a generar la clave RSA.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mkdir /etc/ssl/private\nchmod 700 /etc/ssl/private/\nopenssl genrsa 4096 > /etc/ssl/private/alfa.key\n")])])]),e("p",[e("img",{attrs:{src:s(890),alt:"image"}})]),a._v(" "),e("p",[a._v("Vamos a generar un archivo utilizando la clave previamente creada y lo presentaremos para obtener la firma de la autoridad certificadora de IES Gonzalo Nazareno.")]),a._v(" "),e("p",[e("img",{attrs:{src:s(891),alt:"image"}})]),a._v(" "),e("p",[a._v("En este apartado utilizaremos los certificados generados.")]),a._v(" "),e("p",[e("img",{attrs:{src:s(892),alt:"image"}})]),a._v(" "),e("p",[a._v("Para llevar a cabo este ejercicio, trasladaremos los archivos a sus respectivas carpetas correspondientes.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo mv gonzalonazareno.crt /etc/ssl/certs/\nsudo mv alfa.crt /etc/ssl/certs/\nsudo mv alfa.key /etc/ssl/private/\n")])])]),e("p",[a._v("Para permitir al usuario openldap acceder al archivo y al directorio que lo contiene, necesitamos concederle los permisos necesarios. Para lograr esto de manera más precisa y eficiente, instalaremos el paquete acl antes de asignar los permisos correspondientes.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo apt install acl\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("setfacl -m u:openldap:r-x /etc/ssl/private\nsetfacl -m u:openldap:r-x /etc/ssl/private/alfa.key\n")])])]),e("p",[a._v("Antes de iniciar la configuración, comprobaremos que el servicio slapd utiliza el mismo puerto que ldap (389/TCP).")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("netstat -tlnp | egrep 'slapd'\n")])])]),e("p",[e("img",{attrs:{src:s(893),alt:"image"}})]),a._v(" "),e("p",[a._v("Ya que abordaremos los parámetros de configuración como si fueran atributos de un objeto en el directorio, será necesario crear un archivo con extensión .ldif que contenga las modificaciones que se llevarán a cabo.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo nano seguro.ldif\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("dn: cn=config\nchangetype: modify\nreplace: olcTLSCACertificateFile\nolcTLSCACertificateFile: /etc/ssl/certs/gonzalonazareno.crt           \n-\nreplace: olcTLSCertificateKeyFile\nolcTLSCertificateKeyFile: /etc/ssl/private/alfa.key\n-\nreplace: olcTLSCertificateFile\nolcTLSCertificateFile: /etc/ssl/certs/alfa.crt\n")])])]),e("p",[a._v("A continuación, importaremos el archivo para modificar los atributos de la configuración mediante el uso de ldapmodify.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("ldapmodify -Y EXTERNAL -H ldapi:/// -f seguro.ldif\n")])])]),e("p",[e("img",{attrs:{src:s(894),alt:"image"}})]),a._v(" "),e("p",[a._v("De manera predeterminada, el protocolo no incluye la opción de ldaps, por lo que deberemos implementarla.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo nano /etc/default/slapd\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('SLAPD_SERVICES="ldap:/// ldapi:/// ldaps:///"\n')])])]),e("p",[a._v("Procederemos a reiniciar el servicio slapd y luego verificaremos su estado actual.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("systemctl restart slapd\nsystemctl status slapd\n")])])]),e("p",[e("img",{attrs:{src:s(895),alt:"image"}})]),a._v(" "),e("p",[a._v("Verificaremos que el nuevo protocolo se esté ejecutando correctamente en el puerto 636/TCP.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("netstat -tlnp | egrep 'slapd'\n")])])]),e("p",[e("img",{attrs:{src:s(896),alt:"image"}})]),a._v(" "),e("p",[a._v("En el lado del cliente, al igual que importamos certificados de autoridades certificadoras en el navegador para usar el protocolo HTTPS, debemos hacer lo mismo para aplicaciones manejadas desde la línea de comandos que utilizan otros protocolos cifrados, como ldaps://. El paquete encargado de manejar la lista de autoridades certificadoras es ca-certificates.")]),a._v(" "),e("p",[a._v("Para hacer esto, debemos copiar el certificado de la autoridad certificadora IES Gonzalo Nazareno desde /etc/ssl/certs/ a /usr/local/share/ca-certificates/, crear un enlace simbólico y concatenarlo en el archivo ca-certificates.crt utilizando los siguientes comandos:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("cp /etc/ssl/certs/gonzalonazareno.crt /usr/local/share/ca-certificates/\nupdate-ca-certificates\n")])])]),e("p",[e("img",{attrs:{src:s(897),alt:"image"}})]),a._v(" "),e("p",[a._v("Para verificar que todo funciona correctamente, realizaremos una búsqueda anónima en el directorio utilizando LDAP sobre SSL/TLS.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('ldapsearch -x -b "dc=olucas,dc=gonzalonazareno,dc=org" -H ldaps://localhost:636\n')])])]),e("p",[e("img",{attrs:{src:s(898),alt:"image"}})]),a._v(" "),e("p",[a._v("Ahora, necesitamos configurar correctamente LDAP para que utilice el protocolo ldaps:// por defecto. Para lograr esto, debemos agregar la especificación ldaps://localhost a la directiva URI.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("nano /etc/ldap/ldap.conf\nURI     ldaps://alfa.olucas.gonzalonazareno.org\n")])])]),e("p",[a._v("Volveremos a realizar la misma consulta realizada anteriormente sin especificar el método de conexión.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('ldapsearch -x -b "dc=olucas,dc=gonzalonazareno,dc=org"\n')])])]),e("p",[e("img",{attrs:{src:s(899),alt:"image"}})]),a._v(" "),e("p",[a._v("Podemos verificar que ahora se está utilizando el protocolo SSL/TLS de forma predeterminada al utilizar LDAP.")]),a._v(" "),e("hr"),a._v(" "),e("p",[e("em",[a._v("Cliente Rocky")])]),a._v(" "),e("p",[a._v("Vamos a crear un fichero de configuración para el cliente:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("nano /etc/openldap/ldap.conf\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("BASE dc=olucas,dc=gonzalonazareno,dc=org\nURI ldaps://alfa.olucas.gonzalonazareno.org\n")])])]),e("p",[a._v("Despues de hacer esto meteremos en la ruta "),e("code",[a._v("/etc/pki/ca-trust/source/anchors/")]),a._v(" el fichero de gonzalonazareno.crt")]),a._v(" "),e("p",[a._v("Para guardar estos cambios ejecutaremos el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("update-ca-trust\n")])])]),e("p",[a._v("Una vez que ya tenemos el fichero de configuración, podemos comprobar que funciona correctamente:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('ldapsearch -x -b "dc=olucas,dc=gonzalonazareno,dc=org"\n')])])]),e("p",[e("img",{attrs:{src:s(900),alt:"image"}})]),a._v(" "),e("p",[a._v("Como podemos ver, funciona correctamente.")]),a._v(" "),e("p",[a._v("Ahora vamos a comprobar que funciona correctamente desde el cliente Rocky. Para ello, usaremos el siguiente comando para conectarnos al servidor LDAP con el usuario prueba y verificar la autentificación:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('ldapwhoami -x -D "uid=prueba,ou=Personas,dc=olucas,dc=gonzalonazareno,dc=org" -W\n')])])]),e("p",[e("img",{attrs:{src:s(901),alt:"image"}})]),a._v(" "),e("p",[a._v("Como podemos ver, funciona correctamente.")]),a._v(" "),e("p",[a._v("Creamos el directorio de montaje:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mkdir /home/nfs\nmkdir /home/nfs/prueba\nchown 2001:2001 /home/nfs/prueba\n")])])]),e("p",[a._v("Para solucionar el problema de no visualizar los cambios en la carpeta de inicio del usuario prueba, debemos montarla a través de NFS. De esta manera, podremos acceder a los cambios realizados desde cualquier cliente conectado.")]),a._v(" "),e("p",[a._v("Cargamos el módulo:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("modprobe nfs\n")])])]),e("p",[a._v("Ejecutamos lo siguiente para que se cargue el modulo automáticamente:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("echo NFS | tee -a /etc/modules\n")])])]),e("p",[a._v("Lo montamos mediante systemd:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("nano /etc/systemd/system/home-nfs.mount\n")])])]),e("p",[a._v("Añadimos las siguientes líneas:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("[Unit]\nDescription=script de montaje NFS\nRequires=NetworkManager.service\nAfter=NetworkManager.service\n[Mount]\nWhat=172.16.0.1:/home/nfs\nWhere=/home/nfs\nOptions=_netdev,auto\nType=nfs\n[Install]\nWantedBy=multi-user.target\n")])])]),e("p",[a._v("Reiniciamos el servicio:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("systemctl daemon-reload\nsystemctl start home-nfs.mount\nsystemctl enable home-nfs.mount\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("systemctl status home-nfs.mount\n")])])]),e("p",[e("img",{attrs:{src:s(902),alt:"image"}})]),a._v(" "),e("p",[e("img",{attrs:{src:s(903),alt:"image"}})]),a._v(" "),e("p",[a._v("Ahora vamos a comprobar que funciona correctamente al loguearnos con el usuario prueba:")]),a._v(" "),e("p",[e("img",{attrs:{src:s(904),alt:"image"}})]),a._v(" "),e("p",[a._v("Hasta aquí la configuración del cliente Rocky.")])])}),[],!1,null,null,null);e.default=o.exports},890:function(a,e,s){a.exports=s.p+"assets/img/1.75c3b05b.png"},891:function(a,e,s){a.exports=s.p+"assets/img/2.b4a06562.png"},892:function(a,e){a.exports="data:image/png;base64,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"},893:function(a,e,s){a.exports=s.p+"assets/img/4.13eec488.png"},894:function(a,e,s){a.exports=s.p+"assets/img/5.d9019f26.png"},895:function(a,e,s){a.exports=s.p+"assets/img/6.58e97553.png"},896:function(a,e,s){a.exports=s.p+"assets/img/7.a8251769.png"},897:function(a,e,s){a.exports=s.p+"assets/img/8.27bd32e4.png"},898:function(a,e,s){a.exports=s.p+"assets/img/9.1338d3af.png"},899:function(a,e,s){a.exports=s.p+"assets/img/10.8ad78a86.png"},900:function(a,e,s){a.exports=s.p+"assets/img/1-rocky.78ced4a8.png"},901:function(a,e,s){a.exports=s.p+"assets/img/2-rocky.c5737c6d.png"},902:function(a,e,s){a.exports=s.p+"assets/img/3-rocky.987d640a.png"},903:function(a,e,s){a.exports=s.p+"assets/img/4-rocky.161f3b1b.png"},904:function(a,e,s){a.exports=s.p+"assets/img/5-rocky.d1ee6277.png"}}]);