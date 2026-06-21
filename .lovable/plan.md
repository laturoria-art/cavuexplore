# Roadmap del proyecto Perspective — estimación honesta por fases

## Antes de nada: sé honesto contigo

No puedo "revisar el proyecto sin cobrarte créditos". Cada mensaje en **modo plan consume 1 crédito**, y el **modo build cobra por uso** (depende de complejidad, número de archivos tocados, iteraciones y errores). Tampoco existe un número exacto de créditos para "terminar" un proyecto — depende de cuántas idas y vueltas hagamos y de cuántos detalles cambies por el camino.

Lo que sí puedo darte son **rangos realistas por fase** basados en proyectos parecidos (blog en React + Lovable Cloud que ya tienes con auth, perfiles, roles y storage configurados). Trátalos como orientación, no como presupuesto cerrado.

## Estado actual

- Frontend en React + Vite + Tailwind, contenido estático en `src/data`.
- Lovable Cloud activo con tablas de perfiles, roles (`admin`/`user`), trigger `handle_new_user`, función `has_role`, y bucket `media` privado.
- Falta: contenido en base de datos, panel de edición, dominio propio y features de comunidad.

## Fases propuestas y rango de créditos

### Fase 1 — Rebrand / rediseño visual
Nombre, logo, paleta, tipografías, hero, copy principal.
- Pocas iteraciones, decisiones rápidas: **~15–30 créditos**
- Con varias rondas de diseño y prototipos: **~40–70 créditos**

### Fase 2 — CMS / backend real
Tablas `posts`, `categories`, `tags`, RLS + GRANTs, migración del contenido estático, panel `/admin` para crear/editar/publicar artículos con subida de imágenes al bucket `media`.
- Versión mínima funcional: **~60–100 créditos**
- Con editor rich-text, borradores, programación de publicación, SEO por post: **~120–200 créditos**

### Fase 3 — Features de comunidad
Newsletter (Resend vía edge function), búsqueda, filtros por categoría, página de autor, comentarios con moderación.
- Solo newsletter + búsqueda + categorías: **~40–80 créditos**
- Todo incluido con comentarios moderados: **~100–180 créditos**

### Fase 4 — Publicar en dominio propio
Publicar a `*.lovable.app` es gratis (solo el clic). Conectar dominio personalizado requiere **plan de pago** (no se paga en créditos, se paga en €/mes el plan Pro).
- Ajustes SEO, OG tags, favicon, sitemap antes de publicar: **~5–15 créditos**

## Total orientativo para "todo terminado"

- **Camino ajustado** (decisiones rápidas, sin reescribir): **~120–225 créditos**
- **Camino realista** (1–2 rondas de feedback por fase): **~225–400 créditos**
- **Camino amplio** (muchas iteraciones de diseño + features completas): **400+ créditos**

## Cómo gastar menos

1. Decidir el diseño en **una sola ronda** al principio evita rehacer componentes después.
2. Agrupar peticiones ("añade categorías, búsqueda y filtros" en un mensaje en vez de tres).
3. Probar cada fase antes de pedir la siguiente — los bugs encontrados tarde cuestan más.
4. Usar "Try to fix" cuando aparezca un error: **no consume créditos**.
5. Revisar tu saldo en **Settings → Plans & credits** y, si quieres, te lo consulto con la herramienta de balance cuando lo pidas.

## Qué necesito de ti para empezar

Confírmame si quieres atacar las fases **en este orden** (rebrand → CMS → features → publicar) o prefieres otro. Cuando aprueb­es, arrancamos por la Fase 1.
