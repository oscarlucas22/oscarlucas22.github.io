(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{547:function(a,e,r){a.exports=r.p+"assets/img/1-2.4ecbd91d.png"},548:function(a,e,r){a.exports=r.p+"assets/img/1-2.1.ee924c3f.png"},549:function(a,e,r){a.exports=r.p+"assets/img/1-3.69bd9162.png"},550:function(a,e,r){a.exports=r.p+"assets/img/2-2.2de3a2f8.png"},551:function(a,e,r){a.exports=r.p+"assets/img/2-3.e4736935.png"},552:function(a,e,r){a.exports=r.p+"assets/img/3-1.981389c0.png"},553:function(a,e,r){a.exports=r.p+"assets/img/3-3.8616102e.png"},554:function(a,e,r){a.exports=r.p+"assets/img/3-4.b5e077fb.jpeg"},555:function(a,e,r){a.exports=r.p+"assets/img/4-1.52dfdb6d.png"},556:function(a,e,r){a.exports=r.p+"assets/img/4-2.9e605d1f.png"},557:function(a,e,r){a.exports=r.p+"assets/img/4-3.6efc5465.png"},558:function(a,e,r){a.exports=r.p+"assets/img/4-3.1.19bcd73e.png"},559:function(a,e,r){a.exports=r.p+"assets/img/5-1.a3b68f6e.png"},560:function(a,e,r){a.exports=r.p+"assets/img/5-2.15d28eef.png"},561:function(a,e,r){a.exports=r.p+"assets/img/5-3.4be1c7a8.png"},562:function(a,e,r){a.exports=r.p+"assets/img/5-4.59f0e2b2.png"},964:function(a,e,r){"use strict";r.r(e);var o=r(1),s=Object(o.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"criptografia-i-cifrado-asimetrico"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#criptografia-i-cifrado-asimetrico"}},[a._v("#")]),a._v(" Criptografía I: Cifrado asímetrico")]),a._v(" "),e("h3",{attrs:{id:"tarea-1-generacion-de-claves"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tarea-1-generacion-de-claves"}},[a._v("#")]),a._v(" Tarea 1: Generación de claves")]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("1.")])]),a._v(" "),e("strong",[a._v("Genera un par de claves (pública y privada). ¿En que directorio se guarda las claves de un usuario?")])],1),a._v(" "),e("p",[a._v("Las claves las generamos con el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("gpg --gen-key\n")])])]),e("p",[a._v("Y se guardan en el directorio "),e("code",[a._v("/home/usuario/.gnupg/")])]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("2.")])]),a._v(" "),e("strong",[a._v("Lista las claves públicas que tienes en tu almacén de claves. Explica los distintos datos que nos muestra. ¿Cómo deberías haber generado las claves para indicar, por ejemplo, que tenga un 1 mes de validez?")])],1),a._v(" "),e("p",[a._v("Listo las claves publicas")]),a._v(" "),e("p",[e("img",{attrs:{src:r(547),alt:"image"}})]),a._v(" "),e("p",[a._v("Para hacer que tenga un mes de validacion haremos lo siguiente:")]),a._v(" "),e("p",[e("img",{attrs:{src:r(548),alt:"image"}})]),a._v(" "),e("p",[a._v('Para poner un mes de validacion escribiremos cuando nos lo pida "1M" de 1 mes')]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("3.")])]),a._v(" "),e("strong",[a._v("Lista las claves privadas de tu almacén de claves.")])],1),a._v(" "),e("p",[a._v("Listo claves privadas")]),a._v(" "),e("p",[e("img",{attrs:{src:r(549),alt:"image"}})]),a._v(" "),e("h3",{attrs:{id:"tarea-2-importar-exportar-clave-publica"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tarea-2-importar-exportar-clave-publica"}},[a._v("#")]),a._v(" Tarea 2: Importar / exportar clave pública")]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("1.")])]),a._v(" "),e("strong",[a._v("Exporta tu clave pública en formato ASCII y guardalo en un archivo nombre_apellido.asc y envíalo al compañero con el que vas a hacer esta práctica.")])],1),a._v(" "),e("p",[a._v("Exporto la clave con el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('gpg --export -a "oscar lucas leo" > oscar_lucas.asc\n')])])]),e("p",[a._v("Y le envio a Angel el fichero oscar_lucas.asc")]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("2.")])]),a._v(" "),e("strong",[a._v("Importa las claves públicas recibidas de vuestro compañero.")])],1),a._v(" "),e("p",[a._v("Importo la clave que me ha mandado Angel")]),a._v(" "),e("p",[e("img",{attrs:{src:r(550),alt:"image"}})]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("3.")])]),a._v(" "),e("strong",[a._v("Comprueba que las claves se han incluido correctamente en vuestro keyring.")]),a._v(" "),e("img",{attrs:{src:r(551),alt:"image"}})],1),a._v(" "),e("h3",{attrs:{id:"tarea-3-cifrado-asimetrico-con-claves-publicas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tarea-3-cifrado-asimetrico-con-claves-publicas"}},[a._v("#")]),a._v(" Tarea 3: Cifrado asimétrico con claves públicas")]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("1.")])]),a._v(" "),e("strong",[a._v("Cifraremos un archivo cualquiera y lo remitiremos por email a uno de nuestros compañeros que nos proporcionó su clave pública.")])],1),a._v(" "),e("p",[e("img",{attrs:{src:r(552),alt:"image"}})]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("2.")])]),a._v(" "),e("strong",[a._v("Nuestro compañero, a su vez, nos remitirá un archivo cifrado para que nosotros lo descifremos.")])],1),a._v(" "),e("p",[a._v("Le envio el archivo cifrado_olucas que he cifrado antes")]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("3.")])]),a._v(" "),e("strong",[a._v("Tanto nosotros como nuestro compañero comprobaremos que hemos podido descifrar los mensajes recibidos respectivamente.")])],1),a._v(" "),e("p",[e("img",{attrs:{src:r(553),alt:"image"}})]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("4.")])]),a._v(" "),e("strong",[a._v("Por último, enviaremos el documento cifrado a alguien que no estaba en la lista de destinatarios y comprobaremos que este usuario no podrá descifrar este archivo.")])],1),a._v(" "),e("p",[a._v("El archivo se lo he pasado a Paco y como podemos ver el no tiene acceso para poder descifrarlo")]),a._v(" "),e("p",[e("img",{attrs:{src:r(554),alt:"image"}})]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("5.")])]),a._v(" "),e("strong",[a._v("Para terminar, indica los comandos necesarios para borrar las claves públicas y privadas que posees.")])],1),a._v(" "),e("p",[a._v("Comando para borrar clave publica:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('gpg --delete-key "Nombre de Usuario"\n')])])]),e("p",[a._v("Comando para borrar clave privada:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('gpg --delete-secret-key "Nombre de Usuario"\n')])])]),e("h3",{attrs:{id:"tarea-4-exportar-clave-a-un-servidor-publico-de-claves-pgp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tarea-4-exportar-clave-a-un-servidor-publico-de-claves-pgp"}},[a._v("#")]),a._v(" Tarea 4: Exportar clave a un servidor público de claves PGP")]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("1.")])]),a._v(" "),e("strong",[a._v("Genera la clave de revocación de tu clave pública para utilizarla en caso de que haya problemas.")])],1),a._v(" "),e("p",[e("img",{attrs:{src:r(555),alt:"image"}})]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("2.")])]),a._v(" "),e("strong",[a._v("Exporta tu clave pública al servidor pgp.rediris.es")])],1),a._v(" "),e("p",[a._v('Tanto Angel como yo hemos probado exportar la clave en "pgp.rediris.es" pero no iba y hemos decido hacerla en "keyserver.ubuntu.com"')]),a._v(" "),e("p",[e("img",{attrs:{src:r(556),alt:"image"}})]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("3.")])]),a._v(" "),e("strong",[a._v("Borra la clave pública de alguno de tus compañeros de clase e impórtala ahora del servidor público de rediris.")])],1),a._v(" "),e("p",[a._v("Borro la clave de Angel")]),a._v(" "),e("p",[e("img",{attrs:{src:r(557),alt:"image"}})]),a._v(" "),e("p",[a._v("Y la vuelvo a importar ahora a traves del servidor publico.")]),a._v(" "),e("p",[e("img",{attrs:{src:r(558),alt:"image"}})]),a._v(" "),e("h3",{attrs:{id:"tarea-5-cifrado-asimetrico-con-openssl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tarea-5-cifrado-asimetrico-con-openssl"}},[a._v("#")]),a._v(" Tarea 5: Cifrado asimétrico con openssl")]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("1.")])]),a._v(" "),e("strong",[a._v("Genera un par de claves (pública y privada).")])],1),a._v(" "),e("p",[e("img",{attrs:{src:r(559),alt:"image"}})]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("2.")])]),a._v(" "),e("strong",[a._v("Envía tu clave pública a un compañero.")])],1),a._v(" "),e("p",[a._v("Guardo la clave en un archivo con el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo openssl rsa -in key.pem -pubout -out key.publica.pem\n")])])]),e("p",[e("img",{attrs:{src:r(560),alt:"image"}})]),a._v(" "),e("p",[a._v('Y el fichero "key.publica.pem" se la envio a Angel')]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("3.")])]),a._v(" "),e("strong",[a._v("Utilizando la clave pública cifra un fichero de texto y envíalo a tu compañero.")])],1),a._v(" "),e("p",[a._v("Cifro un archivo de texto con el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openssl rsautl -encrypt -in cifrado_olucas -out cifrado_olucas.enc -inkey ~/Descargas/publicaopenssl.pem -pubin\n")])])]),e("p",[e("img",{attrs:{src:r(561),alt:"image"}})]),a._v(" "),e("p",[a._v("Y se la envio a Angel")]),a._v(" "),e("p",[e("font",{attrs:{color:"#00ff00"}},[e("strong",[a._v("4.")])]),a._v(" "),e("strong",[a._v("Tu compañero te ha mandado un fichero cifrado, muestra el proceso para el descifrado.")])],1),a._v(" "),e("p",[a._v('Angel me ha mandado su archivo llamado "CifradoOSSasp.enc" y lo desencripto con el siguiente comando:')]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo openssl rsautl -decrypt -in Descargas/CifradoOSSasp.enc -out cifrado.txt -inkey key.pem\n")])])]),e("p",[a._v('Y despues ejecutare el comando "cat" para ver el interior del fichero.')]),a._v(" "),e("p",[e("img",{attrs:{src:r(562),alt:"image"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);