"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const generate_1 = __importDefault(require("../src/generate"));
const templates_1 = require("./assets/templates");
const common_1 = require("@pdfme/common");
const schemas_1 = require("@pdfme/schemas");
const utils_1 = require("./utils");
const PERFORMANCE_THRESHOLD = parseFloat(process.env.PERFORMANCE_THRESHOLD || '1.5');
describe('generate integration test(label, envelope)', () => {
    describe.each([templates_1.label, templates_1.envelope])('%s', (templateData) => {
        const entries = Object.entries(templateData);
        for (let l = 0; l < entries.length; l += 1) {
            const [key, template] = entries[l];
            // eslint-disable-next-line no-loop-func
            test(`snapshot ${key}`, async () => {
                const inputs = (0, common_1.getInputFromTemplate)(template);
                const font = (0, utils_1.getFont)();
                font.SauceHanSansJP.fallback = false;
                font.SauceHanSerifJP.fallback = false;
                font['NotoSerifJP-Regular'].fallback = false;
                // @ts-ignore
                font[template.fontName].fallback = true;
                const hrstart = process.hrtime();
                const pdf = await (0, generate_1.default)({
                    inputs,
                    template,
                    plugins: { text: schemas_1.text, image: schemas_1.image },
                    options: { font },
                });
                const hrend = process.hrtime(hrstart);
                const execSeconds = hrend[0] + hrend[1] / 1000000000;
                if (process.env.CI) {
                    expect(execSeconds).toBeLessThan(PERFORMANCE_THRESHOLD);
                }
                else if (execSeconds >= PERFORMANCE_THRESHOLD) {
                    console.warn(`Warning: Execution time for ${key} is ${execSeconds} seconds, which is above the threshold of ${PERFORMANCE_THRESHOLD} seconds.`);
                }
                const tmpFile = (0, utils_1.getPdfTmpPath)(`${key}.pdf`);
                const assertFile = (0, utils_1.getPdfAssertPath)(`${key}.pdf`);
                (0, fs_1.writeFileSync)(tmpFile, pdf);
                const res = await Promise.all([(0, utils_1.getPdf)(tmpFile), (0, utils_1.getPdf)(assertFile)]);
                const [a, e] = res;
                expect(a.Pages).toEqual(e.Pages);
            });
        }
    });
});
//# sourceMappingURL=integration1.test.js.map