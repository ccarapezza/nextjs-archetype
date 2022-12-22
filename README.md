# NextJs-Archetype

Este es un arquetipo creado a partir de [Next.js](https://nextjs.org/) y utilizando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Ejecución en desarrollo

Para instalar las dependencias necesarias:

```bash
npm install
```

Para ejecutar el ambiente de desarrollo:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

El punto de entrada es `app/page.tsx`. Las paginas se auto-actualizan cuando las editas.

## Login con Providers de 3eros

Se utiliza [NextAuth.js](https://https://next-auth.js.org//) para administrar las funcionalidades de indentificación.

Asegurarse de cargar las variables necesarias para cada provider en `env.local`.

Se pueden consultar los detalles de configuración de cada Provider en -> [Documentación Providers](https://next-auth.js.org/providers//)

Por defecto se encuentra configurado el provider de Google, a continuación la documentación necesaria:

* [Documentación Google Provider](https://developers.google.com/identity/protocols/oauth2//)
* [Configuración Google Provider](https://console.developers.google.com/apis/credentials//)

Para crear la base de datos utilizamos Sequelize CLI con el comando

```bash
sequelize db:create
```

Creado con Node v18.12.1