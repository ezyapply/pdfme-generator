"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdfLib = __importStar(require("@pdfme/pdf-lib"));
const common_1 = require("@pdfme/common");
const utils_1 = require("@pdfme/schemas/utils");
const helper_js_1 = require("./helper.js");
const generate = async (props) => {
    (0, common_1.checkGenerateProps)(props);
    const { inputs, template, options = {}, plugins: userPlugins = {} } = props;
    const basePdf = template.basePdf;
    if (inputs.length === 0) {
        throw new Error('[@pdfme/generator] inputs should not be empty, pass at least an empty object in the array');
    }
    (0, helper_js_1.validateRequiredFields)(template, inputs);
    const { pdfDoc, renderObj } = await (0, helper_js_1.preprocessing)({ template, userPlugins });
    const _cache = new Map();
    for (let i = 0; i < inputs.length; i += 1) {
        const input = inputs[i];
        const dynamicTemplate = await (0, common_1.getDynamicTemplate)({
            template,
            input,
            options,
            _cache,
            getDynamicHeights: (value, args) => {
                return (0, utils_1.getDynamicHeightsForTable)(value, args);
            },
        });
        const { basePages, embedPdfBoxes } = await (0, helper_js_1.getEmbedPdfPages)({
            template: dynamicTemplate,
            pdfDoc,
        });
        const schemaNames = [
            ...new Set(dynamicTemplate.schemas.flatMap((page) => page.map((schema) => schema.name))),
        ];
        for (let j = 0; j < basePages.length; j += 1) {
            const basePage = basePages[j];
            const embedPdfBox = embedPdfBoxes[j];
            const page = (0, helper_js_1.insertPage)({ basePage, embedPdfBox, pdfDoc });
            for (let l = 0; l < schemaNames.length; l += 1) {
                const name = schemaNames[l];
                const schemaPage = dynamicTemplate.schemas[j] || [];
                const schema = schemaPage.find((s) => s.name == name);
                if (!schema) {
                    continue;
                }
                const render = renderObj[schema.type];
                if (!render) {
                    continue;
                }
                const value = schema.readOnly ? schema.content || '' : input[name];
                await render({ value, schema, basePdf, pdfLib, pdfDoc, page, options, _cache });
            }
        }
    }
    (0, helper_js_1.postProcessing)({ pdfDoc, options });
    return pdfDoc.save();
};
exports.default = generate;
//# sourceMappingURL=generate.js.map