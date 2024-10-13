export declare const label: {
    宛名8面: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    シンプルラベル24面: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    フレームラベル24面: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    ストライプラベル24面: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    装飾なしラベル24面: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    装飾なしラベル24面中央揃え: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    郵便はがき横書き: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    レターパック: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    レターパックライト: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    レターパックプラス: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    スマートレター: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    ゆうパケット: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    Aone72312宛名: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    名刺サイズの名札: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    connpass名札: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
};
export declare const envelope: {
    長形3号封筒: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    洋長3号封筒: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    角形2号封筒: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
};
export declare const barcode: {
    Aone31555QRコード: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    Aone31553QRコード: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    Aone72230JANコード短縮: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    Aone72230JANコード標準: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    barcodes: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
};
export declare const business: {
    領収書: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    領収書x4: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    表彰状: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    見積書: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    請求書: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    納品書: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    書類送付状: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    履歴書: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    労働条件通知書: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
};
export declare const textType: {
    dynamicFontSizeHorizontal: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    dynamicFontSizeVertical: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    verticalAlignmentTop: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    verticalAlignmentMiddle: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    verticalAlignmentBottom: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    underlineStrikethrough: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    multiVariableText: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
};
export declare const other: {
    test: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    preVersion5Format: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    z97mmx210mm: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    canvasPdf: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    background: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    rotation: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    pet: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    pdfImage: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
};
export declare const shape: {
    shapes: import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array, import("zod").ZodTypeDef, Uint8Array>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
};
