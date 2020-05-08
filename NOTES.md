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
recibe por argumento el elemento del DOM sobre el que aplica en el HTML
se utiliza para modificar el comportamiento por defecto que tenga un elemento de HTML
por ejemplo alguna funcionalidad nativa que querramos modificar
o alguna nativa de angular que querramos modificar


### INJECCION DE DEPENDENCIAS
es el patron que angular utioliza para agregar instancias de cualquier miembro (servicio, pipe, componente, modulo....) a traves del constructor en los componentes
esa dependencia se resuelve como unica para la aplcaicaion, es decir a traves de un singleton se comparte la misma referencia en memoria del miembro injectado.

### compatibilidad de los Servicios y Redux
ambos coinciden en ser las entidades que capturan los datos a consumir por los componentes.
Redux es un patron, con todas las entidades que lo conforman, que se encarga de persistir los datos de un componente a traves de Observables (stream de datos)

### FOLDERS BY FEATURE
es duna arquitectura de diseño de aplicacion, que permite estructurarlo por modulos
modulo -> directivas , pipes, componentes....


## PIDPES IPUROS Y PUROS
IMPUROS: guardan un estado interno, que significa que los valores de entrasda se procesan internamente para devolver un valor diferente en cada ejecucion. Y no son compartidos en memoria, que quiere decir que cada vez que se referencia al pipe, es una referencia diferente

PUROS: el valor de retorno guarda relacion con los valores de entrada, por lo que no tiene un estado interno del metodo. Esto permite compartirse, y asi actuar como un Singleton (misma referencia del Pipe, para cualquier llamada)

JsonPipe, SlicePipe, AsyncPipe: son considerados puros , porque aunque puedan usarse para procesar un mismo objeto de entrada, Angular exige una conddicion mas para que el pipe pueda ser considerado como pupo (en este caso es un pipe nativo, asi que estan definidos como impuros), y es que deben se inmutables (las spropiedades de objetos guardan referencias en memoria reemplpazables, aunqmue este considerado como CONST)

### HTTPCLIENT
Es un libreria del core de angular que permite lanzar request http manejadas con observables
Agrega todas las interfaces necesarias para contruir una REST API
Al ser manejadas como stream de datos asincronos (Observables sobre fetch), se  deben resolver por suscripcion al Observable,
ya sea por ().subscribe() en el componente o por el AsyncPipe en el template

### MODULOS
Estructura de conrtol de features -> Folder by feature -> LIFT
Normalmente se crea un modulo por escenario, y por ruta


### Folder by feature
Se trata de que cada interfaz de UI tenga su modulo.
por ejemplo el listado de resultados: lista de resultados con cada item e informacion
resumen de resultados: paginamcion, resultado de filtros y ordenacion
filtros
 
Modularizatr trae beneficios en performance: 
scripts que carga by default Angular: main.js, polifills.js, numtime.js, syles.js, vemdors.js

main.js -> donde residen nuestros componentes -> este main solo tiene el contenido de los comsponentes que se cargan

providers: se especifican en el script de modules, es la lista de injectables que permite especificar el ambito solo para ese modulo -> de esta manera le podemos eliminar el 
@Injectable({provider : "root"}) 

`shared`: modulo compartido que contiene todos los artefactos que se comparten entre modulos

`onInit`: por buenas practicas es conveniente dejar el metodo de la interfa onInit, aunque sea vacia

### LIFT
Locale (facil de identificar): con prefijos y sufijos del tipo de artefactos
FLAT: lo mas pequeño, sencillo posible, por cada modulo, 2/3 directorios
T-DRY: try to be dry -> dont repeat yourself, reutilizar codigo


### SHORT IMPORTS
para las rutas relativas -> tsconfig.json -> compileOptions


### REDIRECCIONES POR PARAMETROS
tenemos 2 mmanneras de pasar parametros a traves de las rutas
- params: es como asignar una ruta pero el nombre del recurso para la nueva ruta, se asigna a un parametro que recibiremos a traves de la injeccion de Router en el componente mque se carga
    - RUTA: '/products/:id'
    - URL: http://www.localhost/products/123
    - PARAM: {id: 123} 
- query: se utiliza para inicializar la ruta con varios parametros -> se enviaran por GET en la request de la nueva ruta


### NAVEGACION
- ROUTER: por injeccion en los componentes
- ROUTER LINK: es una directiva que se asigna a calquier link o input que lanza el Router

### RUTA VACIA
Es buena practica (por SEO y ya que se suele compartir las webs a la ruta por defecto) definir una redireccion a la ruta de la Home, que en nustra SPA cargará una ruta y componente adecuados
```javascript
const routes: Routes = [{
  path: '',
  redirectTo: 'todo-list',
  pathMatch: 'full'
}]
``` 

### RUTA POR DEFECTO O 404
```javascript
const routes: Routes = [{
  path: '**',
  component: NotFoundComponent,
}]
``` 


