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
exports.getPdfAssertPath = exports.getPdfTmpPath = exports.getPdf = exports.getFont = void 0;
const fs_1 = require("fs");
const path = __importStar(require("path"));
const PDFParser = require('pdf2json');
const SauceHanSansJPData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/SauceHanSansJP.ttf`));
const SauceHanSerifJPData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/SauceHanSerifJP.ttf`));
const NotoSerifJPRegularData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/NotoSerifJP-Regular.otf`));
const NotoSansJPRegularData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/NotoSansJP-Regular.otf`));
const GloriaHallelujahRegularData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/GloriaHallelujah-Regular.ttf`));
const GreatVibesRegularData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/GreatVibes-Regular.ttf`));
const JuliusSansOneRegularData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/JuliusSansOne-Regular.ttf`));
const getFont = () => ({
    SauceHanSansJP: { fallback: true, data: SauceHanSansJPData },
    SauceHanSerifJP: { data: SauceHanSerifJPData },
    'NotoSerifJP-Regular': { data: NotoSerifJPRegularData },
    'NotoSansJP-Regular': { data: NotoSansJPRegularData },
    'GloriaHallelujah-Regular': { data: GloriaHallelujahRegularData },
    'GreatVibes-Regular': { data: GreatVibesRegularData },
    'JuliusSansOne-Regular': { data: JuliusSansOneRegularData },
});
exports.getFont = getFont;
const getPdf = (pdfFilePath) => {
    const pdfParser = new PDFParser();
    return new Promise((resolve, reject) => {
        pdfParser.on('pdfParser_dataError', reject);
        pdfParser.on('pdfParser_dataReady', resolve);
        pdfParser.loadPDF(pdfFilePath);
    });
};
exports.getPdf = getPdf;
const getPdfPath = (dir, fileName) => path.join(__dirname, `assets/pdfs/${dir}/${fileName}`);
const getPdfTmpPath = (fileName) => getPdfPath('tmp', fileName);
exports.getPdfTmpPath = getPdfTmpPath;
const getPdfAssertPath = (fileName) => getPdfPath('assert', fileName);
exports.getPdfAssertPath = getPdfAssertPath;
//# sourceMappingURL=utils.js.map