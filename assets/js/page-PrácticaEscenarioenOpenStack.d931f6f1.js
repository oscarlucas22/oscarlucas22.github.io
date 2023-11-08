(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1148:function(a,e,s){"use strict";s.r(e);var n=s(1),t=Object(n.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"practica-escenario-en-openstack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#practica-escenario-en-openstack"}},[a._v("#")]),a._v(" Práctica: Escenario en OpenStack")]),a._v(" "),e("p",[a._v("De aquí saque las cosas de esta "),e("a",{attrs:{href:"https://fp.josedomingo.org/sri2223/4_iaas/practica.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("práctica"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("h1",{attrs:{id:"instalacion-de-las-instancias-de-openstack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instalacion-de-las-instancias-de-openstack"}},[a._v("#")]),a._v(" Instalación de las instancias de OpenStack.")]),a._v(" "),e("hr"),a._v(" "),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("1.")])]),a._v(" "),e("strong",[a._v("Crea una red interna que se llame Red DMZ de tu_usuario, con las siguientes características:")])],1),a._v(" "),e("ul",[e("li",[e("p",[e("strong",[a._v("Direccionamiento: 172.16.0.0/16")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Con DHCP y DNS (192.168.202.2).")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("La puerta de enlace de los dispositivos conectados a esta red será el 172.16.0.1.")])])])]),a._v(" "),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack network create Red-DMZ-de-olucas\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack subnet create --network Red-DMZ-de-olucas --subnet-range 172.16.0.0/16 subnet-DMZ --dhcp --dns-nameserver 192.168.202.2 --gateway 172.16.0.1\n")])])]),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("2.")])]),a._v(" "),e("strong",[a._v("Las dos instancias que vamos a crear se van a configurar con cloud-init de la siguiente manera:")])],1),a._v(" "),e("ul",[e("li",[e("p",[e("strong",[a._v("Deben actualizar los paquetes de la distribución de la instancia.")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("El dominio utilizado será del tipo tunombre.gonzalonazareno.org. Por lo tanto en la configuración con cloud-init habrá que indicar el hostname y el FQDN.")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Se crearán dos usuarios:")])]),a._v(" "),e("ul",[e("li",[e("p",[e("strong",[a._v("Un usuario sin privilegios. Se puede llamar como quieras (pero el nombre será el mismo en todas las máquinas) y accederás a las máquinas usando tu clave ssh privada.")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Un usuario profesor, que puede utilizar sudo sin contraseña. Copia de las claves públicas de todos los profesores en las instancias para que puedan acceder con el usuario profesor.")])])])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Cambia la contraseña al usuario root.")])])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Por aquí dejo mi cloud-init:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("#cloud-config\n#Actualización de paquetes\npackage_update: true\npackage_upgrade: true\n#Configuración de hostname\npreserve_hostname: false\nfqdn: alfa.olucas.gonzalonazareno.org\nhostname: alfa\n# Crear usuarios con clave pública ssh\nusers:\n- name: profesor\nsudo: ALL=(ALL) NOPASSWD:ALL\nshell: /bin/bash\npasswd: profesor\nssh_authorized_keys:\n    - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCmjoVIoZCx4QFXvljqozXGqxxlSvO7V2aizqyPgMfGqnyl0J9YXo6zrcWYwyWMnMdRdwYZgHqfiiFCUn2QDm6ZuzC4Lcx0K3ZwO2lgL4XaATykVLneHR1ib6RNroFcClN69cxWsdwQW6dpjpiBDXf8m6/qxVP3EHwUTsP8XaOV7WkcCAqfYAMvpWLISqYme6e+6ZGJUIPkDTxavu5JTagDLwY+py1WB53eoDWsG99gmvyit2O1Eo+jRWN+mgRHIxJTrFtLS6o4iWeshPZ6LvCZ/Pum12Oj4B4bjGSHzrKjHZgTwhVJ/LDq3v71/PP4zaI3gVB9ZalemSxqomgbTlnT jose@debian\n    - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCfk9mRtOHM3T1KpmGi0KiN2uAM6CDXM3WFcm1wkzKXx7RaLtf9pX+KCuVqHdy/N/9d9wtH7iSmLFX/4gQKQVG00jHiGf3ABufWeIpjmHtT1WaI0+vV47fofEIjDDfSZPlI3p5/c7tefHsIAK6GbQn31yepAcFYy9ZfqAh8H/Y5eLpf3egPZn9Czsvx+lm0I8Q+e/HSayRaiAPUukF57N2nnw7yhPZCHSZJqFbXyK3fVQ/UQVBeNS2ayp0my8X9sIBZnNkcYHFLIWBqJYdnu1ZFhnbu3yy94jmJdmELy3+54hqiwFEfjZAjUYSl8eGPixOfdTgc8ObbHbkHyIrQ91Kz rafa@eco\n- name: oscar\nshell: /bin/bash\npasswd: usuario\nssh_authorized_keys:\n    - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDTcmixc+3Zq1eSaRgb7Kvv5Efy0MZwx7wR6NWdHqi6+oLTPzNxr7IztKo9JvSMWsGzK5xR8mg8V/lPqdYO0GY5vrodpq6UdHojve0g2YaIeex7pcL2G8AEsFbysvUvwCXW4URdu1ZQAOylRPakPi0bIRsbVkRi3TjeeTcUUo/pxwI9VV6SHm94XpwZd/JUvLa8fH5USNTseN/isa4kIgHTxsIrUan2uuIr1BEYgLyrohZrvgVpmv5B/TDupxVo6lSdGQbJFwMp+/Krqrid4kvuBrDKPY5EnYyu5/XNFqRqfhoF4jk4W3Nzb8K/bF+DTelh8kZgouQQJP5RY9v1MRTqS8dq0751rVibD6KouFKBm9gxZ9BnTRFaN8hjZi60z3cyTjEl5bmD7KP5wT0i9E2dvn1xN83j7FM/ryLJ8I2GHIimNgvctQQdWddva0kVNjocteq32OtLOgh52qUzv9gw13WKVbedpoNV1cve/oFK7tH1WwG6nFf64V9Rnh1Inrs= oscar@debian\nchpasswd:\nlist: |\n    root:root\nexpire: False\n")])])]),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("3.")])]),a._v(" "),e("strong",[a._v("Creación de la máquina1 (alfa):")])],1),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Crea una instancia sobre un volumen de 30Gb, usando una imagen de Debian 11 Bullseye. Elige el sabor vol.medium. Y configuralá con cloud-init como se ha indicado anteriormente.")])])]),a._v(" "),e("p",[a._v("Creamos el volumen con la imagén correspondiente:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('openstack volume create --bootable --size 30 --image "Debian 11 Bullseye" alfa_debian\n')])])]),e("p",[a._v("Creamos la máquina Alfa:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('openstack server create --flavor vol.medium --volume alfa_debian --security-group default --key-name oscar_clave --network "red de oscar.lucas" --user-data "cloud-init-alfa.yaml" \\alfa\n')])])]),e("ul",[e("li",[e("strong",[a._v("Está instancia estará conectada a tu red interna. Asigna a la instancia una IP flotante.")])])]),a._v(" "),e("p",[a._v("Le asignamos una Ip flotante:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack floating ip create ext-net\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack server add floating ip alfa 172.22...\n")])])]),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("4.")])]),a._v(" "),e("strong",[a._v("Configuración de la máquina1 (alfa):")])],1),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Conecta la instancia a tu Red DMZ, asígnale la dirección 172.16.0.1 para que sea la puerta de enlace las máquinas conectadas a esta red.")])])]),a._v(" "),e("p",[a._v("Creamos el puerto:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack port create --network Red-DMZ-de-olucas --fixed-ip ip-address=172.16.0.1 port_alfa\n")])])]),e("p",[a._v("Y asociamos el puerto a la máquina:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack server add port alfa port_alfa\n")])])]),e("ul",[e("li",[e("strong",[a._v("Deshabilita la seguridad de los puertos en las dos interfaces de red para que funcione de manera adecuada el NAT.")])])]),a._v(" "),e("p",[a._v("Quitamos grupo de seguridad:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack port list --server alfa\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack server remove security group alfa default\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack port set --disable-port-security port_alfa\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack port set --disable-port-security `identificador id`\n")])])]),e("ul",[e("li",[e("strong",[a._v("Configura de forma permanente la regla SNAT para que las máquinas de la Red DMZ tengan acceso a internet.")])])]),a._v(" "),e("p",[a._v("Reglas SNAT en la maquina alfa")]),a._v(" "),e("p",[a._v("Entramos en la maquina alfa y entramos al siguiente fichero:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("nano /etc/sysctl.conf\n")])])]),e("p",[a._v("Y descomentamos la siguiente linea:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("net.ipv4.ip_forward=1\n")])])]),e("p",[a._v("Y guardamos los cambios:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sysctl -p\n")])])]),e("p",[a._v("Instalamos iptables si no lo tenemos:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("apt install iptables\n")])])]),e("p",[a._v("Ponemos las reglas de iptables:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("nano /etc/network/interfaces.d/50-cloud-init\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("up iptables -t nat -A POSTROUTING -s 172.16.0.0/16 -o ens3 -j MASQUERADE\ndown iptables -t nat -D POSTROUTING -s 172.16.0.0/16 -o ens3 -j MASQUERADE\n")])])]),e("p",[a._v("Guardamos y reseteamos el servicio:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("systemctl restart networking\n")])])]),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("5.")])]),a._v(" "),e("strong",[a._v("Creación de la máquina2 (bravo):")])],1),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Está instancia se conectará a la red DMZ. Usando un puerto asigna a esta máquina la dirección 172.16.0.200.")])])]),a._v(" "),e("p",[a._v("Creamos el puerto:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack port create --network Red-DMZ-de-olucas --fixed-ip ip-address=172.16.0.200 port_bravo\n")])])]),e("ul",[e("li",[e("strong",[a._v("Crea una instancia sobre un volumen de 30Gb, usando una imagen de Rocky Linux 9. Elige el sabor vol.normal. Y configuralá con cloud-init como se ha indicado anteriormente.")])])]),a._v(" "),e("p",[a._v("Creamos el volumen:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('openstack volume create --bootable --size 30 --image "Rocky Linux 9" bravo_rocky\n')])])]),e("p",[a._v("Creamos la máquina Bravo:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('openstack server create --flavor vol.normal --volume bravo_rocky --security-group default --key-name oscar_clave --port "port_bravo" --user-data "cloud-init-bravo.yaml" \\bravo\n')])])]),e("ul",[e("li",[e("strong",[a._v("Deshabilita la seguridad de los puertos en la interfaz de red para que funcione de manera adecuada el NAT.")])])]),a._v(" "),e("p",[a._v("Quitamos el grupo de seguridad:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack port list --server bravo\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack server remove security group bravo default\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("openstack port set --disable-port-security port_bravo\n")])])]),e("ul",[e("li",[e("strong",[a._v("Comprueba que tiene acceso a internet. Si no tiene acceso a internet, no se han actualizado los paquetes con cloud-init, hazlo posteriormente..")])])]),a._v(" "),e("h3",{attrs:{id:"instalacion-de-los-contenedores"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instalacion-de-los-contenedores"}},[a._v("#")]),a._v(" Instalación de los contenedores")]),a._v(" "),e("hr"),a._v(" "),e("p",[e("strong",[a._v("En maquina1 vamos a crear dos contenedores en un red interna, para ello:")])]),a._v(" "),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("1.")])]),a._v(" "),e("strong",[a._v("Crea en máquina1 (alfa) un linux bridge llamado br-intra y asigna una dirección IP estática 192.168.0.1. Esta será la IP de máquina1 (alfa) conectada a este switch virtual y será la puerta de enlace de los contenedores")])],1),a._v(" "),e("p",[a._v("Instalamos los paquetes necesarios:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("apt install qemu-system libvirt-clients libvirt-daemon-system\n")])])]),e("p",[a._v("Creamos br-intra:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("nano /etc/network/interfaces.d/50-cloud-init\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("auto br-intra\n    iface br-intra inet static\n    pre-up brctl addbr br-intra\n    address 192.168.0.1\n    netmask 255.255.255.0\n")])])]),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("2.")])]),a._v(" "),e("strong",[a._v("Instala LXC y crea dos contenedores con la distribución Ubuntu 20.04. Estos contenedores serán la máquina3 (charlie) y la máquina4 (delta).")])],1),a._v(" "),e("p",[a._v("Instalamos lxc:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("apt install lxc\n")])])]),e("p",[a._v("Creamos el contenedor:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("lxc-create -n charlie -t ubuntu -- -r focal\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("lxc-create -n delta -t ubuntu -- -r focal\n")])])]),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("3.")])]),a._v(" "),e("strong",[a._v("Configura de forma permanente la regla SNAT para que los contenedores tengan acceso a internet.")])],1),a._v(" "),e("p",[a._v("Reglas SNAT de Charlie y Delta:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("nano /etc/network/interfaces.d/50-cloud-init\n")])])]),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("up iptables -t nat -A POSTROUTING -s 192.168.0.0/16 -o ens3 -j MASQUERADE\ndown iptables -t nat -D POSTROUTING -s 192.168.0.0/16 -o ens3 -j MASQUERADE\n")])])]),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("4.")])]),a._v(" "),e("strong",[a._v("Conecta los contenedores al bridge br-intra y configúralo de forma estática con las siguientes direcciones: máquina3 (charlie) la 192.168.0.2 y máquina4 (delta) la 192.168.0.3.")])],1),a._v(" "),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("5.")])]),a._v(" "),e("strong",[a._v("Para que la red de OpenStack funcione de forma adecuada las imágenes que usamos tienen configurado la mtu (Unidad máxima de transferencia) a 1450 bytes. Tenemos que adecuar los contenedores a este tamaño de trama. Para ello introduce en la configuración de los contenedores la línea: lxc.net.0.mtu = 1450.")])],1),a._v(" "),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("6.")])]),a._v(" "),e("strong",[a._v("Configura los contenedores para que se auto inicien al reiniciar la instancia.")])],1),a._v(" "),e("p",[e("font",{attrs:{color:"#0000FF"}},[e("strong",[a._v("7.")])]),a._v(" "),e("strong",[a._v("Los contenedores tendrán características parecidas a las instancias anteriormente:")])],1),a._v(" "),e("ul",[e("li",[e("p",[e("strong",[a._v("Debes actualizar los paquetes de la distribución instalada.")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("El dominio utilizado será del tipo tunombre.gonzalonazareno.org. Por lo tanto configura de manera adecuda el hostname y el FQDN.")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Para acceder a los contenedores vamos a usar ssh.")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Crea dos usuarios:")])]),a._v(" "),e("ul",[e("li",[e("p",[e("strong",[a._v("Un usuario sin privilegios. Se puede llamar como quieras (el nombre de usuario que usaste en las instancias) y accederás a los contenedores usando tu clave ssh privada.")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Un usuario profesor, que puede utilizar sudo sin contraseña. Copia de las claves públicas de todos los profesores en los contenedores para que puedan acceder con el usuario profesor.")])])])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Cambia la contraseña al usuario root")])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);