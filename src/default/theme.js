import {
    commentsStyles,
    constantsStyles,
    edgeCasesStyles,
    entitiesStyles,
    functionsStyles,
    generalStyles,
    keywordsStyles,
    languageBuiltInsStyles,
    oopStyles,
    punctuationsStyles,
    regexpStyles,
    serializableConfigLanguages,
    storagesStyles,
    stringsStyles,
    variablesStyles,
    workbenchStyles,
} from './styles/index.js';

const darkitTheme = {
    name: 'Darkit',
    colors: workbenchStyles,
    tokenColors: [
        ...generalStyles,
        ...oopStyles,
        ...commentsStyles,
        ...constantsStyles,
        ...entitiesStyles,
        ...functionsStyles,
        ...keywordsStyles,
        ...languageBuiltInsStyles,
        ...punctuationsStyles,
        ...serializableConfigLanguages,
        ...storagesStyles,
        ...regexpStyles,
        ...stringsStyles,
        ...variablesStyles,
        ...edgeCasesStyles,
    ],
    semanticHighlighting: true,
};

export default darkitTheme;
