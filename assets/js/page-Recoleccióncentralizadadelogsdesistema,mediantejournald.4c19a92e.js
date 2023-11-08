(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1141:function(e,a,o){"use strict";o.r(a);var s=o(1),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"recoleccion-centralizada-de-logs-de-sistema-mediante-journald"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recoleccion-centralizada-de-logs-de-sistema-mediante-journald"}},[e._v("#")]),e._v(" Recolección centralizada de logs de sistema, mediante journald.")]),e._v(" "),a("p",[e._v('Lo primero que hare es instalar en cada maquina "systemd-journal-remote", con el siguiente comando:')]),e._v(" "),a("p",[a("strong",[e._v("Alfa, Charlie, Delta")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo apt install systemd-journal-remote\n")])])]),a("p",[a("strong",[e._v("Bravo")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo dnf install systemd-journal-remote\n")])])]),a("p",[a("em",[a("strong",[e._v("El servidor que contenga los logs sera Alfa")])])]),e._v(" "),a("p",[e._v("Como https no lo utilizare para la comunicacion, desactivare dicha la opcion en el fichero "),a("code",[e._v("/lib/systemd/system/systemd-journal-remote.service")])]),e._v(" "),a("p",[e._v("Para ello editare el fichero y cambiare el "),a("code",[e._v("https")]),e._v(" por "),a("code",[e._v("http")]),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:o(890),alt:"image"}})]),e._v(" "),a("p",[a("img",{attrs:{src:o(891),alt:"image"}})]),e._v(" "),a("p",[a("img",{attrs:{src:o(892),alt:"image"}})]),e._v(" "),a("p",[e._v("Le asignamos el propietario correspondiente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo chown systemd-journal-remote:systemd-journal-remote /var/log/journal/remote/\n")])])]),a("p",[a("strong",[e._v("Nota")]),e._v(': Si el fichero "/var/log/journal/remote" no existe lo crearemos')]),e._v(" "),a("p",[e._v("Una vez tenga el servidor receptor configurado, lo siguiente sera configurar cada cliente para hacer que envie sus logs.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Los servidores que enviaran los logs seran: Bravo, Charlie y Delta")])])]),e._v(" "),a("p",[e._v('En cada cliente creare un usuarios llamado systemd-journal-upload, con el "home" en "/run/systemd", con el login deshabilitado y en el grupo systemd-journal-upload:')]),e._v(" "),a("p",[a("strong",[e._v("Bravo")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo adduser --system --home-dir /run/systemd --no-create-home --user-group systemd-journal-upload\n")])])]),a("p",[a("strong",[e._v("Charlie y Delta")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo adduser --system --home /run/systemd --no-create-home --disabled-login --group systemd-journal-upload\n")])])]),a("p",[e._v("Tras crear los usuarios, modificaremos la configuraciondel fichero "),a("code",[e._v("/etc/systemd/journal-upload.conf")]),e._v(" para que los clientes envien los logs a Alfa. Con el comando "),a("code",[e._v("sed")]),e._v(" cambiare la linea "),a("code",[e._v("# URL=")]),e._v(" para que contenga la direccion y el puerto de Alfa:")]),e._v(" "),a("p",[e._v("++Bravo, Charlie y Delta**")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo sed -i 's/# URL=/URL=http:\\/\\/alfa.olucas.gonzalonazareno.org:19532/g' /etc/systemd/journal-upload.conf \n")])])]),a("p",[a("img",{attrs:{src:o(893),alt:"image"}})]),e._v(" "),a("p",[a("img",{attrs:{src:o(894),alt:"image"}})]),e._v(" "),a("p",[a("img",{attrs:{src:o(895),alt:"image"}})]),e._v(" "),a("p",[e._v("Una vez hecho esto reiniciaremos el servicio "),a("code",[e._v("systemd-journal-upload")]),e._v(" en cada cliente:")]),e._v(" "),a("p",[a("strong",[e._v("Bravo, Charlie, Delta")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo systemctl restart systemd-journal-upload.service\n")])])]),a("h3",{attrs:{id:"comprobacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comprobacion"}},[e._v("#")]),e._v(" Comprobación")]),e._v(" "),a("p",[e._v("Si ahora comprobamos el directorio "),a("code",[e._v("/var/log/journal/remote")]),e._v(" en Alfa, podremos ver como se han creado los archivos de logs de los clientes, con el nombre "),a("code",[e._v("remote-IpCliente.journal")]),e._v(":")]),e._v(" "),a("p",[a("strong",[e._v("Nota")]),e._v(": Si aparecen solo dos (normalmente es Charlie el que no aparece), hay que añadir en el fichero \"/etc/hosts\" '192.168.0.1 alfa.olucas.gonzalonazareno.org alfa'")]),e._v(" "),a("p",[a("img",{attrs:{src:o(896),alt:"image"}})]),e._v(" "),a("p",[e._v('Para comprobar que los logs se estan enviando correctamente, usare el comando "journalctl"  para ver los de cada cliente')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo journalctl --file /var/log/journal/remote-IpCliente.journal\n")])])]),a("p",[a("strong",[e._v("Bravo")]),e._v(" "),a("img",{attrs:{src:o(897),alt:"image"}})]),e._v(" "),a("p",[a("strong",[e._v("Charlie")]),e._v(" "),a("img",{attrs:{src:o(898),alt:"image"}})]),e._v(" "),a("p",[a("strong",[e._v("Delta")]),e._v(" "),a("img",{attrs:{src:o(899),alt:"image"}})]),e._v(" "),a("p",[e._v("Se puede observar que los logs estan llegando correctamente a Alfa por lo que el sistema de recoleccion de logs esta funcionando perfectamente.")])])}),[],!1,null,null,null);a.default=r.exports},890:function(e,a,o){e.exports=o.p+"assets/img/1-logs.373d1095.png"},891:function(e,a,o){e.exports=o.p+"assets/img/2-logs.22021bb5.png"},892:function(e,a,o){e.exports=o.p+"assets/img/3-logs.bd0c8310.png"},893:function(e,a,o){e.exports=o.p+"assets/img/4-logs.47e7b1cb.png"},894:function(e,a,o){e.exports=o.p+"assets/img/5-logs.55a357c7.png"},895:function(e,a,o){e.exports=o.p+"assets/img/6-logs.1881c364.png"},896:function(e,a,o){e.exports=o.p+"assets/img/7-logs.bd01ee43.png"},897:function(e,a,o){e.exports=o.p+"assets/img/8-logs.09fb330a.png"},898:function(e,a,o){e.exports=o.p+"assets/img/9-logs.f0f21b58.png"},899:function(e,a,o){e.exports=o.p+"assets/img/10-logs.d18ba75c.png"}}]);