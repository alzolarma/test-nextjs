# ePayco Test Frontend

Este proyecto es una **prueba de frontend** usando **Next.js 16**, **React 19**, **TypeScript 5** y **TailwindCSS 4**.  
Está estructurado siguiendo **Atomic Design** y hace uso de **SSR** y **API fake en memoria** para simular la creación de posts.  
> Nota: solo la creación de posts se almacena en memoria para mostrar el listado actualizado.

---

## Tecnologías y dependencias

| Tecnología | Versión | Descripción |
|------------|---------|------------|
| Next.js | 16.0.3 | Framework React con App Router, SSR y SSG |
| React | 19.2.0 | Librería de UI para componentes cliente y servidor |
| TypeScript | 5 | Tipado estático y seguridad en los datos |
| TailwindCSS | 4 | Framework CSS utilitario para diseño responsivo |
| Zod | 4.1.12 | Validación de esquemas y formularios |
| @heroicons/react | 2.2.0 | Iconos SVG para UI (sidebar, botones, acciones) |
| ESLint | 9 | Linter y buenas prácticas de código |

---

## Requisitos previos

- Node.js >= 20
- npm, yarn, o pnpm

---

## Instalación

```bash
git clone <git@github.com:alzolarma/test-nextjs.git>
cd test-nextjs
npm install
```

## Scripts
```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Compila el proyecto
npm run start    # Inicia el servidor de producción
npm run lint     # Corre el linter
```

## Rutas
| Ruta                           | Funcionalidad    | Fuente de datos                           | Limitaciones                                   |
| ------------------------------ | ---------------- | ----------------------------------------- | ---------------------------------------------- |
| `/dashboard/posts`             | Listado de posts | Mezcla de JSONPlaceholder + memoria local | Los posts locales y remotos se muestran juntos |
| `/dashboard/posts/create`      | Crear post       | Memoria local                             | Solo existe durante la sesión del servidor     |
| `/dashboard/posts/[id]/edit`   | Editar post      | JSONPlaceholder                           | Solo posts reales, no locales                  |
| `/dashboard/posts/[id]`        | Ver detalle      | JSONPlaceholder                           | Los posts locales no se muestran               |


## Estructura de carpetas
```
app/
├─ components/
│  ├─ atoms/       # Inputs, botones, items
│  ├─ molecules/   # Formularios, Paginador, Menú lateral, Mensajes
│  ├─ organisms/   # TablePosts, Sidebar, Formularios completos, PostCard, Modal
│  └─ templates/   # Plantillas de Post, Sidebar
├─ api/            # API - fakedatabase (memoria)
|  ├─ fake-db.ts   # Base de datos en memoria para posts
├─ lib/
│  ├─ services/    # API real + API fake
│  ├─ schemas/     # Validaciones con Zod
│  └─ types/       # Interfaces de post y validaciones
├─ dashboard/
│  ├─ posts/       # Listado, creación, edición, detalle
│  └─ layout.tsx   # Layout SSR para dashboard
└─ app/page.tsx    # Página principal
```
