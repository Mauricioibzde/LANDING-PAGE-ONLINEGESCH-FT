# 📋 Guia de Semântica e Estrutura - Exclusive Store

## 🎯 Visão Geral

Este documento descreve as melhores práticas e padrões implementados no projeto para manter uma estrutura **limpa, semântica e organizada**.

---

## 📐 Nomenclatura CSS - BEM Methodology

### Padrão BEM (Block, Element, Modifier)

```css
/* BLOCO */
.nav { }

/* ELEMENTO */
.nav__logo { }
.nav__menu { }
.nav__search-actions { }

/* MODIFICADOR */
.btn--primary { }
.btn--secondary { }
.btn--outline { }
```

### Exemplo Prático - Navegação

```html
<nav class="nav">
    <div class="nav__logo">
        <a href="index.html">Logo</a>
    </div>
    
    <div class="nav__menu">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
    </div>
    
    <div class="nav__search-actions">
        <input type="search" placeholder="Search...">
        <a href="#wishlist">Wishlist</a>
        <a href="#cart">Cart</a>
    </div>
</nav>
```

```css
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.nav__logo {
    display: flex;
    align-items: center;
}

.nav__menu {
    display: flex;
    gap: 2rem;
}

.nav__search-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}
```

---

## 🎨 Sistema de Variáveis CSS

Todas as cores, tipografia e espaçamentos estão centralizados em `var.css`:

### Cores

```css
:root {
    /* Cores Primárias */
    --primary: #FFFFFF;
    --secondary: #F5F5F5;
    --tertiary: #0c0c0c;
    
    /* Cores de Texto */
    --text-primary: #FFFFFF;
    --text-secondary: #7D8184;
    --text-third: #000000;
    
    /* Cores de Status */
    --secondary-2: #DB4444;        /* Vermelho */
    --green-color: #00FF66;        /* Verde */
    --button-primary: #000000;     /* Botão preto */
}
```

### Tipografia

```css
:root {
    --font-primary: 900 3rem 'Inter', sans-serif;
    --font-title-section: 700 2rem 'Inter', sans-serif;
    --font-secondary: 400 1rem 'Kedebideri', sans-serif;
    --font-title-footer: 600 1.3rem 'Kedebideri', sans-serif;
    --span-font: 700 1rem 'Kedebideri', sans-serif;
    --li-font: 400 1rem 'Kedebideri', sans-serif;
    --label-font: 500 1rem 'Kedebideri', sans-serif;
}
```

---

## 📱 Estrutura HTML Semântica

### Elementos Semânticos Obrigatórios

```html
<header>        <!-- Cabeçalho da página -->
    <nav>       <!-- Navegação principal -->
</nav>
</header>

<main>          <!-- Conteúdo principal -->
    <section>   <!-- Seção de conteúdo -->
    </section>
    
    <article>   <!-- Artigo independente -->
    </article>
</main>

<footer>        <!-- Rodapé -->
</footer>
```

### Exemplo - Seção de Produtos

```html
<section class="products" aria-label="Produtos em destaque">
    <header>
        <h2>Best Selling Products</h2>
    </header>
    
    <div class="products__grid">
        <article class="card-products">
            <div class="card-products__badge">
                <span>-40%</span>
            </div>
            
            <figure class="card-products__image">
                <img src="product.jpg" alt="Nome do produto">
            </figure>
            
            <div class="card-products__content">
                <h3 class="card-products__title">Nome do Produto</h3>
                <p class="card-products__price">$120 <span>$160</span></p>
                <div class="card-products__rating">
                    <img src="star.svg" alt="5 de 5 estrelas">
                    <span>(88 avaliações)</span>
                </div>
            </div>
            
            <button class="card-products__add-to-cart">Add To Cart</button>
        </article>
    </div>
</section>
```

---

## 🏷️ Atributos HTML Importantes

### ARIA - Acessibilidade

```html
<!-- Rótulos semânticos -->
<label for="email-input">Email</label>
<input id="email-input" type="email" aria-required="true">

<!-- Regiões principais -->
<section aria-label="Carrinho de compras"></section>
<nav aria-label="Navegação principal"></nav>

<!-- Descrição de conteúdo -->
<button aria-label="Remover produto do carrinho">×</button>

<!-- Estado atual -->
<span aria-current="page">Página Atual</span>
```

### Atributos Meta Essenciais

```html
<head>
    <!-- Charset e Viewport -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO -->
    <meta name="description" content="Descrição breve do conteúdo da página">
    <title>Título Descritivo - Site Name</title>
</head>
```

---

## 📋 Padrões de Formulário

### Estrutura Correta

