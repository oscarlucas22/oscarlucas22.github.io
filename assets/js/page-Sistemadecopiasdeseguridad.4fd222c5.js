(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1154:function(e,a,n){"use strict";n.r(a);var s=n(1),o=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sistema-de-copias-de-seguridad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sistema-de-copias-de-seguridad"}},[e._v("#")]),e._v(" Sistema de copias de seguridad")]),e._v(" "),a("h2",{attrs:{id:"descripcion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#descripcion"}},[e._v("#")]),e._v(" Descripción")]),e._v(" "),a("p",[a("strong",[e._v("Implementar un sistema de copias de seguridad para las instancias del cloud, teniendo en cuenta las siguientes características:")])]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Selecciona una aplicación para realizar el proceso: bacula, amanda, shell script con tar, rsync, dar, afio, etc.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Utiliza una de las instancias como servidor de copias de seguridad, añadiéndole un volumen y almacenando localmente las copias de seguridad que consideres adecuadas en él.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("El proceso debe realizarse de forma completamente automática")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Selecciona qué información es necesaria guardar (listado de paquetes, ficheros de configuración, documentos, datos, etc.)")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Realiza semanalmente una copia completa")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Realiza diariamente una copia incremental o diferencial (decidir cual es más adecuada)")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Implementa una planificación del almacenamiento de copias de seguridad para una ejecución prevista de varios años, detallando qué copias completas se almacenarán de forma permanente y cuales se irán borrando")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v('Selecciona un directorio de datos "críticos" que deberá almacenarse cifrado en la copia de seguridad, bien encargándote de hacer la copia manualmente o incluyendo la contraseña de cifrado en el sistema')])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Incluye en la copia los datos de las nuevas aplicaciones que se vayan instalando durante el resto del curso")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Utiliza una ubicación secundaria para almacenar las copias de seguridad. Solicita acceso o la instalación de las aplicaciones que sean precisas.")])])])]),e._v(" "),a("p",[a("strong",[e._v("La corrección consistirá tanto en la restauración puntual de un fichero en cualquier fecha como la restauración completa de una de las instancias la última semana de curso.")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Como ya hemos mencionado antes, la máquina que actuará como director (y cliente) será Delta, que es la máquina en el escenario que también actúa como servidor de base de datos (con MariaDB). Así pues, en dicha máquina instalamos los siguientes paquetes (si no tuviéramos ya instalada la base de datos, también habría que instalarla):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apt install bacula bacula-common-mysql bacula-director-mysql\n")])])]),a("p",[e._v("Durante la instalación nos aparece el siguiente mensaje, al cual responderemos “Yes” para indicar a bacula que vamos a usar MariaDB/MySQL como gestor de base de datos:")]),e._v(" "),a("p",[e._v("Tras esto nos preguntará que contraseña queremos usar para la base de datos de Bacula y finalizará la instalación.")]),e._v(" "),a("p",[e._v("Ahora vamos a tener que configurar a “Delta” como director de Bacula, para lo cual tendremos que tocar el fichero de configuración, ubicado en "),a("code",[e._v("/etc/bacula/bacula-dir.conf")]),e._v(". En este fichero hay varios bloques de información, por lo que vamos a ir definiendo un poco cada uno:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano /etc/bacula/bacula-dir.conf\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Director {                             \n Name = Delta-dir\n DIRport = 9101                 \n QueryFile = "/etc/bacula/scripts/query.sql"\n WorkingDirectory = "/var/lib/bacula"\n PidDirectory = "/run/bacula"\n Maximum Concurrent Jobs = 20\n Password = "******"          \n Messages = Daemon\n DirAddress = 192.168.0.3\n}\n')])])]),a("p",[e._v("Pasemos al segundo bloque de configuración:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('JobDefs {\n Name = "DefaultJob"\n Type = Backup\n Level = Incremental\n Client = Delta-fd\n FileSet = "Full Set"\n Schedule = "WeeklyCycle"\n Storage = File1\n Messages = Standard\n Pool = File\n SpoolAttributes = yes\n Priority = 10\n Write Bootstrap = "/var/lib/bacula/%c.bsr"\n}\n')])])]),a("p",[e._v("Una vez explicadas cada una de las opciones que aparecen por defecto, vamos a crear tres bloques diferentes de “JobDefs”, uno para cada tipo de copia (diaria, semanal y mensual):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('# Copia diaria\nJobDefs {\n Name = "CopiaDiaria"\n Type = Backup\n Level = Incremental\n Client = Delta-fd\n FileSet = "Full Set"\n Schedule = "Daily"\n Storage = volcopias\n Messages = Standard\n Pool = Daily\n SpoolAttributes = yes\n Priority = 10\n Write Bootstrap = "/var/lib/bacula/%c.bsr"\n}\n\n# Copia semanal\nJobDefs {\n Name = "CopiaSemanal"\n Type = Backup\n Level = Full\n Client = Delta-fd\n FileSet = "Full Set"\n Schedule = "Weekly"\n Storage = volcopias\n Messages = Standard\n Pool = Weekly\n SpoolAttributes = yes\n Priority = 10\n Write Bootstrap = "/var/lib/bacula/%c.bsr"\n}\n\n# Copia mensual\nJobDefs {\n Name = "CopiaMensual"\n Type = Backup\n Level = Full\n Client = Delta-fd\n FileSet = "Full Set"\n Schedule = "Monthly"\n Storage = volcopias\n Messages = Standard\n Pool = Monthly\n SpoolAttributes = yes\n Priority = 10\n Write Bootstrap = "/var/lib/bacula/%c.bsr"\n}\n')])])]),a("p",[e._v("Con esto hemos terminado de definir las plantillas para cada tipo de copia. A continuación tendremos que crear los “Jobs” que harán uso de estas plantillas (y otras que crearemos más adelante). Por cada cliente vamos a crear tres “Jobs” (uno por cada tipo de copia):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('# Copias\n\n# Delta\nJob {\n Name = "Delta-Diario"\n Client = "delta-fd"\n JobDefs = "CopiaDiaria"\n FileSet= "Delta-Datos"\n}\n\nJob {\n Name = "Delta-Semanal"\n Client = "delta-fd"\n JobDefs = "CopiaSemanal"\n FileSet= "Delta-Datos"\n}\n\nJob {\n Name = "Delta-Mensual"\n Client = "delta-fd"\n JobDefs = "CopiaMensual"\n FileSet= "Delta-Datos"\n}\n\n# Charlie\nJob {\n Name = "Charlie-Diario"\n Client = "charlie-fd"\n JobDefs = "CopiaDiaria"\n FileSet= "Charlie-Datos"\n}\n\nJob {\n Name = "Charlie-Semanal"\n Client = "charlie-fd"\n JobDefs = "CopiaSemanal"\n FileSet= "Charlie-Datos"\n}\n\nJob {\n Name = "Charlie-Mensual"\n Client = "charlie-fd"\n JobDefs = "CopiaMensual"\n FileSet= "Charlie-Datos"\n}\n\n# Bravo\nJob {\n Name = "Bravo-Diario"\n Client = "bravo-fd"\n JobDefs = "CopiaDiaria"\n FileSet= "Bravo-Datos"\n}\n\nJob {\n Name = "Bravo-Semanal"\n Client = "bravo-fd"\n JobDefs = "CopiaSemanal"\n FileSet= "Bravo-Datos"\n}\n\nJob {\n Name = "Bravo-Mensual"\n Client = "bravo-fd"\n JobDefs = "CopiaMensual"\n FileSet= "Bravo-Datos"\n}\n\n# Alfa\nJob {\n Name = "Alfa-Diario"\n Client = "alfa-fd"\n JobDefs = "CopiaDiaria"\n FileSet= "Alfa-Datos"\n}\n\nJob {\n Name = "Alfa-Semanal"\n Client = "alfa-fd"\n JobDefs = "CopiaSemanal"\n FileSet= "Alfa-Datos"\n}\n\nJob {\n Name = "Alfa-Mensual"\n Client = "alfa-fd"\n JobDefs = "CopiaMensual"\n FileSet= "Alfa-Datos"\n}\n')])])]),a("p",[e._v("Ahora que hemos creado las tareas de realización de las copias de seguridad, tenemos que realizar también las tareas para que se realice la restauración de los datos si fuera necesario:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('# Restauración datos\n\n# Delta\nJob {\n Name = "DeltaRestore"\n Type = Restore\n Client=delta-fd\n Storage = volcopias\n FileSet="Delta-Datos"\n Pool = Backup-Restore\n Messages = Standard\n}\n\n# Charlie\nJob {\n Name = "CharlieRestore"\n Type = Restore\n Client=charlie-fd\n Storage = volcopias\n FileSet="Charlie-Datos"\n Pool = Backup-Restore\n Messages = Standard\n}\n\n# Bravo\nJob {\n Name = "Bravolfatore"\n Type = Restore\n Client=bravo-fd\n Storage = volcopias\n FileSet="Bravo-Datos"\n Pool = Backup-Restore\n Messages = Standard\n}\n\n# Alfa\nJob {\n Name = "AlfaRestore"\n Type = Restore\n Client=alfa-fd\n Storage = volcopias\n FileSet="Alfa-Datos"\n Pool = Backup-Restore\n Messages = Standard\n}\n')])])]),a("p",[e._v("Ahora crearemos en el mismo fichero los bloques que harán refencia a los datos que serán copiados, y si estarán comprimidos o no. Crearemos un bloque por cliente, y un bloque general que será usado si no definimos de forma concreta en los “Jobs” que bloque usar:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('# Full Set\nFileSet {\n Name = "Full Set"\nInclude {\nOptions {\n    signature = MD5\n    compression = GZIP\n}\n File = /home\n File = /etc\n File = /var\n File = /usr/share\n File = /usr/local/nagios\n}\nExclude {\n    File = /var/lib/bacula\n    File = /nonexistant/path/to/file/archive/dir\n    File = /proc\n    File = /etc/fstab\n    File = /var/run/systemd/generator\n    File = /tmp\n    File = /sys\n    File = /.journal\n    File = /.fsck\n}\n}\n\n# Alfa\nFileSet {\n Name = "Alfa-Datos"\nInclude {\nOptions {\n    signature = MD5\n    compression = GZIP\n}\n File = /home\n File = /etc\n File = /var\n File = /usr/share\n File = /usr/local/nagios \n}\nExclude {\n File = /var/lib/bacula\n File = /nonexistant/path/to/file/archive/dir\n File = /proc\n File = /etc/fstab\n File = /var/run/systemd/generator\n File = /var/cache\n File = /var/tmp\n File = /tmp\n File = /sys\n File = /.journal\n File = /.fsck\n}\n}\n\n# Delta\nFileSet {\n Name = "Delta-Datos"\nInclude {\nOptions {\n    signature = MD5\n    compression = GZIP\n}\n File = /home\n File = /etc\n File = /var\n File = /opt\n File = /usr/share\n File = /usr/local/nagios\n}\nExclude {\n File = /nonexistant/path/to/file/archive/dir\n File = /proc\n File = /var/cache\n File = /var/tmp\n File = /etc/fstab\n File = /var/run/systemd/generator\n File = /tmp\n File = /sys\n File = /.journal\n File = /.fsck\n}\n}\n\n# Charlie (no he excluido /var/cache ya que Charlie tiene los datos del dns guardados ahí)\nFileSet {\n Name = "Charlie-Datos"\nInclude {\nOptions {\n    signature = MD5\n    compression = GZIP\n}\n File = /home\n File = /etc\n File = /var\n File = /opt\n File = /usr/share\n File = /usr/local/nagios\n}\nExclude {\n File = /var/lib/bacula\n File = /nonexistant/path/to/file/archive/dir\n File = /proc\n File = /etc/fstab\n File = /var/run/systemd/generator\n File = /var/tmp\n File = /tmp\n File = /sys\n File = /.journal\n File = /.fsck\n}\n}\n\n# Bravo (no he excluido /var/cache ya que Bravo tiene los datos de la pagina web guardados ahí)\nFileSet {\n Name = "Bravo-Datos"\nInclude {\nOptions {\n    signature = MD5\n    compression = GZIP\n}\n File = /home\n File = /etc\n File = /var\n File = /usr/share\n File = /usr/local/nagios\n File = /run/nagios.lock\n}\nExclude {\n File = /var/lib/bacula\n File = /nonexistant/path/to/file/archive/dir\n File = /proc\n File = /etc/fstab\n File = /var/run/systemd/generator\n File = /var/tmp\n File = /tmp\n File = /sys\n File = /.journal\n File = /.fsck\n}\n}\n')])])]),a("p",[e._v("Ahora tenemos que crear los bloques “Schedule”, a los que hemos hecho referencia anteriormente, y que definirán cada cuando se realizarán los trabajos:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Schedule {\n Name = "Daily"\n Run = Level=Incremental Pool=Daily daily at 12:00\n}\n\nSchedule {\n Name = "Weekly"\n Run = Level=Full Pool=Weekly mon at 12:00\n}\n\nSchedule {\n Name = "Monthly"\n Run = Level=Full Pool=Monthly 1st mon at 12:00\n}\n')])])]),a("p",[e._v("A continuación vamos a definir los bloques “Client”, en los cuales definiremos los datos de los clientes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('# Delta\nClient {\n Name = Delta-fd\n Address = 192.168.0.3\n FDPort = 9102\n Catalog = MyCatalog\n Password = "bacula"\n File Retention = 60 days\n Job Retention = 6 months\n AutoPrune = yes\n}\n\n# Charlie\nClient {\n Name = Charlie-fd\n Address = 192.168.0.2\n FDPort = 9102\n Catalog = MyCatalog\n Password = "bacula"\n File Retention = 60 days\n Job Retention = 6 months\n AutoPrune = yes\n}\n\n# Bravo\nClient {\n Name = Bravo-fd\n Address = 172.16.0.200\n FDPort = 9102\n Catalog = MyCatalog\n Password = "bacula"\n File Retention = 60 days\n Job Retention = 6 months\n AutoPrune = yes\n}\n\n# Alfa\nClient {\n Name = Alfa-fd\n Address = 192.168.0.1\n FDPort = 9102\n Catalog = MyCatalog\n Password = "bacula"\n File Retention = 60 days\n Job Retention = 6 months\n AutoPrune = yes\n}\n')])])]),a("p",[e._v("Una vez definidos los clientes, vamos a hacer lo mismo con el bloque “Storage”, en el cuál especificaremos el tipo de almacenamiento que vamos a tener:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Storage {\n Name = volcopias\n Address = 192.168.0.3\n SDPort = 9103\n Password = "bacula"\n Device = FileChgr1\n Media Type = File\n Maximum Concurrent Jobs = 10\n}\n')])])]),a("p",[e._v("A continuación está el bloque “Catalog”, en el cual simplemente describiremos las credenciales de la base de datos que usaremos:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Catalog {\n Name = MyCatalog\n dbname = "bacula"; DB Address = "localhost"; DB Port= "3306"; dbuser = "bacula"; dbpassword = "bacula"\n}\n')])])]),a("p",[e._v("Por último, tenemos el bloque “Pool” en este fichero:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Pool {\n Name = Daily\n Pool Type = Backup\n Recycle = yes\n AutoPrune = yes\n Volume Retention = 8d\n}\n\nPool {\n Name = Weekly\n Pool Type = Backup\n Recycle = yes\n AutoPrune = yes\n Volume Retention = 32d\n}\n\nPool {\n Name = Monthly\n Pool Type = Backup\n Recycle = yes\n AutoPrune = yes\n Volume Retention = 365d\n}\n\nPool {\n Name = Backup-Restore\n Pool Type = Backup\n Recycle = yes\n AutoPrune = yes\n Volume Retention = 366 days\n Maximum Volume Bytes = 50G\n Maximum Volumes = 100\n Label Format = "Remoto"\n}\n')])])]),a("p",[e._v("Con esto hemos finalizado con el fichero "),a("code",[e._v("/etc/bacula/bacula-dir.conf")]),e._v(". Podemos comprobar si hay algún error de configuración ejecutando el siguiente comando:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("bacula-dir -tc /etc/bacula/bacula-dir.conf\n")])])]),a("p",[e._v("Si no nos indica ningún error podemos continuar. Antes de continuar añadiendo configuración, crear el volumen donde vamos a guardar las copias de seguridad y darle formato. En mi caso, he decidido crear un volumen de 20GB y anexarlo en Delta.")]),e._v(" "),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Como vemos, aunque el volumen se encuentre anexado, aun no tiene particiones ni tiene formato. Así pues, he decidido crear una única partición en la que se almacenarán las copias y darle un sistema de ficheros “BTRFS”. He elegido este sistema de ficheros ya que se encargará de comprimir automáticamente las copias de seguridad, además de intentar corregir cualquier tipo de corrupción en los ficheros si se diera el caso. También posee otras características que nos serán bastante útiles.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("gdisk /dev/vdb\n\nn\n\nw\n\ny\n")])])]),a("p",[e._v("Ahora con la partición creada, podemos darle el sistema de ficheros que hemos indicado anteriormente. Para ello, primero instalamos los paquetes necesarios:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apt install btrfs-progs\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mkfs.btrfs /dev/vdb1\nbtrfs-progs v5.4.1 \nSee http://btrfs.wiki.kernel.org for more information.\n\nLabel:              (null)\nUUID:               17177d8b-3392-4055-9850-f9802452b5ba\nNode size:          16384\nSector size:        4096\nFilesystem size:    20.00GiB\nBlock group profiles:\nData:             single            8.00MiB\nMetadata:         DUP             256.00MiB\nSystem:           DUP               8.00MiB\nSSD detected:       no\nIncompat features:  extref, skinny-metadata\nChecksum:           crc32c\nNumber of devices:  1\nDevices:\nID        SIZE  PATH\n    1    20.00GiB  /dev/vdb1\n")])])]),a("p",[e._v("Ahora, como nos interesa que el volumen se monte cada vez que el sistema arranque, debemos crear una unidad systemd que se encargue de ello. Para ello, primero vamos a crear el directorio en el que queremos que se monte automáticamente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mkdir -p /bacula\n\nchown -R bacula:bacula /bacula/\n\nchmod 755 -R /bacula\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ls -l /\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Ahora creamos la unidad systemd:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano /etc/systemd/system/bacula.mount\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("[Unit]\nDescription=Volumen de copias de seguridad   \n\n[Mount]\nWhat=/dev/disk/by-uuid/17177d8b-3392-4055-9850-f9802452b5ba\nWhere=/bacula  \nType=btrfs\nOptions=defaults,compress=zlib\n\n[Install]\nWantedBy=multi-user.target\n")])])]),a("p",[e._v("Y lo habilitamos:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl enable bacula.mount\n")])])]),a("p",[e._v("Probamos a reinicar ares y comprobar si monta el dispositivo automáticamente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("reboot\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("lsblk -f\n")])])]),a("p",[e._v("Como vemos lo ha montado correctamente. Ahora crearemos un directorio dentro del volumen en el cual almacenaremos las copias de seguridad:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mkdir /bacula/backup\n\nchown -R bacula:bacula /bacula/\n\nchmod 755 -R /bacula\n")])])]),a("p",[e._v("Con el volumen y el directorio creados y listos, podemos pasar a configurar el fichero /etc/bacula/bacula-sd.conf, en el cual definiremos el almacenamiento que usaremos. En este fichero vamos a tener que crear también varios bloques de información, por lo que iremos explicando uno por uno las diferentes opciones que poseen:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Storage {\n Name = ares-sd\n SDPort = 9103\n WorkingDirectory = "/var/lib/bacula"\n Pid Directory = "/run/bacula"\n Plugin Directory = "/usr/lib/bacula"\n Maximum Concurrent Jobs = 20\n SDAddress = 10.0.1.101\n}\n')])])]),a("p",[e._v("A continuación crearemos dos bloques “Director”, uno para indicar que directores están autorizados a ejecutar el demonio de almacenamiento y otro para indicar los directores que están autorizados a monitorizar el almacenamiento:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Director {\n  Name = ares-dir\n  Password = "bacula"\n}\n\nDirector {\n  Name = ares-mon\n  Password = "bacula"\n  Monitor = yes\n}\n')])])]),a("p",[e._v("Por último, están los bloques “Autochanger” y “Device”, al cual hicimos referencia en el otro fichero, y el cual configuraremos para que guarde las copias de seguridad en el volumen que creamos y montamos anteriormente (la mayoría de parámetros los he dejado por defecto):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Autochanger {\n  Name = FileChgr1\n  Device = FileStorage\n  Changer Command = ""\n  Changer Device = /dev/null\n}\n\nDevice {\n  Name = FileStorage\n  Media Type = File\n  Archive Device = /bacula/backup\n  LabelMedia = yes;\n  Random Access = Yes;\n  AutomaticMount = yes;\n  RemovableMedia = no;\n  AlwaysOpen = no;\n  Maximum Concurrent Jobs = 5\n}\n')])])]),a("p",[e._v("Ahora que hemos terminado con este fichero, comprobemos que no hay errores usando el siguiente comando:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("bacula-sd -tc /etc/bacula/bacula-sd.conf\n")])])]),a("p",[e._v("Si no nos indica ningún error podemos continuar. Así pues, reiniciaremos los servicios que hemos configurado para aplicar los cambios, y los habilitaremos si no lo están ya para que se inicien automáticamente en el arranque:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl restart bacula-sd.service\nsystemctl enable bacula-sd.service\nsystemctl restart bacula-director.service\nsystemctl enable bacula-director.service\n")])])]),a("p",[e._v("Ahora, en la parte del director solo nos queda configurar un fichero. Ese fichero es /etc/bacula/bconsole.conf, y en él tendremos la configuración para poder acceder a la consola del director. En este fichero solo tenemos que modificar el bloque “Director”, para indicarle que máquina será el director (ella misma):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Director {\n  Name = ares-dir\n  DIRport = 9101\n  address = 10.0.1.101\n  Password = "bacula"\n}\n')])])]),a("p",[e._v("Como ya hemos explicado antes cada uno de esos parámetros, no veo necesario repetirlos. Con esto hemos terminado de configurar el director. Así pues, podemos pasar a configurar los clientes. En cada cliente se repetiran los mismos pasos (salvo en Hera, ya que al ser una máquina con un SO Rocky, tiene incorporado un cortafuegos, por lo que tendremos que abrir los puertos necesarios):")]),e._v(" "),a("ul",[a("li",[e._v("En Ares:")])]),e._v(" "),a("p",[e._v("Como Ares es a la vez director y cliente, tenemos que crear también en él su fichero de configuración de cliente. De esta forma, empezamos por instalar el sofware necesario (que Ares ya lo tiene por ser el director):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apt install bacula-client\n")])])]),a("p",[e._v("Habilitamos el servicio para que arranque en cada inicio:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl enable bacula-fd.service\n")])])]),a("p",[e._v("Ahora configuraremos el cliente en el fichero "),a("code",[e._v("/etc/bacula/bacula-fd.conf")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Director {\n  Name = ares-dir\n  Password = "bacula"\n}\n\nDirector {\n  Name = ares-mon\n  Password = "bacula"\n  Monitor = yes\n}\n\nFileDaemon {\n  Name = ares-fd\n  FDport = 9102\n  WorkingDirectory = /var/lib/bacula\n  Pid Directory = /run/bacula\n  Maximum Concurrent Jobs = 20\n  Plugin Directory = /usr/lib/bacula\n  FDAddress = 10.0.1.101\n}\n\nMessages {\n  Name = Standard\n  director = ares-dir = all, !skipped, !restored\n}\n')])])]),a("p",[e._v("Cada uno de estos parámetros ha sido definido anteriormente, por lo que no veo la necesidad de volver a explicarlos.")]),e._v(" "),a("p",[e._v("Reiniciamos el servico para aplicar los cambios y habríamos terminado con este cliente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl restart bacula-fd.service\n")])])]),a("ul",[a("li",[e._v("En Apolo:")])]),e._v(" "),a("p",[e._v("Al igual que Ares, instalamos los paquetes necesarios:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apt install bacula-client\n")])])]),a("p",[e._v("Habilitamos el servicio para que arranque en cada inicio:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl enable bacula-fd.service\n")])])]),a("p",[e._v("Configuramos el fichero de cliente (/etc/bacula/bacula-fd.conf):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Director {\n  Name = ares-dir\n  Password = "bacula"\n}\n\nDirector {\n  Name = ares-mon\n  Password = "bacula"\n  Monitor = yes\n}\n\nFileDaemon {\n  Name = apolo-fd\n  FDport = 9102\n  WorkingDirectory = /var/lib/bacula\n  Pid Directory = /run/bacula\n  Maximum Concurrent Jobs = 20\n  Plugin Directory = /usr/lib/bacula\n  FDAddress = 10.0.1.102\n}\n\nMessages {\n  Name = Standard\n  director = ares-dir = all, !skipped, !restored\n}\n')])])]),a("p",[e._v("Y reiniciamos el servicio para aplicar los cambios:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl restart bacula-fd.service\n")])])]),a("ul",[a("li",[e._v("En Zeus:")])]),e._v(" "),a("p",[e._v("Al igual que antes, instalamos los paquetes necesarios:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apt install bacula-client\n")])])]),a("p",[e._v("Habilitamos el servicio para que arranque en cada inicio:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl enable bacula-fd.service\n")])])]),a("p",[e._v("Configuramos el fichero de cliente "),a("code",[e._v("/etc/bacula/bacula-fd.conf")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Director {\n  Name = ares-dir\n  Password = "bacula"\n}\n\nDirector {\n  Name = ares-mon\n  Password = "bacula"\n  Monitor = yes\n}\n\nFileDaemon {\n  Name = zeus-fd\n  FDport = 9102\n  WorkingDirectory = /var/lib/bacula\n  Pid Directory = /run/bacula\n  Maximum Concurrent Jobs = 20\n  Plugin Directory = /usr/lib/bacula\n  FDAddress = 10.0.1.1\n}\n\nMessages {\n  Name = Standard\n  director = ares-dir = all, !skipped, !restored\n}\n')])])]),a("p",[e._v("Y reiniciamos el servicio para aplicar los cambios:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl restart bacula-fd.service\n")])])]),a("ul",[a("li",[e._v("En Hera:")])]),e._v(" "),a("p",[e._v("Al igual que antes, instalamos los paquetes necesarios:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("dnf install bacula-client\n")])])]),a("p",[e._v("Habilitamos el servicio para que arranque en cada inicio:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl enable bacula-fd.service\n")])])]),a("p",[e._v("Configuramos el fichero de cliente "),a("code",[e._v("/etc/bacula/bacula-fd.conf")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Director {\n  Name = ares-dir\n  Password = "bacula"\n}\n\nDirector {\n  Name = ares-mon\n  Password = "bacula"\n  Monitor = yes\n}\n\nFileDaemon {\n  Name = hera-fd\n  FDport = 9102\n  WorkingDirectory = /var/spool/bacula\n  Pid Directory = /var/run\n  Maximum Concurrent Jobs = 20\n  Plugin Directory = /usr/lib64/bacula\n}\n\nMessages {\n  Name = Standard\n  director = ares-dir = all, !skipped, !restored\n}\n')])])]),a("p",[e._v("Y reiniciamos el servicio para aplicar los cambios:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl restart bacula-fd.service\n")])])]),a("p",[e._v("No debemos olvidar, que al ser una máquina Rocky, debemos habilitar en el cortafuegos que trae por defecto los puertos necesarios:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("firewall-cmd --permanent --add-port=9101/tcp\n\nfirewall-cmd --permanent --add-port=9102/tcp\n\nfirewall-cmd --permanent --add-port=9103/tcp\n\nfirewall-cmd --reload\n")])])]),a("p",[e._v("Con esto hemos terminado en Hera.")]),e._v(" "),a("p",[e._v("Con esto ya hemos terminado de configurar todos los clientes. Ahora entremos en la consola del director y veamos si puede conectarse con todas las máquinas (reiniciamos los servicios para que vuelva a intentar conectarse):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl restart bacula-fd.service\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl restart bacula-sd.service\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl restart bacula-director.service\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("bconsole\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Como vemos, ha podido conectarse con todos los clientes, por lo que solo nos queda crear los nodos de almacenamiento donde se guardarán las diferentes copias:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("bconsole\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Pasado un tiempo, se habrán hecho varias copias de seguridad:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("*listjobs\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Como vemos se han creado múltiples copias con el paso de tiempo. Uno de los directorios de los que hemos copia está cifrado. Dentro de zeus, para hacer dicho cifrado, hemos ejecutado lo siguiente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('gpgtar --encrypt --symmetric --output top-secret.gpg --gpg-args="--passphrase=secreto --batch" top-secret\n')])])]),a("p",[e._v("Esto generará un fichero .gpg, qué será guardado junto con las copias de seguridad. Para desencriptarlo, una vez que hayamos restaurado la copia, ejecutamos lo siguiente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mkdir nosecreto\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('gpgtar --decrypt --directory nosecreto --gpg-args="--passphrase=secreto --batch" top-secret.gpg\n')])])]),a("p",[e._v("De esta forma podemos hacer copias y restaurarlas sobre directorios cifrados. Explicado esto, vamos a indicar como restaurar las copias de seguridad usando el director de bacula. Para ello, vamos a restaurar, por ejemplo, a la máquina zeus (antes hemos tenido que configurar las redes y el cliente bacula en zeus). Así pues, entramos en la consola de bacula y ejecutamos lo siguiente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("*restore client=zeus-fd all\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Hemos puesto "),a("code",[e._v("all")]),e._v(" al final del nombre del cliente para indicar que queremos recuperar todos los ficheros. Una vez hecho eso, nos da varias opciones de restauración. En nuestro caso, como suponemos que hemos perdido la máquina origen, elegimos la número 5, que restaurará la copia más reciente:")]),e._v(" "),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Como antes hemos indicado all al seleccionar el cliente, en este paso podemos indicar done, ya que hemos indicado al principio que queremos restaurar todos los ficheros:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("done\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Ahora elegimos el trabajo de recuperación que queremos usar. Como estamos con zeus, elegiremos el 4:")]),e._v(" "),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Ya solo debemos indicarle que empiece, y el trabajo se añadirá a la cola y se ejecutará. Pasado un tiempo, el trabajo finalizará:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("*status client=zeus-fd\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Una vez que hemos finalizado aquí, en la máquina destino ya estarían todos los ficheros que hemos restaurado, incluyendo la configuración de los servicios. Como hemos guardado la lista de paquetes instalados (al haber hecho copia del directorio /var), para reinstalar todos los paquetes ejecutamos lo siguiente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apt reinstall ~i\n")])])]),a("p",[e._v("Si fuera hera, el comando sería el siguiente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("dnf reinstall \\*\n")])])]),a("p",[e._v("Tras un tiempo, todos los paquetes se habrán instalado otra vez y tras un reinicio, la máquina volverá a estar completamente operativa. Los pasos a seguir serían los mismos en Hera y Apolo, con la excepción de que en Apolo, la configuración de LDAP no se guarda correctamente, por lo que en la copia he exportado la configuración manualmente:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("slapcat -n 0 -l config_slapd.ldif\n")])])]),a("p",[e._v("Dicho fichero contiene toda la configuración de LDAP, por lo que al restaurar Apolo, solo tendremos que reinsertar la configuración a mano y reiniciar el servicio. Con esto podemos dar por finalizada la explicación de como realizar las copias y restaurarlas. Sin embargo, queda la problemática del almacenamiento de las copias a largo plazo. Actualmente tenemos hechas muchas copias, ya la mayoría son muy parecidas, ya que no hemos implementado nuevas funciones en nuestro escenario. No obstante, y con una previsión de futuro, habrá que guardar de forma permanente algunas copias, para poder restaurar el escenario si es necesario. Las copias que se guardarán de forma permanente serán aquellas que se realicen tras una implementación de un nuevo servicio en el escenario, además de una copia completa cada 3 meses que se guardará de forma permanente, para que podamos recuperar los datos de las aplicaciones de forma trimestral.")])])}),[],!1,null,null,null);a.default=o.exports}}]);