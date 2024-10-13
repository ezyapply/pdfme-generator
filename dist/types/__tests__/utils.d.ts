import { Font } from '@pdfme/common';
export declare const getFont: () => Font;
export declare const getPdf: (pdfFilePath: string) => Promise<unknown>;
export declare const getPdfTmpPath: (fileName: string) => string;
export declare const getPdfAssertPath: (fileName: string) => string;