```html
<form action="/login" method="POST">
    <div class="form-group">
        <label for="email" class="form-label">Email Address</label>
        <input 
            type="email" 
            id="email" 
            name="email"
            class="form-input"
            placeholder="example@email.com"
            required 
            aria-required="true">
    </div>
    
    <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input 
            type="password" 
            id="password" 
            name="password"
            class="form-input"
            required 
            aria-required="true">
    </div>
    
    <button type="submit" class="form-button btn--primary">Login</button>
</form>
```

### CSS Correspondente

```css
.form-group {
    margin-bottom: 1.5rem;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-dark);
    border-radius: var(--radius);
    font: var(--font-secondary);
}

.form-input:focus {
    outline: none;
    border-color: var(--secondary-2);
    box-shadow: 0 0 0 3px rgba(219, 68, 68, 0.1);
}

.form-button {
    width: 100%;
    padding: 0.75rem;
    background: var(--button-secondary);
    color: var(--text-primary);
    border: none;
    border-radius: var(--radius);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.form-button:hover {
    background: var(--button-01-hover);
}
```

---

## 🎨 Classes de Botões - BEM

### Tipos de Botões

```html
<!-- Botão Primário -->
<button class="btn btn--primary">Click Me</button>

<!-- Botão Secundário (Vermelho) -->
<button class="btn btn--secondary">Delete</button>

<!-- Botão Outline -->
<button class="btn btn--outline">Cancel</button>

<!-- Botão Verde -->
<button class="btn btn--green">Confirm</button>

<!-- Botão Full Width -->
<button class="btn btn--primary btn--full">Full Width Button</button>
```

### CSS Base

```css
.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    font: var(--font-secondary);
}

.btn--primary {
    background: var(--button-primary);
    color: var(--primary);
}

.btn--primary:hover {
    background: var(--secondary-2);
}

.btn--secondary {
    background: var(--button-secondary);
    color: var(--primary);
}

.btn--outline {
    background: transparent;
    border: 1px solid var(--text-third);
    color: var(--text-third);
}

.btn--outline:hover {
    background: var(--text-third);
    color: var(--primary);
}

.btn--green {
    background: var(--green-color);
    color: var(--text-third);
}

.btn--full {
    width: 100%;
}
```

---

## 📦 Estrutura de Cards

### Produto Card

```html
<article class="card-products">
    <!-- Badge de Desconto -->
    <div class="card-products__badge">
        <span>-40%</span>
    </div>
    
    <!-- Ações Rápidas -->
    <div class="card-products__actions">
        <button aria-label="Add to wishlist">
            <img src="heart.svg" alt="">
        </button>
        <button aria-label="Quick view">
            <img src="eye.svg" alt="">
        </button>
    </div>
    
    <!-- Imagem do Produto -->
    <figure class="card-products__image">
        <img src="product.jpg" alt="Descrição do produto">
    </figure>
    
    <!-- Botão Adicionar ao Carrinho -->
    <button class="card-products__add-to-cart">Add To Cart</button>
    
    <!-- Descrição do Produto -->
    <div class="card-products__description">
        <h3 class="card-products__title">HAVIT HV-G92 Gamepad</h3>
        <p class="card-products__price">
            $120 <span>$160</span>
        </p>
        <div class="card-products__rating">
            <img src="star.svg" alt="5 out of 5 stars">
            <span>(88)</span>
        </div>
    </div>
</article>
```

---

## 🔄 Compatibilidade com Classes Antigas

O projeto mantém **compatibilidade bidirecional** com as classes antigas:

```css
/* Novas classes BEM */
.nav__logo { }

/* Classes antigas (continuam funcionando) */
.logo { }

/* Ambas funcionam */
.nav__logo,
.logo {
    display: flex;
    align-items: center;
}
```

---

## 📝 Dicas de Desenvolvimento

### ✅ Faça:
- Use variáveis CSS para cores e tipografia
- Nomeie classes com padrão BEM
- Inclua `aria-label` em elementos interativos
- Use `figure` para imagens importantes
- Adicione `alt` descritivo em todas as imagens
- Use `section`, `article`, `header`, `footer` apropriadamente

### ❌ Evite:
- Cores hardcoded (use variáveis CSS)
- Classes genéricas como `box`, `item`, `container-blue`
- Elementos `<div>` para tudo (use tags semânticas)
- Labels vazias `<label for="">`
- Links sem `href` (use `<button>` para ações)
- Imagens sem `alt` text

---

## 🔍 Validação

Para validar sua marcação:
- W3C HTML Validator: https://validator.w3.org/
- WebAIM Accessibility Checker: https://webaim.org/
- WAVE Browser Extension

---

## 📚 Referências

- **BEM Methodology**: https://bem.info/
- **MDN HTML Elements**: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- **ARIA Authoring Practices**: https://www.w3.org/WAI/ARIA/apg/
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

---

**Última atualização:** Dezembro 2025
**Status:** Ativo e em uso
