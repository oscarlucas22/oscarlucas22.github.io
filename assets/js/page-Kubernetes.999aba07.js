(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1139:function(e,a,s){"use strict";s.r(a);var n=s(1),o=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),a("p",[a("strong",[e._v("En IAW has creado dos imágenes de dos aplicaciones: bookmedik (php) y polls (python django). Elige una de ellas y despliégala en kubernetes. Para ello vamos a hacer dos ejercicios:")])]),e._v(" "),a("p",[e._v("En este "),a("RouterLink",{attrs:{to:"/practicas/python-docker.html"}},[e._v("post")]),e._v(" realizamos la implantación de una aplicación en Docker. En este post vamos a realizar el despliegue de la misma aplicación en Kubernetes.")],1),e._v(" "),a("h2",{attrs:{id:"ejercicio1-despliegue-en-minikube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ejercicio1-despliegue-en-minikube"}},[e._v("#")]),e._v(" Ejercicio1: Despliegue en minikube")]),e._v(" "),a("p",[a("strong",[e._v("Escribe los ficheros yaml que te posibilitan desplegar la aplicación en minikube. Recuerda que la base de datos debe tener un volumen para hacerla persistente. Debes crear ficheros para los deployments, services, ingress, volúmenes,…")])]),e._v(" "),a("p",[a("strong",[e._v("Despliega la aplicación en minikube.")])]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 1")]),e._v(" Creamos los ficheros yaml para crear un ConfigMap y un Secret donde guardaremos las variables de entorno.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl create cm cm-mariad --from-literal=mysql_usuario=bookmedik \\\n                            --from-literal=basededatos=bookmedik \\\n                            -o yaml --dry-run=client > bd_datos_configmap.yaml\n\nkubectl create secret generic secret-mariadb --from-literal=password=bookmedik \\\n                                             --from-literal=rootpass=root \\\n                                             -o yaml --dry-run=client > bd_passwords_secret.yaml\n")])])]),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 2")]),e._v(" Creamos el volumen y el fichero de despliegue para mariadb")],1),e._v(" "),a("ul",[a("li",[e._v("Volumen para mariadb")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano pvc-bookmedik.yaml\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n    name: pvc-bookmedik\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 3Gi\n")])])]),a("ul",[a("li",[e._v("Despliegue de mariadb")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano mariadb-deployment.yaml\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: mariadb\n  labels:\n    app: mariadb\n    tier: backend\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: mariadb\n      tier: backend\n  template:\n    metadata:\n      labels:\n        app: mariadb\n        tier: backend\n    spec:\n      volumes:\n        - name: vol-mariadb\n          persistentVolumeClaim:\n            claimName: pvc-bookmedik\n      containers:\n        - name: cont-mariadb\n          image: mariadb\n          env:\n            - name: MARIADB_ROOT_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: secret-mariadb\n                  key: rootpass\n            - name: MARIADB_DATABASE\n              valueFrom:\n                configMapKeyRef:\n                  name: cm-mariadb\n                  key: basededatos\n            - name: MARIADB_USER\n              valueFrom:\n                configMapKeyRef:\n                  name: cm-mariadb\n                  key: mysql_usuario\n            - name: MARIADB_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: secret-mariadb\n                  key: password\n          ports:\n            - name: mariadb-server\n              containerPort: 3306\n          volumeMounts:\n            - mountPath: "/var/lib/mysql"\n              name: vol-mariadb\n')])])]),a("ul",[a("li",[e._v("Servicio de mariadb")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano mariadb-srv.yaml\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: mariadb\n  labels:\n    app: mariadb\n    tier: backend\nspec:\n  type: ClusterIP\n  ports:\n  - port: 3306\n    targetPort: mariadb-server\n  selector:\n    app: mariadb\n    tier: backend\n")])])]),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 3")]),e._v(" Creamos los ficheros de despliegue y servicios para bookmedik.")],1),e._v(" "),a("ul",[a("li",[e._v("Despliegue de bookmedik")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano bookmedik-deployment.yaml\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: bookmedik\n  labels:\n    app: bookmedik\n    tier: frontend\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: bookmedik\n      tier: frontend\n  template:\n    metadata:\n      labels:\n        app: bookmedik\n        tier: frontend\n    spec:\n      containers:\n      - name: cont-bookmedik\n        image: oscarlucas/bookmedik:v1\n        env:\n          - name: USER_BOOKMEDIK\n            valueFrom:\n              configMapKeyRef:\n                name: cm-mariadb\n                key: mysql_usuario\n          - name: PASSWD_BOOKMEDIK\n            valueFrom:\n              secretKeyRef:\n                name: secret-mariadb\n                key: password\n          - name: DB_HOST\n            value: mariadb\n          - name: NOMBRE_DB\n            valueFrom:\n              configMapKeyRef:\n                name: cm-mariadb\n                key: basededatos\n        ports:\n          - name: http-server\n            containerPort: 80\n")])])]),a("ul",[a("li",[e._v("Servicio de bookmedik")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano bookmedik-srv.yaml\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: bookmedik\n  labels:\n    app: bookmedik\n    tier: frontend\nspec:\n  type: NodePort\n  ports:\n  - port: 80\n    targetPort: http-server\n  selector:\n    app: bookmedik\n    tier: frontend\n")])])]),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 4")]),e._v(" Creamos todo y anotamos la primera versión de la aplicación.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl apply -f .\n")])])]),a("p",[e._v("Y apuntamos el lanzamiento de la primera versión de bookmedik:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('kubectl annotate deployment.apps/bookmedik kubernetes.io/change-cause="Versión 1"\n')])])]),a("p",[e._v("Podemos observar como se han creado todos los recursos que hemos definido:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl get all\n")])])]),a("p",[a("img",{attrs:{src:s(821),alt:"image"}})]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 5")]),e._v(" Accedemos a la aplicación y comprobamos que funciona correctamente.")],1),e._v(" "),a("p",[a("img",{attrs:{src:s(822),alt:"image"}})]),e._v(" "),a("p",[e._v("Y comprobamos que podemos acceder:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(823),alt:"image"}})]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 6")]),e._v(" Creamos el fichero Ingress para acceder a la aplicación desde el exterior.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano ingress.yaml\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress\nspec:\n  rules:\n  - host: www.olucas-bookmedik.org\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: bookmedik\n            port:\n              number: 80\n")])])]),a("p",[e._v("Y lo creamos:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl apply -f ingress.yaml\n")])])]),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 7")]),e._v(" Modificamos el fichero "),a("code",[e._v("/etc/hosts")]),e._v(" para que apunte a la IP del nodo maestro.")],1),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 8")]),e._v(" Accedemos a la aplicación desde el navegador.")],1),e._v(" "),a("p",[a("img",{attrs:{src:s(824),alt:"image"}})]),e._v(" "),a("p",[e._v("Y accedemos a la zona de administración:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(825),alt:"image"}})]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 9")]),e._v(" Creamos información para probar la persistencia de la base de datos cuando borremos la base de datos de mariadb.")],1),e._v(" "),a("p",[a("img",{attrs:{src:s(826),alt:"image"}})]),e._v(" "),a("ul",[a("li",[e._v("Eliminamos el despliegue de mariadb.")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl delete mariadb-deployment.yaml\n")])])]),a("ul",[a("li",[e._v("Comprobamos que la base de datos no funciona.")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(827),alt:"image"}})]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 10")]),e._v(" Ahora nos toca escalar el despliegue de la aplicación a 3 réplicas y lo podemos hacer de dos formas:")],1),e._v(" "),a("p",[e._v("Para escalar el despliegue de bookmedik a tres pods hay dos opciones: o lo hacemos a través de la terminal y el cambio sería temporal o modificamos el fichero .yaml del despliegue y alteramos el número de pods. Yo he optado por la primera opción:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl scale deployment.apps/bookmedik --replicas=3\n")])])]),a("p",[e._v("Vemos que se han creado los nuevos pods:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(828),alt:"image"}})]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 11")]),e._v(" Vamos a crear una imagen docker, pero con alguna modficación, para probar el despliegue de una nueva versión de la aplicación.")],1),e._v(" "),a("ul",[a("li",[e._v("Modificamos el fichero index.php de la aplicación para que muestre la versión de la aplicación.")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(829),alt:"image"}})]),e._v(" "),a("p",[e._v("En mi caso, le he cambiado el texto de la página principal y de la pestaña del navegador.")]),e._v(" "),a("ul",[a("li",[e._v("Creamos la imagen docker con la nueva versión de la aplicación.")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker build -t oscarlucas/bookmedik:v1_1 .\n")])])]),a("ul",[a("li",[e._v("Subimos la imagen a docker hub.")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker push oscarlucas/bookmedik:v1_1\n")])])]),a("ul",[a("li",[e._v("Modificamos el fichero de despliegue para que use la nueva versión de la imagen.")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(830),alt:"image"}})]),e._v(" "),a("ul",[a("li",[e._v("Aplicamos los cambios.")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl apply -f bookmedik-deployment.yaml\n")])])]),a("ul",[a("li",[e._v("Comprobamos que se ha desplegado la nueva versión de la aplicación.")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(831),alt:"image"}})]),e._v(" "),a("p",[e._v("Y que podemos acceder a la zona de administración.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(832),alt:"image"}})]),e._v(" "),a("h2",{attrs:{id:"ejercicio2-despliegue-en-otra-distribucion-de-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ejercicio2-despliegue-en-otra-distribucion-de-kubernetes"}},[e._v("#")]),e._v(" Ejercicio2: Despliegue en otra distribución de kubernetes")]),e._v(" "),a("p",[a("strong",[e._v("Instala un clúster de kubernetes (más de un nodo). Tienes distintas opciones para construir un cluster de kubernetes: Alternativas para instalación simple de k8s.")])]),e._v(" "),a("p",[a("strong",[e._v("Realiza el despliegue de la aplicación en el nuevo clúster. Es posible que no tenga instalado un ingress master, por lo que no va a funcionar el ingress (puedes buscar como hacer la instalación: por ejemplo el nginx master).")])]),e._v(" "),a("p",[a("strong",[e._v("Escala la aplicación y ejecuta kubectl get pods -o wide para ver cómo se ejecutan en los distintos nodos del clúster.")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("En esta parte, vamos a instalar un cluster de kubernetes. Pero lo haremos en una distribución diferente a la que hemos usado hasta ahora. Pero debemos hacerlo en otra versión, y he decidido hacerlo en k3s, que es una versión ligera de kubernetes.")]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 1")]),e._v(" Creamos 3 nodos, uno maestro y dos esclavos.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Vagrant.configure("2") do |config|\n  config.vm.define :master do |master|\n    master.vm.box = "debian/buster64"\n    master.vm.hostname = "master"\n    master.vm.network :private_network, ip: "192.168.0.1"\n    master.nfs.verify_installed = false\n    master.vm.synced_folder \'.\', \'/vagrant\', disabled: true\n    master.vm.provider "libvirt" do |v|\n      v.memory = 3072\n      v.cpus = 2\n    end\n  end\n  config.vm.define :node1 do |node1|\n    node1.vm.box = "debian/buster64"\n    node1.vm.hostname = "node1"\n    node1.vm.network :private_network, ip: "192.168.0.2"\n    node1.nfs.verify_installed = false\n    node1.vm.synced_folder \'.\', \'/vagrant\', disabled: true\n    node1.vm.provider "libvirt" do |v|\n      v.memory = 3072\n      v.cpus = 2\n    end\n  end\n  config.vm.define :node2 do |node2|\n    node2.vm.box = "debian/buster64"\n    node2.vm.hostname = "node2"\n    node2.vm.network :private_network, ip: "192.168.0.3"\n    node2.nfs.verify_installed = false\n    node2.vm.synced_folder \'.\', \'/vagrant\', disabled: true\n    node2.vm.provider "libvirt" do |v|\n      v.memory = 3072\n      v.cpus = 2\n    end\n  end\nend\n')])])]),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 2")]),e._v(" Instalamos k3s en el nodo maestro.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("curl -sfL https://get.k3s.io | sh -\n")])])]),a("p",[a("img",{attrs:{src:s(833),alt:"image"}})]),e._v(" "),a("p",[e._v("Y comprobamos que está listo.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl get nodes\n")])])]),a("p",[a("img",{attrs:{src:s(834),alt:"image"}})]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 3")]),e._v(" Identificamos el token del nodo maestro.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo cat /var/lib/rancher/k3s/server/node-token\n")])])]),a("p",[a("img",{attrs:{src:s(835),alt:"image"}})]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 4")]),e._v(" Ejecutamos lo siguiente:")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("curl -sfL https://get.k3s.io | K3S_URL=https://192.168.121.236:6443 K3S_TOKEN=K10f5139d923389039d43c7d10b32d2238cd20158dce4430da3f344cd5a34b59470::server:a88a45d0d75b2cf990ece4c5bedf8458 sh -\n")])])]),a("p",[a("em",[e._v("node1")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(836),alt:"image"}})]),e._v(" "),a("p",[a("em",[e._v("node2")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(837),alt:"image"}})]),e._v(" "),a("p",[e._v("El comando anterior nos instala k3s en el nodo esclavo y lo añade al cluster. En el parámetro URL, debemos poner la IP del nodo maestro y en el parámetro token, el token que hemos obtenido en el paso anterior.")]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 5")]),e._v(" Comprobamos que los nodos están listos.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl get nodes\n")])])]),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 6")]),e._v(" Instalamos git en el nodo maestro ( master).")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo apt install git\n")])])]),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 7")]),e._v(" Clonamos el repositorio de la aplicación.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git clone https://github.com/oscarlucas22/kubernete-docker.git\n")])])]),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 8")]),e._v(" Rehacemos los pasos que hicimos en el ejercicio anterior:")],1),e._v(" "),a("ul",[a("li",[e._v("Creamos los ficheros yaml para crear un ConfigMap y un Secret donde guardaremos las variables de entorno.")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl create cm cm-mariadb --from-literal=mysql_usuario=bookmedik --from-literal=basededatos=bookmedik\n\nkubectl create secret generic secret-mariadb --from-literal=password=bookmedik --from-literal=rootpass=root \n")])])]),a("ul",[a("li",[e._v("Creamos los recursos:")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl apply -f .\n")])])]),a("ul",[a("li",[e._v("Comprobamos que todo está listo.")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl get all\n")])])]),a("p",[a("img",{attrs:{src:s(838),alt:"image"}})]),e._v(" "),a("ul",[a("li",[e._v('Accedemos a la dirección que hemos establecido en el fichero "ingress.yaml".')])]),e._v(" "),a("p",[a("img",{attrs:{src:s(839),alt:"image"}})]),e._v(" "),a("p",[e._v("Y que podemos acceder a la zona de administración.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(840),alt:"image"}})]),e._v(" "),a("p",[a("font",{attrs:{color:"#0000FF"}},[e._v("Paso 9")]),e._v(" Escalamos el despliegue como hemos hecho en el ejercicio anterior, y lo realizaremos con 3 replicas. Para ello, primero, veamos de nuevo que contamos con 2 replicas y vamos a extenderlo a 1 más.")],1),e._v(" "),a("ul",[a("li",[e._v("Antes de escalar el despliegue, vamos a ver las replicas que tenemos.")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl get pods -o wide\n")])])]),a("p",[a("img",{attrs:{src:s(841),alt:"image"}})]),e._v(" "),a("ul",[a("li",[e._v("Ahora, vamos a escalar el despliegue.")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl scale deployment.apps/bookmedik --replicas=3\n")])])]),a("ul",[a("li",[e._v("Comprobamos que se ha escalado correctamente y que tenemos 3 replicas.")])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("kubectl get pods -o wide\n")])])]),a("p",[a("img",{attrs:{src:s(842),alt:"image"}})]),e._v(" "),a("ul",[a("li",[e._v("Comprobamos que podemos acceder a la aplicación.")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(843),alt:"image"}})]),e._v(" "),a("p",[e._v("Y que podemos acceder a la zona de administración.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(844),alt:"image"}})])])}),[],!1,null,null,null);a.default=o.exports},821:function(e,a,s){e.exports=s.p+"assets/img/1.2d136009.png"},822:function(e,a,s){e.exports=s.p+"assets/img/2.388cabcf.png"},823:function(e,a,s){e.exports=s.p+"assets/img/3.f697d897.png"},824:function(e,a,s){e.exports=s.p+"assets/img/4.c43e0a71.png"},825:function(e,a,s){e.exports=s.p+"assets/img/5.24aacabb.png"},826:function(e,a,s){e.exports=s.p+"assets/img/6.f95d5755.png"},827:function(e,a,s){e.exports=s.p+"assets/img/7.f20a3a19.png"},828:function(e,a,s){e.exports=s.p+"assets/img/8.a6cd0958.png"},829:function(e,a,s){e.exports=s.p+"assets/img/9.51e283a5.png"},830:function(e,a,s){e.exports=s.p+"assets/img/10.1febac8e.png"},831:function(e,a,s){e.exports=s.p+"assets/img/11.73cf8d2f.png"},832:function(e,a,s){e.exports=s.p+"assets/img/12.323ec206.png"},833:function(e,a,s){e.exports=s.p+"assets/img/13.b50ec3f4.png"},834:function(e,a,s){e.exports=s.p+"assets/img/14.fbcf831e.png"},835:function(e,a,s){e.exports=s.p+"assets/img/15.a44fb32a.png"},836:function(e,a,s){e.exports=s.p+"assets/img/16.79bbc823.png"},837:function(e,a,s){e.exports=s.p+"assets/img/17.64e858fd.png"},838:function(e,a,s){e.exports=s.p+"assets/img/18.5ca86d64.png"},839:function(e,a,s){e.exports=s.p+"assets/img/19.8d3f2e7f.png"},840:function(e,a,s){e.exports=s.p+"assets/img/20.f8b02506.png"},841:function(e,a,s){e.exports=s.p+"assets/img/21.79e7be54.png"},842:function(e,a,s){e.exports=s.p+"assets/img/22.411b6e5e.png"},843:function(e,a,s){e.exports=s.p+"assets/img/23.3285349e.png"},844:function(e,a,s){e.exports=s.p+"assets/img/24.f8b02506.png"}}]);