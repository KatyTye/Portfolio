import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../assets/languages/en.json";
import da from "../assets/languages/da.json";

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			da: { translation: da }
		},
		lng: "en",
		debug: false,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;