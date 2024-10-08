# Formulario

# Form Builder - Angular

Este proyecto es una aplicación de **Generador de Formularios Dinámicos** desarrollada en Angular. Permite crear formularios personalizados mediante una interfaz de usuario de arrastrar y soltar, además de exportar los formularios como JSON o verlos en una vista previa.

## Características

- Creación de formularios dinámicos.
- Funcionalidad de arrastrar y soltar (Drag & Drop).
- Campos personalizables.
- Generación de JSON a partir del formulario.
- Vista previa del formulario generado.
- Validaciones de formularios.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 12.x o superior).
- [Angular CLI](https://angular.io/cli) (versión 12.x o superior).

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/form-builder-angular.git
   ```

2. Navega hasta el directorio del proyecto:

   ```bash
   cd form-builder-angular
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

## Ejecución del proyecto

Para ejecutar el proyecto localmente, usa el siguiente comando:

```bash
ng serve
```

Luego, abre tu navegador y navega a `http://localhost:4200/` para ver la aplicación en acción.

## Uso

1. **Arrastrar y soltar campos**: Puedes seleccionar los diferentes tipos de campos del panel de componentes y arrastrarlos a la zona de creación del formulario.
   
2. **Configurar campos**: Cada campo añadido se puede personalizar con diferentes propiedades (por ejemplo, nombre del campo, etiquetas, validaciones, etc.).

3. **Vista previa**: Puedes ver cómo se vería el formulario final antes de exportarlo.

4. **Exportar JSON**: El formulario generado se puede exportar como un archivo JSON que describe la estructura del formulario.

## Estructura del proyecto

- **src/app/form-builder**: Contiene los componentes principales para la construcción del formulario.
  - `form-builder.component.ts`: Componente principal que gestiona la lógica de creación del formulario.
  - `form-element.component.ts`: Componente que representa un campo de formulario individual.
  - `form-preview.component.ts`: Componente que muestra la vista previa del formulario creado.

- **@angular/cdk/drag-drop**: Biblioteca utilizada para la funcionalidad de arrastrar y soltar.

## Bibliotecas utilizadas

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/) (opcional para diseño y componentes)
- [@angular/cdk/drag-drop](https://material.angular.io/cdk/drag-drop/overview) (para funcionalidad de arrastrar y soltar)

## Personalización

Si deseas agregar más tipos de campos o modificar la funcionalidad existente:

1. Navega hasta el componente `form-builder.component.ts`.
2. Agrega o modifica las funciones que manejan la creación de nuevos campos de formulario.
3. Asegúrate de añadir las correspondientes validaciones y vistas previas en el archivo `form-preview.component.ts`.

## Contribuciones

Si deseas contribuir a este proyecto, puedes:

1. Hacer un fork del repositorio.
2. Crear una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Hacer los cambios y commit (`git commit -am 'Agrega nueva característica'`).
4. Hacer push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abrir un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo [LICENSE](LICENSE).
