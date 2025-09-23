# SCONS - Soares Campos Optimized Navigation System

Sistema de navegação otimizada para aplicações corporativas com login centralizado e controle de acesso hierárquico.

## 🚀 Tecnologias

- **Next.js 15.5.3** - React Framework
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS
- **Framer Motion** - Animações
- **React 19** - Interface de usuário

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js)
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Componentes organizados por categoria
│   ├── animations/         # Componentes de animação
│   │   ├── BackgroundAnimation.tsx
│   │   └── index.ts
│   ├── layout/            # Componentes de layout
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── sections/          # Seções da página
│   │   ├── ApplicationPreviewsSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HeroSection.tsx
│   │   └── index.ts
│   ├── ui/                # Componentes de interface reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── index.ts
│   └── index.ts          # Exportações centralizadas
├── hooks/                 # Hooks customizados
│   └── index.ts
├── lib/                   # Utilitários e configurações
│   ├── constants.ts
│   └── utils.ts
└── types/                 # Definições de tipos TypeScript
    └── index.ts
```

## 🎨 Funcionalidades

### ✅ Implementado

- **Hero Section** com navegação e CTAs
- **Seção de Recursos** com animações
- **Previews de Aplicações** com placeholders
- **Footer** completo com links e newsletter
- **Animações de fundo** sutis e elegantes
- **Design responsivo** para todos os dispositivos
- **Modo escuro** automático
- **Estrutura de componentes** escalável
- **Sistema de tipagem** TypeScript
- **Hooks customizados** reutilizáveis

### 🔄 Recursos Principais

- **Login Centralizado (SSO)** - Autenticação unificada
- **Acesso Hierárquico** - Controle granular de permissões
- **Previews de Aplicações** - Visualização antes do acesso

## 🛠️ Desenvolvimento

### Executar o projeto

```bash
npm run dev
```

### Build para produção

```bash
npm run build
npm start
```

### Estrutura de Componentes

#### Exportações Centralizadas

Cada pasta de componentes possui um `index.ts` que centraliza as exportações:

```typescript
// Importação limpa e organizada
import { HeroSection, FeaturesSection } from "@/components";
```

#### Componentes UI Reutilizáveis

```typescript
import { Button, Container } from "@/components";

// Uso do Button com variantes
<Button variant="primary" size="lg">
  Acessar SCONS
</Button>;
```

#### Hooks Customizados

```typescript
import { useScrollPosition, useLocalStorage } from "@/hooks";

const scrollY = useScrollPosition();
const [theme, setTheme] = useLocalStorage("theme", "light");
```

## 📱 Design System

### Cores

- **Primárias**: Azul (#2563eb) e Roxo (#7c3aed)
- **Neutras**: Escala de cinzas para textos e fundos
- **Gradientes**: Utilizados em CTAs e elementos destacados

### Tipografia

- **Fonte principal**: Inter, Segoe UI, system-ui
- **Escalas**: Responsivas com Tailwind CSS
- **Pesos**: Regular (400), Semibold (600), Bold (700)

### Animações

- **Framer Motion** para transições suaves
- **Configurações centralizadas** em `lib/constants.ts`
- **Performance otimizada** com lazy loading

## 🔧 Configuração

### TypeScript

Tipos personalizados definidos em `src/types/index.ts` para:

- Props de componentes
- Interfaces de dados
- Configurações de animação

### Tailwind CSS

Configuração customizada com:

- Scroll behavior suave
- Scrollbar personalizada
- Focus states aprimorados
- Animações de gradiente

## 🎯 Próximos Passos

- [ ] Implementar sistema de autenticação
- [ ] Adicionar roteamento para aplicações
- [ ] Criar dashboard administrativo
- [ ] Integrar com APIs backend
- [ ] Adicionar testes unitários
- [ ] Implementar PWA
- [ ] Adicionar i18n (internacionalização)

## 📄 Licença

Este projeto é propriedade de Soares Campos.

---

**Desenvolvido por [Soares Campos](https://github.com/ICampos05) - 2025**
