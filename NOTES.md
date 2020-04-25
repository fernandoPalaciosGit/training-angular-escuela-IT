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
`@Component`: partes interactiva de la aplicación -> lógica de negocio -> solamente se encarga de la renderizacion de sus templates
los componentes tuienbene una forma de interactuar :
    - @Input: property binding -> enviar datos al template
    - @Output: event binding -> recibir datos del template
`@Service`: proveer de los datos a los componentes  

### DEPLOY
NodeJS se utiliza para compilar la aplicacion, entonces se crean archivos estaticos para poderlos servir desde cualquier entorno de produccion (es decir no necesitas Node en el hosting, solo un servidor web que sirva los archivos estaticos peviamente compilados)
Firebase (compilar con node) --> push --> Asure (server web)

-> renderizado en servidor: aqui si es necesario una maquinba de Node en el servidor web para procesar en las peticiones el contenido estatico   


### TEMPLATE
- data bindding: enlace de datos entre el componente y su template
- string interpolation {{ }} : donde se interpretan los datos del componente
se puede ejecutar codigo javascript dentro del interprete74


### NG MODEL
se utiliza para asignar un modelo de datos a un input de formulario
es una directiva del módulo de FormControl, así que hay que incluirla como dependencia en App.module


### NGIF
es una directiva que se utiliza para renderizar bloques de contenido dentro de untemplate de componente
NO solamente es una regla para la visualizacion, implica la ejecución o no de todos los elementos incorporados dentro de su instruccion, por lo que si hay mas componentes dentro de su bloque, si no se cumple su condición, no se ejecutara internamente el bloque.
En ese sentido, favorece el performance.

#### NG SHITCH
es una avariante del ngif que permite tener varios condicionales anidados, y ademas uno por defecto


###  BROWSER MODULE
contiene todas las directivas necesarias para renderizar en templates (ngif, ngswitch, ngfor).

### PIPES -> performance en el render de los templates
un ejemplo claro para aplicar pipes en un NgModel binding a un input de control de foprmulario
dependiendo de como sea la implementacion de su callback de evento, siempre se estara ejecutando el metodo porque su properti binding puede que se este manipulando todo el tiempo.
Aqui aplicacremos pipes a partir de 2 concenpos
    - Funciones puras: es una funcion que devuelve el mismo valor sin tener en cuenta los argumentos que le pases
    - patron memoized : el resultado de un calculo se almacenara en cache para asociarlo al mismo tiopo de llamada
    

### DIRECTIVAS
