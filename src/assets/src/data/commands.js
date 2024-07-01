export const commands = [
    {
        'name': 'ls',
        'description': 'listar archivos'
    },
    {
        'name': 'ls -l',
        'description': 'listar archivos para ver su cuando fue creado y cuento es su peso'
    },
    {
        'name': 'ls -la',
        'description': 'listar y mostrar los archivos ocultos'
    },
    {
        'name': 'ls -lS',
        'description': 'listar archivos ordenados por tamaño'
    },
    {
        'name': 'ls -lh',
        'description': 'listar archivos para ver su peso de una manera más legible'
    },
    {
        'name': 'ls -lSh',
        'description': 'listar archivos ordenados por tamaño de manera legible'
    },
    {
        'name': 'ls -lr',
        'description': 'listar archivos ordenados de forma inversa'
    },
    {
        'name': 'ls -a',
        'description': 'listar archivos ocultos'
    },
    {
        'name': 'tree',
        'description': 'Desplega directorios como si fuera un arbol (sudo apt-get install tree en caso de no estar instalado)'
    },
    {
        'name': 'tree -L 1',
        'description': 'Desplega directorios como si fuera un arbol pero al primer nivel'
    },
    {
        'name': 'cd',
        'description': 'Movernos entre directorios si especificamos un parametro (el comando sin parametros te redirige a home)'
    },
    {
        'name': 'cd ./Documents',
        'description': 'Movernos entre directorio'
    },
    {
        'name': 'cd ..',
        'description': 'Regresar un directorio atrás'
    },
    {
        'name': 'clear (o tecla ctrl +l)',
        'description': 'Limpiar Pantalla'
    },
    {
        'name': 'pwd',
        'description': 'Nos muestra la ruta donde estamos'
    },
    {
        'name': 'file archivo.txt',
        'description': 'Nos muestra una descripción del archivo'
    },
    {
        'name': 'mkdir miDirectorio',
        'description': 'Crea un directorio tomando como nombre el parametro (recomendable hacerlo sin espacios si es necesario hacerlo de la siguiente forma mkdir "Mi Directorio" pero tomar en cuenta que es más dificil manipular)'
    },
    {
        'name': 'mkdir dir1 dir2 dir3',
        'description': 'Crea multiples directorios'
    },
    {
        'name': 'touch archivo.txt',
        'description': 'Crear un archivo'
    },
    {
        'name': 'cp archivo_a_copiar nombre_nuevo_del_archivo_copiado',
        'description': 'Copiar archivos recibe 2 parametros (el nombre del archivo y el nombre o nuevo nombre del archivo copiado)'
    },
    {
        'name': 'mv archivo_a_mover ruta',
        'description': 'Mover archivos recibe 2 parametros (el nombre del archivo y el nombre o nueva ruta del archivo) por ejemplo: mv file_bk ..'
    },
    {
        'name': 'mv archivo nuevo_nombre',
        'description': 'Este mismo comando también sirve para renombrar archivos'
    },
    {
        'name': 'rm -i archivo',
        'description': 'Elimina el archivo que reciba por parametro pero primero aparecerá un mensaje de confirmación (presionamos y para confirmar la eliminación)'
    },
    {
        'name': 'rm -r carpeta',
        'description': 'Elimina la carpeta y su contenido'
    },
    {
        'name': 'rm -rf carpeta',
        'description': 'Elimina la carpeta y su contenido (no recomendable usar la bandera -f)'
    },
    {
        'name': 'rm -ri carpeta',
        'description': 'Aparecerá un mensaje de confirmación para eliminar el contenido y la carpeta (aparecerá de uno por uno)'
    },
    {
        'name': 'head file.txt',
        'description': 'Muestra las primeras 10 lineas de un archivo'
    },
    {
        'name': 'head file.txt -n 15',
        'description': 'Muestra las primeras 15 lineas de un archivo especificadas por la bandera -n 15'
    },
    {
        'name': 'tail file.txt',
        'description': 'Muestra las ultimas 10 lineas de un archivo'
    },
    {
        'name': 'tail file.txt -n 15',
        'description': 'Muestra las ultimas 15 lineas de un archivo especificadas por la bandera -n 15'
    },
    {
        'name': 'less file.txt',
        'description': 'Muestra las todo el contenido del archivo, nos desplazamos con las flechas de teclado o scroll y con barra espaciadora podemos escribir /palabra_que_buscamos para hacer una busqueda (salimos con la tecla q)'
    },
    {
        'name': 'xdg-open file.txt',
        'description': 'Abre un archivo (en mac se puede usar open file.txt)'
    },
    {
        'name': 'Ctrl +C',
        'description': 'Salir de cualquier proceso en la terminal'
    },
    {
        'name': 'nautilus Documents/Dev',
        'description': 'Abrir el sistema de archivos (abre la carpeta que mandaste por parametro) (Solo funciona en ubuntu)'
    },
    {
        'name': 'type command',
        'description': 'Nos da información detallada de un comando o su ubicación'
    },
    {
        'name': 'alias l="ls -lh"',
        'description': 'Crea un alias temporal en linux'
    },
    {
        'name': 'help command',
        'description': 'Te da una descripción y ayuda más detallada de un comando'
    },
    {
        'name': 'command --help',
        'description': 'Te da una descripción y ayuda más detallada de un comando'
    },
    {
        'name': 'man command',
        'description': 'Te da un manual del comando (funciona en ubuntu)'
    },
    {
        'name': 'info command',
        'description': 'Te da un manual del comando pero más resumido (funciona en ubuntu)'
    },
    {
        'name': 'whatis command',
        'description': 'Te da un manual del comando pero más resumido (funciona en ubuntu)'
    },
    {
        'name': 'ls *.txt',
        'description': 'Wildcards filtra los archivos con la extención (en este caso .txt)'
    },
    {
        'name': 'ls datos*',
        'description': 'Wildcards filtra los archivos que empiecen con el parametro escrito "datos" antes del "*" (por ejemplo: datos1 datos2 datos123)'
    },
    {
        'name': 'ls datos?',
        'description': 'Wildcards filtra los archivos que empiecen con el parametro escrito "datos" antes del "?" pero que después del parametro enviado "datos" solo contenga un caracter (por ejemplo: datos1 datos2)'
    },
    {
        'name': 'ls datos???',
        'description': 'Wildcards filtra los archivos que empiecen con el parametro escrito "datos" antes del "???" pero que después del parametro enviado "datos" contenga tres caracteres (por ejemplo: datos123)'
    },
    {
        'name': 'ls [[:upper:]]*',
        'description': 'Wildcards filtra los archivos que empiecen con mayúsculas y que despues tenga otros caracteres (busca contenido de por lo menos los primeros 2 niveles de carpetas)'
    },
    {
        'name': 'ls -d [[:upper:]]*',
        'description': 'Wildcards filtra los directorios que empiecen con mayúsculas y que despues tenga otros caracteres'
    },
    {
        'name': 'ls -d [[:lower:]]*',
        'description': 'Wildcards filtra los directorios que empiecen con minúsculas y que despues tenga otros caracteres'
    },
    {
        'name': 'ls [ad]*',
        'description': 'Wildcards filtra por caracteres que empiecen con las letras que están dentro de los corchetes (ejemplo: datos1 abc dot...)'
    },
    {
        'name': 'ls [ai]*.html',
        'description': 'Wildcards filtra por caracteres que empiecen con las letras que están dentro de los corchetes y con la extención ".html" (ejemplo: index.html)'
    },
    {
        'name': '1 y 2 éstandar Output',
        'description': 'Son estandares output 1 es correcto 2 es error'
    },
    {
        'name': 'ls Pictures > misarchivos.txt',
        'description': 'Crea un archivo .txt (o lo sobreescribe por el operador ">") con el nombre de todos los archivos contenidos en la carpeta Pictures'
    },
    {
        'name': 'ls Pictures >> misarchivos.txt',
        'description': 'Crea un archivo .txt (o añade líneas por el operador ">>") con el nombre de todos los archivos contenidos en la carpeta Pictures'
    },
    {
        'name': 'ls ljksadas > error.txt',
        'description': 'Crea un archivo .txt pero como en este ejemplo la carpeta no existe entonces crea un archivo vacio'
    },
    {
        'name': 'ls ljksadas 2> error.txt',
        'description': 'Crea un archivo .txt pero aquí si se guarda el error en texto (el número 2 es de finderror)'
    },
    {
        'name': 'ls ljksadas > output.txt 2>&1',
        'description': 'Reedirigir el estandar output y el éstandar error esto es muy util para saber si nos va a traer un resultado bueno o malo'
    },
    {
        'name': 'echo "Hola Mundo"',
        'description': 'Imprime el texto dentro de las comillas "Hola Mundo"'
    },
    {
        'name': 'cat error.txt output.txt',
        'description': 'Imprime el contenido de un archivo y ademas permite concatenar con otro archivo'
    },
    {
        'name': 'cat < error.txt',
        'description': 'el < redirige a un éstandar output lo mismo que hacer "cat error.txt"'
    },
    {
        'name': 'ls -lh | less',
        'description': 'permite reedirigir a otro comando, es decir ejecutar dos comandos a la vez (por ejemplo en este comando se lista y ademas permite buscar con el comando less entre los archivos)'
    },
    {
        'name': 'ls -lh | tee output.txt | less',
        'description': 'permite reedirigir a los otros comandos despues del pipe (por ejemplo primero va a listar por el comando ls -lh y creará el archivo txt con el contenido de ls -lh por el comando tee y permitira buscar por el comando less)'
    },
    {
        'name': 'ls -lh Pictures | sort | tee pictures.txt | less',
        'description': 'permite reedirigir a los otros comandos despues del pipe (por ejemplo primero va a listar por el comando ls -lh, despues va a ordenarlos por el comando sort y creará el archivo txt con el contenido de ls -lh y sort, además por el comando tee y permitira buscar por el comando less)'
    },
    {
        'name': 'cowsay "Hola"',
        'description': 'Vaca diciendo Hola (cabe mencionar que debe estar instalada esta funcionalidad sudo apt install cowsay)'
    },
    {
        'name': 'echo "Hola Mundo" | lolcat',
        'description': 'Permite imprimir lo que esta dentro de las comillas y con el pipe redirige a lolcat y se imprime el texto degradado por lolcat (cabe mencionar que debe estar instalada esta funcionalidad sudo apt install lolcat)'
    },
    {
        'name': 'cowsay "Hola Amigos" | lolcat',
        'description': 'Permite imprimir lo que esta dentro de las comillas (con la vaca) y con el pipe redirige a lolcat y se imprime el texto degradado por lolcat (cabe mencionar que debe estar instalada esta funcionalidad sudo apt install lolcat y sudo apt install cowsay)'
    },
    {
        'name': 'ls; mkdir holi; cal',
        'description': 'Se ejecutan de manera sincrona (primero lista los archivos, luego crea la carpeta y al final muestra un calendario)'
    },
    {
        'name': 'ls & date & cal',
        'description': 'Se ejecutan de manera asincrona usando "&" (debemos tener cuidado porque ejecuta otra terminal en segundo plano)'
    },
    {
        'name': 'mkdir test && cd test',
        'description': 'Comando condicional, si se cumple la primera instrucción enseguida se ejecutará la siguiente'
    },
    {
        'name': 'cd CarpetaInexistente && touch archivo.txt && echo "Archivo Creado"',
        'description': 'Comando condicional, si se cumple la primera instrucción enseguida se ejecutará la siguiente (en este ejemplo la carpeta no existe, entonces el comando para de ejecutarse y no se ejecutan las siguientes instrucciones)'
    },
    {
        'name': 'cd CarpetaInexistente || touch archivo.txt || echo "Archivo Creado"',
        'description': 'Comando condicional, el comando "operador de control or ||" si no se cumple la primera instrucción enseguida se ejecutará la siguiente (en este ejemplo la carpeta no existe y marcará el error en la terminal, pero, el comando siguiente comando seguirá ejecutandose)'
    },
    {
        'name': 'cd CarpetaInexistente || echo "Cambio de carpeta"',
        'description': 'Comando condicional, el comando "operador de control or ||" si no se cumple la primera instrucción enseguida se ejecutará la siguiente (en este ejemplo la carpeta no existe y marcará el error en la terminal, pero, si imprimira la segunda instrucción y debemos tener cuidado porque puede ser incoherente)'
    },
]