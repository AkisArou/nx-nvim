# NxNvim

Minimal nx monorepo for nvim lsp experimentation.
`
lib-2.tsx imports lib-1.tsx.
LSP find references do not work!

- tsc --showConfig at ROOT
{
    "compilerOptions": {
        "rootDir": "./",
        "sourceMap": true,
        "declaration": false,
        "moduleResolution": "node10",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "importHelpers": true,
        "target": "es6",
        "module": "esnext",
        "lib": [
            "es2017",
            "dom"
        ],
        "skipLibCheck": true,
        "skipDefaultLibCheck": true,
        "baseUrl": "./",
        "paths": {
            "@nx-nvim/lib-1": [
                "libs/lib-1/src/index.ts"
            ],
            "@nx-nvim/lib-2": [
                "libs/lib-2/src/index.ts"
            ]
        }
    },
    "files": [
        "./apps/react-app/vite.config.ts",
        "./apps/react-app/src/main.tsx",
        "./apps/react-app/src/app/app.tsx",
        "./apps/react-app-e2e/cypress.config.ts",
        "./apps/react-app-e2e/src/e2e/app.cy.ts",
        "./apps/react-app-e2e/src/support/app.po.ts",
        "./apps/react-app-e2e/src/support/commands.ts",
        "./apps/react-app-e2e/src/support/e2e.ts",
        "./libs/lib-1/src/index.ts",
        "./libs/lib-1/src/lib/lib-1.tsx",
        "./libs/lib-2/src/index.ts",
        "./libs/lib-2/src/lib/lib-2.tsx"
    ],
    "exclude": [
        "node_modules",
        "tmp"
    ]
}

- tsc --showConfig at lib-1
  {
    "compilerOptions": {
        "rootDir": "../..",
        "sourceMap": true,
        "declaration": false,
        "moduleResolution": "node10",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "importHelpers": true,
        "target": "es6",
        "module": "esnext",
        "lib": [
            "es2017",
            "dom"
        ],
        "skipLibCheck": true,
        "skipDefaultLibCheck": true,
        "baseUrl": "../..",
        "paths": {
            "@nx-nvim/lib-1": [
                "libs/lib-1/src/index.ts"
            ],
            "@nx-nvim/lib-2": [
                "libs/lib-2/src/index.ts"
            ]
        },
        "jsx": "react-jsx",
        "allowJs": false,
        "esModuleInterop": false,
        "allowSyntheticDefaultImports": true,
        "strict": true
    },
    "references": [
        {
            "path": "./tsconfig.lib.json"
        }
    ],
    "exclude": [
        "../../node_modules",
        "../../tmp"
    ]
}

- tsc --showConfig at lib-2
  {
    "compilerOptions": {
        "rootDir": "../..",
        "sourceMap": true,
        "declaration": false,
        "moduleResolution": "node10",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "importHelpers": true,
        "target": "es6",
        "module": "esnext",
        "lib": [
            "es2017",
            "dom"
        ],
        "skipLibCheck": true,
        "skipDefaultLibCheck": true,
        "baseUrl": "../..",
        "paths": {
            "@nx-nvim/lib-1": [
                "libs/lib-1/src/index.ts"
            ],
            "@nx-nvim/lib-2": [
                "libs/lib-2/src/index.ts"
            ]
        },
        "jsx": "react-jsx",
        "allowJs": false,
        "esModuleInterop": false,
        "allowSyntheticDefaultImports": true,
        "strict": true
    },
    "references": [
        {
            "path": "./tsconfig.lib.json"
        }
    ],
    "exclude": [
        "../../node_modules",
        "../../tmp"
    ]
}
