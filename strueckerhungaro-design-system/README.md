# Struecker Hungaro Design System

Pacote inicial em React + Vite + Tailwind baseado no Key Visual 2024 do Struecker Hungaro.

## Tokens oficiais

- Blue Digital: `#4760F0`
- Blue Business: `#0D1453`
- Yellow Attention: `#FAAE39`
- Beige Modern: `#EDE6DE`
- Tipografia: `Poppins`

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como subir no GitHub

```bash
git init
git add .
git commit -m "Initial design system based on SH Key Visual"
git branch -M main
git remote add origin https://github.com/viniciusacarv/strueckerhungaro.git
git push -u origin main
```

Se o repositório já estiver inicializado:

```bash
git add .
git commit -m "Add initial design system"
git push
```

## Estrutura

```txt
src/
  components/
    BrandButton.tsx
    BrandCard.tsx
    BrandHero.tsx
    BrandLayout.tsx
    SocialPost.tsx
  styles/
    tokens.css
    globals.css
  assets/
    logos/
    icons/
    images/
```

## Observação sobre assets

Este pacote cria a base de código e reserva pastas para logos, ícones e imagens. Para produção, exporte os logos e ícones oficiais do arquivo original em SVG/PNG e coloque nas pastas correspondentes.
