### ANGULAR es considerado una plataforma de utilidades

- PROTRACTOR: permite construir y lanzar test e2e, que eventualmente se puede combinar con Cypres
- API Formularios: permite manejar  validaciones bastante complejas
- PWA: instalar aplicaciones de cliente web --> como objetivo de esta solucion: performance de la aplicacion
- AUGURY: plugin de debug en consola
- ROUTING
- ELEMENTS: permite construir componentes nativos de HTML5 desde el framework
- CDK
- Angular Universal: server side rendering, mejoras en el SEO
- KARMA: pruebas unitarias de módulos
- HTTP
- MATERIAL: subset de diseño de componentes con Material design
- CLI: construir proyecto


### ALGUNOS ARCHIVOS INICIALES DEL PROYECTO
./src/assets: se añade cualquier dato de apoyo, como mocks para testing o configuraciones estáticas que requiera algún modulo.

./src/environments: configuracion de propiedades de entorno (staging, preprod (revision final de cliente, config de base de datos de pruebas), produccion)

./src/index.html: es donde se carga el modulo principar: app.module.ts, esta maqueta NO se toca, a menos que haya que configurar algun tema de cabeceras de servidor o precargar scripts en el header

./src/angular.json: archivo de configuracion del framework: desde aqui se pueden crear minstrucciones para el funcionamiento de la aplicacion, como mejoras de rendimiento....


### PARTES DE ANGULAR
componentes: partes interactiva de la aplicación -> lógica de negocio 

### DEPLOY
NodeJS se utiliza para compilar la aplicacion, entonces se crean archivos estaticos para poderlos servir desde cualquier entorno de produccion (es decir no necesitas Node en el hosting, solo un servidor web que sirva los archivos estaticos peviamente compilados)
Firebase (compilar con node) --> push --> Asure (server web)

-> renderizado en servidor: aqui si es necesario una maquinba de Node en el servidor web para procesar en las peticiones el contenido estatico   


### TEMPLATE
- data bindding: enlace de datos entre el componente y su template
- string interpolation {{ }} : donde se interpretan los datos del componente
se puede ejecutar codigo javascript dentro del interprete


### NG MODEL
se utiliza para asignar un modelo de datos a un input de formulario
es una directiva del módulo de FormControl, así que hay que incluirla como dependencia en App.module
