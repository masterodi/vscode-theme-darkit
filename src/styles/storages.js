import colors from '../colors.js';

const storagesStyles = [
    {
        name: 'Storage',
        scope: [
            'storage',
            'meta.implementation storage.type.objc',
            'meta.interface-or-protocol storage.type.objc',
            'source.groovy storage.type.def',
        ],
        settings: {
            foreground: colors.debianRed[400],
            fontStyle: '',
        },
    },
    {
        name: 'Types',
        scope: [
            'entity.name.type',
            'keyword.primitive-datatypes.swift',
            'keyword.type.cs',
            'meta.protocol-list.objc',
            'meta.return-type.objc',
            'source.go storage.type',
            'source.groovy storage.type',
            'source.java storage.type',
            'source.powershell entity.other.attribute-name',
            'storage.class.std.rust',
            'storage.type.attribute.swift',
            'storage.type.c',
            'storage.type.core.rust',
            'storage.type.cs',
            'storage.type.groovy',
            'storage.type.objc',
            'storage.type.php',
            'storage.type.haskell',
            'storage.type.ocaml',
        ],
        settings: {
            fontStyle: 'italic',
            foreground: colors.dustyOrange[400],
        },
    },
    {
        name: 'Generics, templates, and mapped type declarations',
        scope: [
            'entity.name.type.type-parameter',
            'meta.indexer.mappedtype.declaration entity.name.type',
            'meta.type.parameters entity.name.type',
        ],
        settings: {
            foreground: colors.amber[200],
        },
    },
    {
        name: 'Modifiers',
        scope: ['storage.modifier'],
        settings: {
            foreground: colors.debianRed[400],
        },
    },
];

export default storagesStyles;
