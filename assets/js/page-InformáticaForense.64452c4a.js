(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1135:function(e,s,n){"use strict";n.r(s);var o=n(1),r=Object(o.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"informatica-forense"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#informatica-forense"}},[e._v("#")]),e._v(" Informática Forense")]),e._v(" "),s("p",[s("strong",[e._v("La informática forense es el conjunto de técnicas que nos permite obtener la máxima información posible tras un incidente o delito informático.")])]),e._v(" "),s("p",[s("strong",[e._v("En esta práctica, realizarás la fase de toma de evidencias y análisis de las mismas sobre una máquina Linux y otra Windows. Supondremos que pillamos al delincuente in fraganti y las máquinas se encontraban encendidas. Opcionalmente, podéis realizar el análisis de un dispositivo Android.")])]),e._v(" "),s("p",[s("strong",[e._v("Sobre cada una de las máquinas debes realizar un volcado de memoria y otro de disco duro, tomando las medidas necesarias para certificar posteriormente la cadena de custodia.")])]),e._v(" "),s("p",[s("strong",[e._v("Debes tratar de obtener las siguientes informaciones:")])]),e._v(" "),s("p",[s("strong",[e._v("Apartado A) Máquina Windows.")])]),e._v(" "),s("p",[s("strong",[e._v("Por comandos:")])]),e._v(" "),s("p",[s("strong",[e._v("1. Procesos en ejecución.")])]),e._v(" "),s("p",[s("strong",[e._v("2. Servicios en ejecución.")])]),e._v(" "),s("p",[s("strong",[e._v("3. Puertos abiertos.")])]),e._v(" "),s("p",[s("strong",[e._v("4. Conexiones establecidas por la máquina.")])]),e._v(" "),s("p",[s("strong",[e._v("5. Sesiones de usuario establecidas remotamente.")])]),e._v(" "),s("p",[s("strong",[e._v("6. Ficheros transferidos recientemente por NetBios.")])]),e._v(" "),s("p",[s("strong",[e._v("7. Contenido de la caché DNS.")])]),e._v(" "),s("p",[s("strong",[e._v("8. Variables de entorno.")])]),e._v(" "),s("p",[s("strong",[e._v("Analizando el Registro de Windows:")])]),e._v(" "),s("p",[s("strong",[e._v("9. Dispositivos USB conectados")])]),e._v(" "),s("p",[s("strong",[e._v("10. Redes wifi utilizadas recientemente.")])]),e._v(" "),s("p",[s("strong",[e._v("11. Configuración del firewall de nodo.")])]),e._v(" "),s("p",[s("strong",[e._v("12. Programas que se ejecutan en el Inicio.")])]),e._v(" "),s("p",[s("strong",[e._v("13. Asociación de extensiones de ficheros y aplicaciones.")])]),e._v(" "),s("p",[s("strong",[e._v("14. Aplicaciones usadas recientemente.")])]),e._v(" "),s("p",[s("strong",[e._v("15. Ficheros abiertos recientemente.")])]),e._v(" "),s("p",[s("strong",[e._v("16. Software Instalado.")])]),e._v(" "),s("p",[s("strong",[e._v("17. Contraseñas guardadas.")])]),e._v(" "),s("p",[s("strong",[e._v("18. Cuentas de Usuario")])]),e._v(" "),s("p",[s("strong",[e._v("Con Aplicaciones de terceros:")])]),e._v(" "),s("p",[s("strong",[e._v("19. Historial de navegación y descargas. Cookies.")])]),e._v(" "),s("p",[s("strong",[e._v("20. Volúmenes cifrados")])]),e._v(" "),s("p",[s("strong",[e._v("Sobre la imagen del disco:")])]),e._v(" "),s("p",[s("strong",[e._v("21. Archivos con extensión cambiada.")])]),e._v(" "),s("p",[s("strong",[e._v("22. Archivos eliminados.")])]),e._v(" "),s("p",[s("strong",[e._v("23. Archivos Ocultos.")])]),e._v(" "),s("p",[s("strong",[e._v("24. Archivos que contienen una cadena determinada.")])]),e._v(" "),s("p",[s("strong",[e._v("25. Búsqueda de imágenes por ubicación.")])]),e._v(" "),s("p",[s("strong",[e._v("26. Búsqueda de archivos por autor.")])]),e._v(" "),s("p",[s("strong",[e._v("Apartado B) Máquina Linux.")])]),e._v(" "),s("p",[s("strong",[e._v("Intenta realizar las mismas operaciones en una máquina Linux para aquellos apartados que tengan sentido y no se realicen de manera idéntica a Windows.")])]),e._v(" "),s("p",[s("strong",[e._v("Apartado C)")])]),e._v(" "),s("p",[s("strong",[e._v("En un dispositivo Android, trata de hacer un volcado de memoria y recuperar información de ubicación, llamadas, mensajes, aplicaciones de mensajería, perfiles en redes sociales, etc...")])]),e._v(" "),s("p",[s("strong",[e._v("Algunos kits de herramientas forenses open-source:")])]),e._v(" "),s("p",[s("strong",[e._v("Caine")]),e._v(" "),s("strong",[e._v("DFF (Digital Forensics Framework)")]),e._v(" "),s("strong",[e._v("The Sleuth Kit")]),e._v(" "),s("strong",[e._v("Helix Live CD")]),e._v(" "),s("strong",[e._v("Digital Evidence and Forensics Toolkit (DEFT)")])]),e._v(" "),s("p",[s("strong",[e._v("Para análisis de memoria:")])]),e._v(" "),s("p",[s("strong",[e._v("Volatility")]),e._v(" "),s("strong",[e._v("Access Data FTK Imager")]),e._v(" "),s("strong",[e._v("MDD")])]),e._v(" "),s("p",[s("strong",[e._v("Para análisis de registro de Windows:")])]),e._v(" "),s("p",[s("strong",[e._v("AccessData Registry Viewer")]),e._v(" "),s("strong",[e._v("Kape")]),e._v(" "),s("strong",[e._v("Fred (Forensic Registry Editor)")])]),e._v(" "),s("p",[s("strong",[e._v("Para análisis de discos duros:")])]),e._v(" "),s("p",[s("strong",[e._v("Autopsy")])]),e._v(" "),s("p",[s("strong",[e._v("Herramientas gratuitas para Android:")])]),e._v(" "),s("p",[s("strong",[e._v("AFLogical OSE")]),e._v(" "),s("strong",[e._v("OSAF (Open Source Android Forensics)")]),e._v(" "),s("strong",[e._v("Andriller")]),e._v(" "),s("strong",[e._v("ADEL (Android Data Extractor Lite)")]),e._v(" "),s("strong",[e._v("WhatsApp Xtract")]),e._v(" "),s("strong",[e._v("Skype Xtractor")]),e._v(" "),s("strong",[e._v("Android Pattern Lock Cracker")])]),e._v(" "),s("p",[s("strong",[e._v("Para saber algo más:")])]),e._v(" "),s("p",[s("strong",[e._v("Cursos básicos de Análisis Forense Linux y Windows en OpenWebinars.")]),e._v("\n**Cursos gratuitos en TryHackMe.**AD")])])}),[],!1,null,null,null);s.default=r.exports}}]);