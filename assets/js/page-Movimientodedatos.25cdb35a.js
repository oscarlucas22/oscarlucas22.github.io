(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1045:function(e,a,o){"use strict";o.r(a);var s=o(1),t=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"movimiento-de-datos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#movimiento-de-datos"}},[e._v("#")]),e._v(" Movimiento de datos")]),e._v(" "),a("p",[a("strong",[e._v("1. Realiza una exportación del esquema de SCOTT usando Oracle Data Pump con las siguientes condiciones:")])]),e._v(" "),a("p",[e._v("Primero nos crearemos un directorio donde almacenaremos los archivos de explotacion en mi caso creare un directorio en la ruta "),a("code",[e._v("/home/oracle")]),e._v(', el cual se llamara "dir"')]),e._v(" "),a("p",[e._v("Despues nos conectaremos al usuario a la base de datos y  crearemos un directorio en el que se almacenaran los archivos de exportacion, al que le asignamos los permisos necesarios para que el usuario pueda acceder a el.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("create directory dmp_dir AS '/ruta/al/directorio';\ngrant read, write on directory dmp_dir to SCOTT;\n")])])]),a("p",[e._v("Le daremos tambien permisos para que pueda exportar datos:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("grant datapump_exp_full_database to SCOTT;\n")])])]),a("p",[e._v("Y con esto los que exportemos se guardara en la ruta que hemos especificado.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Exporta tanto la estructura de las tablas como los datos de las mismas.")])]),e._v(" "),a("p",[e._v("expdp scott/tiger DIRECTORY=dmp_dir DUMPFILE=scott.dmp CONTENT=ALL")])])]),e._v(" "),a("p",[a("img",{attrs:{src:o(875),alt:"image"}})]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Excluye la tabla BONUS y los departamentos con menos de dos empleados.")])]),e._v(" "),a("p",[e._v("expdp scott/tiger DIRECTORY=dmp_dir DUMPFILE=scott.dmp CONTENT=ALL EXCLUDE=TABLE:\"IN('BONUS')\" QUERY=DEPT:'\"where deptno in (select deptno from emp group by deptno having count(*) > 2)\"'")])])]),e._v(" "),a("p",[a("img",{attrs:{src:o(876),alt:"image"}})]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Realiza una estimación previa del tamaño necesario para el fichero de exportación.")])]),e._v(" "),a("p",[e._v("expdp scott/tiger DIRECTORY=dmp_dir CONTENT=ALL EXCLUDE=TABLE:\"IN('BONUS')\" ESTIMATE_ONLY=YES")])])]),e._v(" "),a("p",[a("img",{attrs:{src:o(877),alt:"image"}})]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Programa la operación para dentro de 2 minutos.")])])]),e._v(" "),a("p",[e._v("Para hacer este apartado haré un script que ejecutará la exportación tras 2 min")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('nano script.sh\n\n#!/bin/bash\necho "Ejecutando la exportación de esquema scott, esto tardará unos 2 min"\nsleep 120\necho ""\nexpdp scott/tiger DIRECTORY=dmp_dir DUMPFILE=scott.dmp CONTENT=ALL EXCLUDE=TABLE:"IN(\'BONUS\')" QUERY=DEPT:\'"where deptno in (select deptno from emp group by deptno having count(*) > 2)"\'\n')])])]),a("p",[e._v("Le daremos permisos de ejecución")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sudo chmod +x script.sh\n")])])]),a("p",[e._v("Y lo ejecutamos:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("./script.sh\n")])])]),a("p",[a("img",{attrs:{src:o(878),alt:"image"}})]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Genera un archivo de log en el directorio raíz.")])])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("expdp scott/tiger DIRECTORY=dmp_dir DUMPFILE=scott.dmp CONTENT=ALL EXCLUDE=TABLE:\"IN('BONUS')\" LOGFILE=/var/log/oracle/export.log\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("p",[a("strong",[e._v("2. Importa el fichero obtenido anteriormente usando Oracle Data Pump pero en un usuario distinto de la misma base de datos.")])]),e._v(" "),a("p",[e._v("Para realizar la importación, deberemos darle permisos de lectura y escritura al usuario al que importaremos la base de datos, al directorio donde se almacenarán los archivos de importación.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("grant read, write on directory dmp_dir to LUCAS;\n")])])]),a("p",[e._v("Le concedemos también los permisos necesarios para realizar la importación.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("grant imp_full_database to LUCAS;\n")])])]),a("p",[e._v("E importamos la base de datos.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("impdp lucas/admin schemas=scott directory=dmp_dir dumpfile=scott.dmp logfile=impdb.log\n")])])]),a("p",[a("strong",[e._v("3. Realiza una exportación de la estructura de todas las tablas de la base de datos usando el comando expdp de Oracle Data Pump probando al menos cinco de las posibles opciones que ofrece dicho comando y documentándolas adecuadamente.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("expdp scott/tiger schemas=scott dumpfile=scottall.dmp logfile=scottall.log directory=dmp_dir CONTENT=METADATA_ONLY\n")])])]),a("p",[a("img",{attrs:{src:o(879),alt:"image"}})]),e._v(" "),a("p",[a("strong",[e._v("4. Intenta realizar operaciones similares de importación y exportación con las herramientas proporcionadas con MySQL desde línea de comandos, documentando el proceso.")])]),e._v(" "),a("p",[e._v("Vamos a utilizar la misma base de datos que hemos empleado en Oracle, la base de datos scott. Para realizar la importación, lo haremos con el siguiente comando:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mysql -u scott -p scott < scott-mysql.sql\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mysqldump -u scott -p scott > scottexport.sql\n")])])]),a("p",[a("img",{attrs:{src:o(880),alt:"image"}})]),e._v(" "),a("p",[e._v("Como podemos observar, el fichero se ha creado correctamente.")]),e._v(" "),a("p",[e._v("Para asegurarnos de que la importación se realiza correctamente, contruiré una base de datos limpia para realizar la importación y comparar los resultados.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("create database scottimport;\n")])])]),a("p",[a("img",{attrs:{src:o(881),alt:"image"}})]),e._v(" "),a("p",[a("img",{attrs:{src:o(882),alt:"image"}})]),e._v(" "),a("p",[a("strong",[e._v("5. Intenta realizar operaciones similares de importación y exportación con las herramientas proporcionadas con Postgres desde línea de comandos, documentando el proceso.")])]),e._v(" "),a("p",[e._v("Vamos a utilizar la base de datos scott. Para realizar la importación, lo haremos con el siguiente comando:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("pg_dump -U postgres scott > scott_import.sql\n")])])]),a("p",[a("strong",[e._v("6. Exporta los documentos de una colección de MongoDB que cumplan una determinada condición e impórtalos en otra base de datos.")])]),e._v(" "),a("p",[a("strong",[e._v("7. SQL"),a("em",[e._v("Loader es una herramienta que sirve para cargar grandes volúmenes de datos en una instancia de ORACLE. Exportad los datos de una base de datos completa desde Postgres a texto plano con delimitadores y emplead SQL")]),e._v("Loader para realizar el proceso de carga de dichos datos a una instancia ORACLE. Debéis documentar todo el proceso, explicando los distintos ficheros de configuración y de log que tiene SQL*Loader.")])]),e._v(" "),a("p",[e._v("En mi situación, utilizaré la base de datos SCOTT que tengo en postgres de ejercicios previos para llevar a cabo este proceso. Primero, exportaré estos datos a un archivo csv y luego procederé a importarlos en una base de datos de Oracle.")]),e._v(" "),a("p",[e._v("Función exportación a csv")]),e._v(" "),a("p",[e._v("Con el fin de lograrlo, es necesario crear una función en PGSQL que permita la exportación de los datos a un archivo csv. La función que deberíamos crear tendría el siguiente aspecto:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("create or replace function exportcsv(name_tab varchar, ruta varchar)\nreturns void as $$\ndeclare\n    name_tab varchar;\nbegin\n    for name_tab in select table_name from information_schema.tables where table_schema = 'public' and table_type = 'BASE TABLE' loop\n        execute format ( 'copy %I to %L with (format csv, delimiter '','', header true)', name_tab, ruta || name_tab || '.csv' );\n    end loop;\nend;\n$$ language plpgsql;\n")])])]),a("p",[e._v("En este momento, procederemos a ejecutar la función para exportar los datos a un archivo csv.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("select exportcsv('scott', '/home/postgres/');\n")])])]),a("p",[e._v("Podemos notar que los datos han sido exportados correctamente a un archivo csv.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("scp\n")])])]),a("p",[e._v("Y los pasamos por scp a la máquina de Oracle.")]),e._v(" "),a("p",[e._v("Creación de ficheros de control")]),e._v(" "),a("p",[e._v("En este punto, crearemos los archivos de control que se requieren para la importación de los datos a Oracle. Es necesario crear un archivo de control para cada tabla que se va a importar. En mi caso, las tablas DEPT y EMP serán importadas.")]),e._v(" "),a("p",[e._v("Fichero de control para la tabla DEPT")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano dept.ctl\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("OPTIONS (SKIP=1)\nLOAD DATA\nINFILE '/home/postgres/dept.csv'\nAPPEND\nINTO TABLE dept\nFIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"'\nTRAILING NULLCOLS\n(deptno, dname, loc)\n")])])]),a("p",[e._v("Fichero de control para la tabla EMP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("nano emp.ctl\n")])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("OPTIONS (SKIP=1)\nLOAD DATA\nINFILE '/home/oracle/emp.csv'\nAPPEND\nINTO TABLE emp\nFIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"'\nTRAILING NULLCOLS\n(\n    empno, \n    ename,\n    job,\n    mgr,\n    hiredate date \"YYYY-MM-DD HH24:MI:SS\",\n    sal decimal (7,2),\n    comm decimal (7,2),\n    deptno\n)\n")])])]),a("p",[e._v("Creamos un nuevo usuario en Oracle para poder importar los datos.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("create user importdt identified by root\ndefaut tablespace users \ntempory tablespace temp\nprofile default;\n\ngrant connect, resource to importdt;\n")])])]),a("p",[e._v("Y creamos también las tablas en Oracle.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("create table dept (\n        deptno number(2) constraint pk_dept PRIMARY KEY,\n        dname varchar2(14),\n        loc varchar2(13));\n\ncreate table emp (\n        empno number(4) constraint pk_emp PRIMARY KEY,\n        ename varchar2(10),\n        job varchar2(9),\n        mgr number(4),\n        hiredate date,\n        sal number(7,2),\n        comm number(7,2),\n        deptno number(2) constraint fk_deptno references dept);\n")])])]),a("p",[e._v("Ahora vamos a importar los datos a Oracle. Para ello, vamos a ejecutar los siguientes comandos:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("sqlldr mov/admin control=/home/oracle/dept.ctl log=/home/oracle/dept.log\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("qlldr mov/admin control=/home/oracle/emp.ctl log=/home/oracle/emp.log\n")])])]),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Y sus respectivos ficheros de log.")]),e._v(" "),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("![image]")]),e._v(" "),a("p",[e._v("Cabe destacar, que durante el testeo de este último ejercicio, he obtenido la ayuda de mi compañero Alejandro Montes.")]),e._v(" "),a("p",[e._v("Como podemos comprobar, se ha realizado correctamente la importación de los datos a Oracle desde una base de datos Postgres.")])])}),[],!1,null,null,null);a.default=t.exports},875:function(e,a,o){e.exports=o.p+"assets/img/1-1.66312577.png"},876:function(e,a,o){e.exports=o.p+"assets/img/2-1.77d022b4.png"},877:function(e,a,o){e.exports=o.p+"assets/img/3-1.d2a6e83e.png"},878:function(e,a,o){e.exports=o.p+"assets/img/4-1.1d7e49e8.png"},879:function(e,a,o){e.exports=o.p+"assets/img/1-3.f1e23610.png"},880:function(e,a,o){e.exports=o.p+"assets/img/1-4.bd228637.png"},881:function(e,a,o){e.exports=o.p+"assets/img/2-4.7e99cbe3.png"},882:function(e,a,o){e.exports=o.p+"assets/img/3-4.4225f776.png"}}]);