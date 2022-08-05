import colors from '../colors.js';

const serializableConfigLanguages = [
    {
        name: 'Keys (serializable languages)',
        scope: [
            'entity.name.function.target.makefile',
            'entity.name.section.toml',
            'entity.name.tag.yaml',
            'variable.other.key.toml',
        ],
        settings: {
            foreground: colors.debianRed[300],
        },
    },
    {
        name: 'Dates / timestamps (serializable languages)',
        scope: ['constant.other.date', 'constant.other.timestamp'],
        settings: {
            foreground: colors.debianRed[400],
        },
    },
    {
        name: 'YAML aliases',
        scope: ['variable.other.alias.yaml'],
        settings: {
            fontStyle: 'italic underline',
            foreground: colors.blizzardBlue[400],
        },
    },
];

export default serializableConfigLanguages;
