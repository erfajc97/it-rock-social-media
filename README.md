# Red Social - IT Rock Challenge

Red social desarrollada con Next.js 15, Tailwind CSS 4, Redux Toolkit y NextAuth.

## 🚀 Características

- Autenticación con email/contraseña y Google OAuth
- Feed de publicaciones con interacciones (me gusta, favoritos, compartir, comentarios)
- Creación de publicaciones con texto e imágenes
- SSR con Next.js 15
- Estado global con Redux Toolkit y Redux Persist
- Diseño responsive
- Arquitectura Atomic Design
- TypeScript completo
- Storybook para documentación de componentes

## 📋 Requisitos

- Node.js 18+
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio y entra al directorio:

```bash
git clone https://github.com/erfajc97/it-rock-social-media
cd it_rock_social_media
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea el archivo `.env.local` con las siguientes variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu-clave-secreta-aqui

# Opcional: Para login con Google
GOOGLE_CLIENT_ID=tu-google-client-id
GOOGLE_CLIENT_SECRET=tu-google-client-secret
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Uso

### Login

- **Email/Contraseña**: Usa cualquier email y la contraseña `123456` para login de prueba
- **Google OAuth**: Configura las credenciales de Google en `.env.local`

### Funcionalidades

- Ver y crear publicaciones
- Dar me gusta, favoritos y compartir
- Comentar en publicaciones
- Sistema de autenticación completo

## 🏗️ Estructura del Proyecto

```
src/
├── components/        # Componentes React (Atomic Design)
│   ├── atoms/        # Componentes básicos
│   ├── molecules/    # Componentes compuestos
│   ├── organisms/    # Componentes complejos
│   └── templates/    # Plantillas de páginas
├── hooks/            # Hooks personalizados
├── assets/           # Recursos estáticos (iconos SVG)
│   └── icons/
├── interfaces/       # Interfaces TypeScript
├── lib/              # Utilidades y helpers
└── store/            # Redux store y slices
```

## 🧪 Storybook

Para ver los componentes documentados:

```bash
npm run storybook
```

Abre [http://localhost:6006](http://localhost:6006)

## 📦 Tecnologías

- Next.js 15 (App Router)
- Tailwind CSS 4
- Redux Toolkit + Redux Persist
- NextAuth v5
- TypeScript
- React Hook Form + Zod
- Storybook

## 📄 Scripts

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run storybook` - Inicia Storybook
- `npm run build-storybook` - Build de Storybook

## 👨‍💻 Autor

Erick Jimenez Challenge Técnico de IT Rock
