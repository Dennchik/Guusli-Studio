module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-mixed-spaces-and-tabs": "off", // Запретить смешивание пробелов и табуляций
        "semi": ["error", "always"],
        "quotes": ["warn", "single", { // Предупреждение за использование одинарных кавычек
            "avoidEscape": true, // Позволяет использовать одинарные кавычки для экранирования
            "allowTemplateLiterals": true // Позволяет использовать шаблонные литералы
        }],
        "react/prop-types": "off", // Отключить проверку типов через prop-types
        "react/react-in-jsx-scope": "off", // Отключить требование импортировать
        // React в файлах JSX (не требуется с React 17+)
        "no-unused-vars": "off" // Полностью отключить проверку неиспользуемых переменных
    }
};
