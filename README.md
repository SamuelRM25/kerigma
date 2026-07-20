# KERYGMA — Web

Sitio oficial de **KERYGMA**, marca de streetwear cristiano. Diseño moderno, bilingüe (ES/EN), optimizado para Hostinguer.

---

## ✨ Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** con paleta personalizada (negro / blanco / rojo)
- **Framer Motion** (animaciones de scroll, hero, reveals)
- **next/font** (Bebas Neue, Inter, Playfair Display)
- **Lucide React** (íconos)

---

## 🚀 Desarrollo local

```bash
cd /Users/samuelrm/Desktop/kerygma-web
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 🏗 Build de producción

```bash
npm run build
```

El build estático se genera en la carpeta `.next/`. Para exportarlo como sitio estático (HTML/CSS/JS puros, recomendado para Hostinguer compartido), agrega a `next.config.js`:

```js
module.exports = {
  output: "export",
  images: { unoptimized: true },
};
```

y luego:

```bash
npm run build
```

Los archivos exportados quedan en la carpeta **`out/`**.

---

## 🌐 Despliegue en Hostinguer

Hostinger (Hostinguer) tiene dos caminos: **hosting compartido** o **VPS**.

### Opción A — Hosting compartido (Hostinger Premium/Business)

Este plan soporta **sitios estáticos** fácilmente:

1. Agrega `output: "export"` y `images: { unoptimized: true }` en `next.config.js` (ver arriba).
2. Ejecuta `npm run build`.
3. Sube el contenido de la carpeta `out/` a `public_html/` de tu hosting vía:
   - **File Manager** del panel de Hostinger, o
   - **FTP** (recomendado) usando FileZilla con las credenciales que Hostinger te da.
4. Listo. Tu dominio ya debe apuntar a esa carpeta.

> ⚠️ El plan compartido **no soporta Node.js**, por eso exportamos a estático. Si necesitas SSR/ISR, ve a la opción B.

### Opción B — VPS / Cloud Hosting de Hostinger (con Node.js)

Si más adelante quieres Server-Side Rendering, formularios server actions, etc.:

1. En el panel de Hostinger, crea un **VPS** y configura Node.js 18+ (manual o vía `nvm`).
2. Clona el repo en el servidor.
3. `npm install` y `npm run build`.
4. Corre con **PM2** para mantenerlo vivo:

```bash
npm i -g pm2
pm2 start npm --name kerygma -- start
pm2 save
pm2 startup
```

5. Apunta tu dominio al VPS (registro A en DNS) y configura **Nginx** como reverse proxy al puerto 3000.

---

## 📁 Estructura

```
public/
  assets/
    logo/            # kerygma-logo.png (león de Judá)
    hero/            # imágenes del carrusel principal
    video/           # showcase.mp4 (video full-width)
    productos/       # catálogo de productos
    clientes/        # fotos de clientes satisfechos
    congregaciones/  # fotos en congregaciones / Explo

src/
  app/
    page.tsx                     # Home principal
    [categoria]/page.tsx         # /hoodies, /t-shirt, /balaclava (scaffold)
    layout.tsx                   # Layout raíz (Header, Footer, WhatsApp)
    globals.css
  components/
    Header.tsx                   # Nav sticky + selector ES/EN
    HeroCarousel.tsx             # Scroll horizontal automático + versículo
    CategoriesGrid.tsx           # 3 categorías: Hoodies / T-Shirt / Balaclava
    VideoShowcase.tsx            # Video full-width con bordes redondeados
    AboutSection.tsx             # Quiénes somos + Visión
    Testimonials.tsx             # Clientes satisfechos
    PresenceSection.tsx          # Presencia en congregaciones / Explo
    Footer.tsx                   # Footer + redes sociales
    WhatsAppFloat.tsx            # Botón flotante WhatsApp
  i18n/
    es.json
    en.json
  lib/
    language.tsx                 # Context Provider de idioma
    site.ts                      # Constantes (categorías, contacto)
```

---

## 🛠 Configuración

### Cambiar número de WhatsApp

`src/lib/site.ts`:

```ts
whatsappNumber: "50248900116",
whatsappLink: "https://wa.me/50248900116",
```

### Cambiar redes sociales

Mismo archivo `src/lib/site.ts`:

```ts
instagram: "https://www.instagram.com/trastorna_con_estilo",
facebook: "https://www.facebook.com/profile.php?id=61590358049995",
```

### Agregar / cambiar categorías

`src/lib/site.ts` — array `CATEGORIES`. Cada categoría genera automáticamente su ruta `/[slug]`.

### Cambiar textos

- Español: `src/i18n/es.json`
- Inglés: `src/i18n/en.json`

### Cambiar paleta de colores

`tailwind.config.ts` → `theme.extend.colors.kerygma`.

---

## 📱 Responsive

- Mobile-first
- Breakpoints: `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px

---

## 📋 Pendientes (siguiente fase)

- [ ] Catálogo real con precios en `/hoodies`, `/t-shirt`, `/balaclava`
- [ ] Producto individual con galería, tallas, "Pedir por WhatsApp"
- [ ] SEO meta por página
- [ ] Analytics
- [ ] Optimización de imágenes (`next/image` con dominios remotos si añades CDN)

---

Hecho con propósito. KERYGMA — *Ropa que proclama*.