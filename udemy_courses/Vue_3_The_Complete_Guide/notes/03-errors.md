
### TypeScript intellisense is disabled on template

TypeScript intellisense is disabled on template, you can config `"jsx": "preserve"` in tsconfig or jsconfig to enable it, or config `vueCompilerOptions.experimentalDisableTemplateSupport` to disable this prompt.

Just add ' "jsx":"preserve" ' to jsconfig.json file. Example:

    {
        "compilerOptions": {
            "target": "es5",
            "module": "esnext",
            "baseUrl": "./",
            "moduleResolution": "node",
            "paths": {
                "@/*": [
                    "src/*"
                ]
            },
            "lib": [
                "esnext",
                "dom",
                "dom.iterable",
                "scripthost"
            ],
            "jsx": "preserve"
        }
    }