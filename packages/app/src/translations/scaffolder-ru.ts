import { createTranslationMessages } from '@backstage/core-plugin-api/alpha';
import { scaffolderTranslationRef } from '@backstage/plugin-scaffolder/alpha'

const ru = createTranslationMessages({
  ref: scaffolderTranslationRef,
  full: false, // False means that this is a partial translation
  messages: {
    'templateWizardPage.title': 'Добавление нового компонента',
    'templateWizardPage.subtitle': 'Создание компонента платформы по шаблону',
    'templateWizardPage.pageTitle': 'Добавление компонента'
  },
});

export default ru;