# 📚 GUIA DE MIGRAÇÃO - Nova Estrutura CSS

## 🎯 Objetivo
Migrar gradualmente do código legado para a nova estrutura organizada e modular.

---

## 📁 NOVA ESTRUTURA DE PASTAS

```
style/
├── base/
│   ├── variables.css      ← Variáveis CSS (antes: var.css)
│   └── reset.css          ← Reset e estilos base (antes: global.css)
│
├── components/
│   └── buttons.css        ← TODOS os botões consolidados ✨
│
├── layout/
│   ├── nav.css
│   ├── footer.css
│   ├── mobile-sidebar.css
│   └── top-header.css
│
├── pages/
│   ├── login-page.css
│   ├── cart.css
│   ├── account.css
│   ├── about.css
│   ├── contact.css
│   └── product-details.css
│
├── utilities/
│   └── helpers.css        ← Classes auxiliares (antes: utilitys.css)
│
├── responsive/
│   └── mobile.css
│
└── [arquivos legados]     ← Temporários, serão removidos
    ├── bem-layout.css
    ├── refactor.css
    ├── utilitys.css
    └── global.css
```

---

## 🔄 COMO USAR A NOVA ESTRUTURA

### Opção 1: Migração Gradual (Recomendado)

**1. Adicione o novo import no index.html:**

```html
<!-- Depois da linha com style/index.css, adicione: -->
<link rel="stylesheet" href="style/index-new.css">
```

**2. Teste em dev:**
```bash
npm run dev
```

**3. Verifique se tudo funciona:**
- ✅ Botões com hover
- ✅ Layout preservado
- ✅ Responsividade mantida

**4. Se tudo OK, substitua no index.html:**
```html
<!-- Remova a linha antiga -->
<link rel="stylesheet" href="style/index.css">

<!-- Use a nova -->
<link rel="stylesheet" href="style/index-new.css">
```

---

### Opção 2: Ativação Imediata

Renomeie os arquivos:

```bash
# Backup do antigo
Rename-Item "style\index.css" -NewName "index-old.css"

# Ativa o novo
Rename-Item "style\index-new.css" -NewName "index.css"
```

---

## 🎨 MUDANÇAS NAS CLASSES DE BOTÃO

### ❌ CLASSES ANTIGAS (Deprecated)

```html
<!-- NÃO USE MAIS -->
<button class="btn-red">Delete</button>
<button class="btn-green">Confirm</button>
<button class="btn-outline">Cancel</button>
<button class="btn-submit">Submit</button>
```

### ✅ NOVAS CLASSES BEM

```html
<!-- USE ESTAS -->
<button class="btn btn--secondary">Delete</button>
<button class="btn btn--green">Confirm</button>
<button class="btn btn--outline">Cancel</button>
<button class="btn btn--primary">Submit</button>
```

---

## 📖 GUIA DE BOTÕES

### Botões Básicos

```html
<!-- Primário (preto) -->
<button class="btn btn--primary">Primary</button>

<!-- Secundário (vermelho) -->
<button class="btn btn--secondary">Secondary</button>

<!-- Outline (borda) -->
<button class="btn btn--outline">Outline</button>

<!-- Verde -->
<button class="btn btn--green">Green</button>

<!-- Desabilitado -->
<button class="btn btn--primary" disabled>Disabled</button>
```

### Tamanhos

```html
<!-- Pequeno -->
<button class="btn btn--primary btn--small">Small</button>

<!-- Normal (padrão) -->
<button class="btn btn--primary">Normal</button>

<!-- Grande -->
<button class="btn btn--primary btn--large">Large</button>

<!-- Full width -->
<button class="btn btn--primary btn--full">Full Width</button>
```

### Botões Especiais

```html
<!-- Botão de remover (X circular) -->
<button class="btn btn--remove">×</button>

<!-- Botão de navegação (seta circular) -->
<button class="btn btn--nav">
    <img src="arrow.svg" alt="Next">
</button>

<!-- Botão com ícone -->
<button class="btn btn--icon btn--primary">
    <img src="icon.svg" alt="">
</button>

<!-- Quick actions (wishlist/quick view) -->
<button class="btn btn--quick-action">
    <img src="heart.svg" alt="Add to wishlist">
</button>
```

### Grupos de Botões

```html
<!-- Grupo horizontal -->
<div class="btn-group">
    <button class="btn btn--outline">Cancel</button>
    <button class="btn btn--primary">Save</button>
</div>

<!-- Grupo centralizado -->
<div class="btn-group btn-group--center">
    <button class="btn btn--primary">View All Products</button>
</div>

<!-- Grupo alinhado à direita -->
<div class="btn-group btn-group--end">
    <button class="btn btn--nav" id="btn-left">←</button>
    <button class="btn btn--nav" id="btn-right">→</button>
</div>
```

---

## 🛠️ BENEFÍCIOS DA NOVA ESTRUTURA

| Antes | Depois |
|-------|--------|
| 23 arquivos na raiz | 7 pastas organizadas |
| 4 arquivos com estilos de botão | 1 arquivo único |
| Classes inconsistentes | 100% BEM |
| Valores hardcoded | 100% variáveis CSS |
| Difícil manutenção | Modular e escalável |

---

## ⚠️ COMPATIBILIDADE BACKWARD

As **classes antigas ainda funcionam** temporariamente:
- `.btn-red` → funciona mas use `.btn--secondary`
- `.btn-green` → funciona mas use `.btn--green`
- `.btn-outline` → funciona mas use `.btn--outline`
- `.btn-submit` → funciona mas use `.btn--primary`

**Prazo para migração:** Até versão 2.0

---

## 🧪 CHECKLIST DE TESTE

Após ativar a nova estrutura, teste:

- [ ] Página inicial (index.html)
- [ ] Botões hover funcionando
- [ ] Botões de navegação (setas)
- [ ] Botões "View All Products"
- [ ] Botões "Add to Cart"
- [ ] Botões wishlist/quick view
- [ ] Página de login
- [ ] Página de carrinho
- [ ] Botão "Remove" no carrinho
- [ ] Botão "Apply Coupon"
- [ ] Mobile menu (hamburguer)
- [ ] Responsividade 950px
- [ ] Responsividade 600px

---

## 🚀 PRÓXIMOS PASSOS

### Fase 1: ✅ CONCLUÍDO
- [x] Criar estrutura de pastas
- [x] Consolidar botões em components/buttons.css
- [x] Criar base/reset.css
- [x] Criar base/variables.css
- [x] Organizar layout/ pages/ utilities/ responsive/

### Fase 2: EM ANDAMENTO
- [ ] Testar nova estrutura
- [ ] Migrar HTML para novas classes
- [ ] Remover duplicações

### Fase 3: PLANEJADO
- [ ] Criar components/cards.css
- [ ] Criar components/forms.css
- [ ] Consolidar bem-layout.css
- [ ] Remover arquivos legados

---

## 💡 DÚVIDAS?

**P: Posso usar as duas estruturas ao mesmo tempo?**  
R: Sim! A nova estrutura mantém compatibilidade com as classes antigas.

**P: Quando devo migrar completamente?**  
R: Gradualmente. Migre uma página por vez.

**P: E se algo quebrar?**  
R: Use o backup index-old.css e reporte o problema.

**P: Como saber qual botão usar?**  
R: Consulte a seção "Guia de Botões" acima ou veja components/buttons.css.

---

**Criado em:** 19/12/2025  
**Status:** Estrutura base implementada  
**Próxima atualização:** Após testes completos
