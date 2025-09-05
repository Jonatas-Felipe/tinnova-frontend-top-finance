// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import prettierConfig from "eslint-config-prettier"; // Configuração para desabilitar regras conflitantes
import pluginPrettier from "eslint-plugin-prettier"; // O plugin que reporta erros do Prettier
import pluginImport from "eslint-plugin-import"; // Plugin para regras de importação

// Nota: A configuração "airbnb" completa no formato Flat Config é complexa.
// Geralmente se usa 'eslint-config-airbnb-base' e adiciona manualmente os plugins necessários
// ou procura um wrapper. Aqui, vou adicionar as regras e plugins que você já tinha no Airbnb
// e que são mais comuns em projetos React/TS.

export default tseslint.config(
  {
    // Configurações globais para todos os arquivos JS/TS/JSX/TSX
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser, // Usa o parser do TypeScript para entender TS/TSX
      parserOptions: {
        ecmaVersion: "latest", // Suporta a versão mais recente do ECMAScript
        sourceType: "module", // Habilita módulos ES
        ecmaFeatures: {
          jsx: true, // Habilita suporte a JSX
        },
        // ✅ Crucial: Aponta para os arquivos TSConfigs para lintagem baseada em tipos
        project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
      },
      globals: {
        ...globals.browser, // Habilita variáveis de ambiente de navegador
        ...globals.node,    // Habilita variáveis de ambiente Node.js
      },
    },
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React instalada
      },
      // ✅ ESSENCIAL para resolver imports TypeScript e aliases como '~'
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true, // Garante que o resolvedor tente encontrar definições de tipo
          project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"], // Os mesmos caminhos que o parser do TS
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"], // Ajuda a resolver extensões (adicionei .d.ts)
        },
      },
      // Para o eslint-plugin-import entender as extensões (se necessário)
      "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    },

    // Extends: Combinações de configurações recomendadas (adaptadas do seu .eslintrc.json)
    extends: [
      pluginJs.configs.recommended, // Regras JS básicas recomendadas do ESLint v9
      ...tseslint.configs.recommended, // Regras TypeScript recomendadas
      // Se você quer as regras que eram do "airbnb", você precisará adicionar os plugins específicos
      // e suas regras. "airbnb" é um 'eslint-config', não um 'plugin'.
      // Vou incluir as que você tinha customizadas, e você pode adicionar mais do airbnb se quiser.
      tseslint.configs.stylistic, // Regras TypeScript estilísticas (opcional, mas bom)
      pluginReact.configs.recommended, // Regras React recomendadas
      pluginReactHooks.configs.recommended, // Regras para React Hooks
      pluginJsxA11y.configs.recommended, // Regras para acessibilidade em JSX/React
      prettierConfig, // DESABILITA regras do ESLint que conflitam com o Prettier (DEVE SER O ÚLTIMO EXTEND)
    ],

    // Plugins: Módulos que fornecem regras e configurações (adaptados do seu .eslintrc.json)
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
      prettier: pluginPrettier, // O plugin que reporta os erros do Prettier
      import: pluginImport, // Plugin de importação
    },

    // Regras Personalizadas ou Sobrescritas (adaptadas do seu .eslintrc.json)
    rules: {
      // Regras de Prettier
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "lf" // ✅ Recomendo 'lf' para consistência entre sistemas.
        }
      ],

      // Regras React
      "react/react-in-jsx-scope": "off", // Desativa para React 17+ (JSX Transform)
      "react/prop-types": "off", // Desativa, pois TypeScript é usado para validação de props
      "react/jsx-props-no-spreading": "off", // Permite spread de props
      "react/jsx-filename-extension": [
        "error", // Mudei de '1' para 'error' para clareza
        {
          "extensions": [".tsx", ".jsx"] // Inclui .jsx também
        }
      ],
      "react/jsx-one-expression-per-line": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-curly-newline": "off", // Você tinha no antigo, mantido

      // Regras React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Regras TypeScript ESLint
      "no-use-before-define": "off", // Desativa a regra JS padrão
      "@typescript-eslint/no-use-before-define": ["error"], // Habilita a regra específica do TS
      // Adicionei algumas do recommended-requiring-type-checking que você pode querer
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "off", // Permite 'any' (considere habilitar em produção)
      "@typescript-eslint/explicit-module-boundary-types": "off", // Desativa exigência de tipos de retorno
      // Regras Airbnb que dependem de TS (se você as usava)
      "@typescript-eslint/no-unsafe-assignment": "off", // Se você tinha essa, geralmente precisa ser desativada com 'any'
      "@typescript-eslint/no-floating-promises": "warn", // Bom manter
      "@typescript-eslint/require-await": "warn",       // Bom manter
      "@typescript-eslint/no-misused-promises": "warn", // Bom manter

      // Regras Import (para resolver 'no-unresolved' e outras)
      "import/extensions": [ // Essa regra é para garantir que a extensão correta seja usada nos imports
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
      ],
      "import/no-unresolved": "off", // ✅ Mantenha DESLIGADO, a resolução será feita via 'import/resolver'
      "import/prefer-default-export": "off", // Permite exportações nomeadas (se você não seguir o padrão default)
      "import/no-dynamic-require": "off", // Permite require dinâmico

      // Regras de Acessibilidade JSX (jsx-a11y)
      "jsx-a11y/label-has-associated-control": "off", // Mantido off como no seu
      "jsx-a11y/control-has-associated-label": "off", // Mantido off como no seu
      "jsx-a11y/img-redundant-alt": "off", // Mantido off como no seu

      // Outras Regras Gerais que você tinha
      "camelcase": "off",
      "no-unused-expressions": "off",
      "global-require": "off",
      "react/destructuring-assignment": "off",
      "no-new": "off",
    },

    // Ignorar Arquivos e Pastas
    ignores: ["dist", "node_modules", "vite.config.ts", ".eslintrc.json", ".prettierrc.cjs", "**/node_modules/"],
  },
  // Configurações específicas para arquivos de teste (exemplo)
  {
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    rules: {
      "no-unused-expressions": "off",
      // ... outras regras específicas para testes
    },
  },
);
