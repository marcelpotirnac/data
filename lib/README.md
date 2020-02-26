## Library architecture

```text
@ngxs/data
├── src
|   └── *.ts
├── public_api.ts
├── package.json
└── typings - Common interfaces for primary and secondary packages
|   ├── src
|   |   └── *.ts
|   ├── public_api.ts
|   └── package.json
└── tokens - Common constants and tokens
|   ├── src
|   |   └── *.ts
|   ├── public_api.ts
|   └── package.json
└── internals - Internal API (not use for public API)
    ├── src
    |   └── *.ts
    ├── public_api.ts
    └── package.json
```