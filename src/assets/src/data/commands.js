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
]