### PRECARGA DE MODULOS
- es una practica basica el cargar cada modulo asignado a una ruta de manera lazy, asi solo descargamos en la SPA los scripts que corresponden a ala secion del routing que se esta utilizando
- este lazy module es perjudicial en redes o dispositivos de carga lenta porque el hecho de descargar un script de pagina detiene la interaccion de usuario
- para estps casos (y solo en los que se deba justificar la precarga de scrips) se puede parametrizar el RouterModule.forroute, con una {preloadingStrategy} . Hay de varios tipos: 
- {preloadingStrategy :PreloadAllModules}: una vez que el navegador se liberer de las descargas necesarias para la ruta actual, empezará a descargar los scripts de los NModulos de las demas rutas. De esta manera, al ya estar precargados, al navegar a otras rutas, no causara bloqueo de interaccion de usuario. 
- {preloadingStrategy :PreloadingStrategy}: se define una serie de Modulos que se cargaran de inmediato a que el navegador libere recursos.


### NGmodel versus Formularios reactivos
El ngmodel es una directiva que permite sincronizar un control con una propiedad del componente (ENLACE DE DATOS). Pero consume muchos recursos porque tiene que hacer varias validaciones

Fromularios Reactivos: se trata de un enlace de datos para controles de Formularios cuya logica queda dentro del controlador
mejor control de la logica aislada , y facilmente testeable por unitarios.
no consume tanmtos recursos como el NgModel

El enlace de datos se activa on demand, se tiene que asociar (esto ahorra muchos recursos)
el enlace de datos es un Observable

- {valueChanges} -> enlace de datos -> suscripmcion a los cambios del stream de datos en su observable
- Validacion: validacion nativa de Angular
- son dos elementos que podemos controlar independientemente: el Formcontrol y su enlace de datos
Podemos acceder a todas las prokpiedades del FormControl en cualquier momento desde el template
- Factor de usabilidad: para las validaciones: anormalmente las validacinoes deberian aplicarse desde que el usuario inicializa interaccion sobre cualquier control, esto significa que aunquue no cumpla desde el proincipio las reglas de validacion aplicadas, NO deberiamos mostrar el/los mensajes de errores de validacion. Para eso tenemos 2 marcadores booleanos de cada con Control
    - dirty: el control se ha inicializado
    - pristine: el control aun no se ha manipulado 
- Podemos acceder al tipo de error cuando el formulario es invalido

### Manejo de validaciones asyncronas
ocurre el caso de que el valor asignado a nuestro control debe validarse con una fuente de datos externa a la aplicacion 
class FormControl(initvalue: string, syncValidations: ValidatorFn[], asyncValidations: AsyncValidatorFn[]) 

Problema de metodo estatico: la buena practica, y como menciona la gua de Angular, es definir metodos estaticos para la validacion de formularios reactivos. Un problema de dependencias en validacion asincrona es que necesitamos del servicio que consulte con los datos para nuestra validacion, pero se da el caso que los metodos estaticos NO pueden hacer referencia a propiedades de clase, asi que el servicio se añade como dependencia del metodo por parametro + programamcion funcional: deviuelve un a funcion parametrizable con el valor de input (isBannedUser())

## Viewport observers :  BREAKPOINTS NATIVOS DE ANGULAR
const isHandset$: Observer<boolean> = 
    this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
        map((result) => result.matches),
        shareReplay()
    )

### modulos de Autenticacion
pertenecera a un area diferente que la de website o admin (cms)
contendrá los componentes de login y register
- npm install firebase @angular/fire --save
- angular Firebase 2 -> web server de autenticacion de usuarios
https://firebase.google.com/
https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
https://firebase.google.com/docs/reference/js/firebase.auth.Auth

- autenticamos con la cuenta de goole
- se crea un proyecto, que contendra aplicaciones
- cada aplicacion se regstrara en un espacio de hosting de la propia nube de firebase (que se asignara cuando crees la aplciacion)
- Storage Bucket: es la parte del hosting de Firebase que almacena los arvhivos (hay que activarlo) -> cualquier cosa que genere un usuario -> debe salir en la config de {firebaseConfig}
- se añade el {firebaseConfig} en environments.ts

### Gestion de Hosting
a traves de la CLI: $firebase login, init, deploy

### Habilitar el modo de autenticacion
Una vez que hemos configurado nuestro entorno con el proyecto y la app de FIrebase, hay que registrar el modo de autenticacion,
desde el dashboard de usuario de FIrebase
 - Por telefono: Firebase enviara un Codigo via  mesnsaje al movil del usuario
 - Por alguna platafotrma OAUTH de terceros: Google, Github, yahoo, Microsoft..
 - Por email/pass

### Ejercicio Tabla Material
- Añadir 40 productos al db.json
- añadir categorias a cada producto
- crear data table en una nueva ruta del area de admin
- nuevo componente ->> productListDetailsComponent
- tabla de productos que lee cada 5 productos de la rest API
- Retrieving data through http: debajo del footer debe tener un paginator por cada 5 o 10 productos -> cada paginacion añade 5 o 10 productos de la lista a mostrar
- columna de editar -> con u boton Action que redirige a otra pagina de edicion de producto 
- filtro por ocurrencia
- filtro con un selector por categoria (crear nueva entrada en la db.json) y cada seleccion hara un arequest al server y descargara uana nueva lista de tabla
- on click -> la tabla se expande y se visualiza la imagen

### Comunicacion entre componentes que se encuentran en diferentes modulos
- crear modulo carrito dentro del website con routing
- a esta pagina se van a añadir todos productos que se añadan desde la pagina de /products
- queremos comunicar los productos de /products -> /cart
- añadir en la cabezera del website un boton a la derecha del nav-header , que lleve a la pa,gina de carrito y que muestre con un bach (boton de material) con un contador de los carritos comunicados al modulo de carrito.
