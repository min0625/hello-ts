import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

// eslint-disable-next-line @typescript-eslint/no-deprecated
export default tseslint.config(
  { ignores: ['dist/'] },
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: { allowDefaultProject: ['*.js'] },
      },
    },
  },
  eslintConfigPrettier
);
