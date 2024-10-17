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
exports.insertPage = exports.postProcessing = exports.preprocessing = exports.validateRequiredFields = exports.getEmbedPdfPages = void 0;
const fontkit = __importStar(require("fontkit"));
const common_1 = require("@pdfme/common");
const schemas_1 = require("@pdfme/schemas");
const pdf_lib_1 = require("@pdfme/pdf-lib");
const constants_js_1 = require("./constants.js");
const getEmbedPdfPages = async (arg) => {
    const { template: { schemas, basePdf }, pdfDoc, } = arg;
    let basePages = [];
    let embedPdfBoxes = [];
    if ((0, common_1.isBlankPdf)(basePdf)) {
        const { width: _width, height: _height } = basePdf;
        const width = (0, common_1.mm2pt)(_width);
        const height = (0, common_1.mm2pt)(_height);
        basePages = schemas.map(() => {
            const page = pdf_lib_1.PDFPage.create(pdfDoc);
            page.setSize(width, height);
            return page;
        });
        embedPdfBoxes = schemas.map(() => ({
            mediaBox: { x: 0, y: 0, width, height },
            bleedBox: { x: 0, y: 0, width, height },
            trimBox: { x: 0, y: 0, width, height },
        }));
    }
    else {
        const willLoadPdf = typeof basePdf === 'string' ? await (0, common_1.getB64BasePdf)(basePdf) : basePdf;
        const embedPdf = await pdf_lib_1.PDFDocument.load(willLoadPdf);
        const embedPdfPages = embedPdf.getPages();
        embedPdfBoxes = embedPdfPages.map((p) => ({
            mediaBox: p.getMediaBox(),
            bleedBox: p.getBleedBox(),
            trimBox: p.getTrimBox(),
        }));
        const boundingBoxes = embedPdfPages.map((p) => {
            const { x, y, width, height } = p.getMediaBox();
            return { left: x, bottom: y, right: width, top: height + y };
        });
        const transformationMatrices = embedPdfPages.map(() => [1, 0, 0, 1, 0, 0]);
        basePages = await pdfDoc.embedPages(embedPdfPages, boundingBoxes, transformationMatrices);
    }
    return { basePages, embedPdfBoxes };
};
exports.getEmbedPdfPages = getEmbedPdfPages;
const validateRequiredFields = (template, inputs) => {
    template.schemas.forEach((schemaPage) => schemaPage.forEach((schema) => {
        if (schema.required && !schema.readOnly && !inputs.some((input) => input[schema.name])) {
            throw new Error(`[@pdfme/generator] input for '${schema.name}' is required to generate this PDF`);
        }
    }));
};
exports.validateRequiredFields = validateRequiredFields;
const preprocessing = async (arg) => {
    const { template, userPlugins } = arg;
    const { schemas } = template;
    const pdfDoc = await pdf_lib_1.PDFDocument.create();
    // @ts-ignore
    pdfDoc.registerFontkit(fontkit);
    const pluginValues = (Object.values(userPlugins).length > 0
        ? Object.values(userPlugins)
        : Object.values(schemas_1.builtInPlugins));
    const schemaTypes = schemas.flatMap((schemaPage) => schemaPage.map((schema) => schema.type));
    const renderObj = schemaTypes.reduce((acc, type) => {
        const render = pluginValues.find((pv) => pv.propPanel.defaultSchema.type === type);
        if (!render) {
            throw new Error(`[@pdfme/generator] Renderer for type ${type} not found.
Check this document: https://pdfme.com/docs/custom-schemas`);
        }
        return { ...acc, [type]: render.pdf };
    }, {});
    return { pdfDoc, renderObj };
};
exports.preprocessing = preprocessing;
const postProcessing = (props) => {
    const { pdfDoc, options } = props;
    const { author = constants_js_1.TOOL_NAME, creationDate = new Date(), creator = constants_js_1.TOOL_NAME, keywords = [], language = 'en-US', modificationDate = new Date(), producer = constants_js_1.TOOL_NAME, subject = '', title = '', } = options;
    pdfDoc.setAuthor(author);
    pdfDoc.setCreationDate(creationDate);
    pdfDoc.setCreator(creator);
    pdfDoc.setKeywords(keywords);
    pdfDoc.setLanguage(language);
    pdfDoc.setModificationDate(modificationDate);
    pdfDoc.setProducer(producer);
    pdfDoc.setSubject(subject);
    pdfDoc.setTitle(title);
};
exports.postProcessing = postProcessing;
const insertPage = (arg) => {
    const { basePage, embedPdfBox, pdfDoc } = arg;
    const size = basePage instanceof pdf_lib_1.PDFEmbeddedPage ? basePage.size() : basePage.getSize();
    const insertedPage = basePage instanceof pdf_lib_1.PDFEmbeddedPage
        ? pdfDoc.addPage([size.width, size.height])
        : pdfDoc.addPage(basePage);
    if (basePage instanceof pdf_lib_1.PDFEmbeddedPage) {
        insertedPage.drawPage(basePage);
        const { mediaBox, bleedBox, trimBox } = embedPdfBox;
        insertedPage.setMediaBox(mediaBox.x, mediaBox.y, mediaBox.width, mediaBox.height);
        insertedPage.setBleedBox(bleedBox.x, bleedBox.y, bleedBox.width, bleedBox.height);
        insertedPage.setTrimBox(trimBox.x, trimBox.y, trimBox.width, trimBox.height);
    }
    return insertedPage;
};
exports.insertPage = insertPage;
//# sourceMappingURL=helper.js.map