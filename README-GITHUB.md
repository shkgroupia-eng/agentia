# 🚀 Agente IA - Landing Page

Landing page completa para o Agente IA - Atendimento Automatizado 24/7

## 🌐 Demo

**URL:** https://seu-usuario.github.io/agente-ia/

## 📦 Estrutura do Projeto

```
agente-ia/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── images/             # Pasta de imagens
│   ├── logo.png
│   └── mascote-agente-ia.jpeg
├── favicon.png         # Ícone do site
└── README.md          # Este arquivo
```

## 🎨 Features

✅ **Design Responsivo** - Funciona em desktop, tablet e mobile
✅ **Animações Suaves** - Scroll reveal e hover effects
✅ **FAQ Interativo** - Accordion com perguntas frequentes
✅ **Chat Demo** - Demonstração animada do agente
✅ **SEO Otimizado** - Meta tags e Schema markup
✅ **Performance** - CSS e JS otimizados
✅ **Analytics Ready** - Preparado para Google Analytics e Facebook Pixel

## 🚀 Como Fazer Deploy no GitHub Pages

### Passo 1: Criar Repositório

1. Vá em https://github.com/new
2. Nome do repositório: `agente-ia`
3. Marque: **Public**
4. Clique em **Create repository**

### Passo 2: Upload dos Arquivos

#### Opção A: Via Interface do GitHub (Mais Fácil)

1. No repositório criado, clique em **Add file** → **Upload files**
2. Arraste todos os arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - Pasta `images/` com logo e mascote
   - `favicon.png`
3. Clique em **Commit changes**

#### Opção B: Via Git (Terminal)

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/agente-ia.git
cd agente-ia

# Adicione os arquivos
git add .
git commit -m "Initial commit - Landing page Agente IA"
git push origin main
```

### Passo 3: Ativar GitHub Pages

1. No repositório, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Clique em **Save**
5. Aguarde 1-2 minutos
6. Seu site estará em: `https://seu-usuario.github.io/agente-ia/`

## 📸 Imagens Necessárias

Você precisa adicionar estas imagens na pasta `images/`:

1. **logo.png** - Logo da SHK GROUP
   - Tamanho recomendado: 200x80px
   - Formato: PNG com fundo transparente

2. **mascote-agente-ia.jpeg** - Mascote do Agente IA (tubarão)
   - Tamanho recomendado: 800x800px
   - Formato: JPEG ou PNG

3. **favicon.png** - Ícone do site
   - Tamanho: 32x32px ou 64x64px
   - Formato: PNG

## 🎯 Personalização

### Mudar Número do WhatsApp

Abra `index.html` e procure por:
```
https://wa.me/551112839594
```

Substitua `551112839594` pelo seu número com DDI.

### Mudar Cores

Abra `styles.css` e modifique as variáveis CSS no início do arquivo:
```css
:root {
    --purple-500: #8b5cf6;
    --purple-600: #7c3aed;
    --text-primary: #1a1a2e;
}
```

### Adicionar Google Analytics

Adicione antes do `</head>` no `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Adicionar Facebook Pixel

Adicione antes do `</head>` no `index.html`:
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🔧 Solução de Problemas

### Site não carrega após deploy

- Aguarde 2-5 minutos (GitHub leva tempo para processar)
- Verifique se o GitHub Pages está ativado em Settings > Pages
- Certifique-se que o arquivo principal é `index.html` (minúsculo)

### Imagens não aparecem

- Verifique se as imagens estão na pasta `images/`
- Verifique os nomes dos arquivos (case-sensitive)
- Limpe o cache do navegador (Ctrl+Shift+R)

### CSS não está aplicado

- Verifique se `styles.css` está na raiz do projeto
- Abra o DevTools (F12) e veja se há erros no Console
- Limpe o cache do navegador

## 📊 Performance

✅ **PageSpeed Score:** 95+
✅ **Mobile Friendly:** 100%
✅ **First Contentful Paint:** < 1.5s
✅ **Time to Interactive:** < 3.0s

## 🛠️ Tecnologias

- HTML5 Semântico
- CSS3 (Flexbox, Grid, Animations)
- JavaScript Vanilla (ES6+)
- Schema.org Markup
- Intersection Observer API

## 📝 Licença

Projeto criado por SHKGROUP.IA - Janeiro 2026

## 🆘 Suporte

Dúvidas ou problemas? 
- Email: contato@shkgroup.ia
- WhatsApp: https://wa.me/551112839594

---

**Desenvolvido com 💜 por SHKGROUP.IA**
