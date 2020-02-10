import * as $protobuf from "protobufjs";
/** Namespace waves. */
export namespace waves {

    /** Namespace data. */
    namespace data {

        /** Namespace assets. */
        namespace assets {

            /** Properties of an AssetInfo. */
            interface IAssetInfo {

                /** AssetInfo assetId */
                assetId?: (Uint8Array|null);

                /** AssetInfo name */
                name?: (string|null);

                /** AssetInfo description */
                description?: (string|null);

                /** AssetInfo decimals */
                decimals?: (number|null);

                /** AssetInfo reissuable */
                reissuable?: (boolean|null);

                /** AssetInfo totalVolume */
                totalVolume?: (number|Long|null);

                /** AssetInfo script */
                script?: (Uint8Array|null);

                /** AssetInfo sponsorship */
                sponsorship?: (number|Long|null);

                /** AssetInfo nft */
                nft?: (boolean|null);
            }

            /** Represents an AssetInfo. */
            class AssetInfo implements IAssetInfo {

                /**
                 * Constructs a new AssetInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: waves.data.assets.IAssetInfo);

                /** AssetInfo assetId. */
                public assetId: Uint8Array;

                /** AssetInfo name. */
                public name: string;

                /** AssetInfo description. */
                public description: string;

                /** AssetInfo decimals. */
                public decimals: number;

                /** AssetInfo reissuable. */
                public reissuable: boolean;

                /** AssetInfo totalVolume. */
                public totalVolume: (number|Long);

                /** AssetInfo script. */
                public script: Uint8Array;

                /** AssetInfo sponsorship. */
                public sponsorship: (number|Long);

                /** AssetInfo nft. */
                public nft: boolean;

                /**
                 * Creates a new AssetInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AssetInfo instance
                 */
                public static create(properties?: waves.data.assets.IAssetInfo): waves.data.assets.AssetInfo;

                /**
                 * Encodes the specified AssetInfo message. Does not implicitly {@link waves.data.assets.AssetInfo.verify|verify} messages.
                 * @param message AssetInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: waves.data.assets.IAssetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AssetInfo message, length delimited. Does not implicitly {@link waves.data.assets.AssetInfo.verify|verify} messages.
                 * @param message AssetInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: waves.data.assets.IAssetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AssetInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AssetInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.assets.AssetInfo;

                /**
                 * Decodes an AssetInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AssetInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.assets.AssetInfo;

                /**
                 * Verifies an AssetInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AssetInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AssetInfo
                 */
                public static fromObject(object: { [k: string]: any }): waves.data.assets.AssetInfo;

                /**
                 * Creates a plain object from an AssetInfo message. Also converts values to other types if specified.
                 * @param message AssetInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: waves.data.assets.AssetInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AssetInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a WavesInfo. */
            interface IWavesInfo {

                /** WavesInfo decimals */
                decimals?: (number|null);

                /** WavesInfo totalVolume */
                totalVolume?: (number|Long|null);
            }

            /** Represents a WavesInfo. */
            class WavesInfo implements IWavesInfo {

                /**
                 * Constructs a new WavesInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: waves.data.assets.IWavesInfo);

                /** WavesInfo decimals. */
                public decimals: number;

                /** WavesInfo totalVolume. */
                public totalVolume: (number|Long);

                /**
                 * Creates a new WavesInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WavesInfo instance
                 */
                public static create(properties?: waves.data.assets.IWavesInfo): waves.data.assets.WavesInfo;

                /**
                 * Encodes the specified WavesInfo message. Does not implicitly {@link waves.data.assets.WavesInfo.verify|verify} messages.
                 * @param message WavesInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: waves.data.assets.IWavesInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WavesInfo message, length delimited. Does not implicitly {@link waves.data.assets.WavesInfo.verify|verify} messages.
                 * @param message WavesInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: waves.data.assets.IWavesInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WavesInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WavesInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.assets.WavesInfo;

                /**
                 * Decodes a WavesInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WavesInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.assets.WavesInfo;

                /**
                 * Verifies a WavesInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WavesInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WavesInfo
                 */
                public static fromObject(object: { [k: string]: any }): waves.data.assets.WavesInfo;

                /**
                 * Creates a plain object from a WavesInfo message. Also converts values to other types if specified.
                 * @param message WavesInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: waves.data.assets.WavesInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WavesInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetAssetRequest. */
            interface IGetAssetRequest {

                /** GetAssetRequest assetId */
                assetId?: (Uint8Array|null);
            }

            /** Represents a GetAssetRequest. */
            class GetAssetRequest implements IGetAssetRequest {

                /**
                 * Constructs a new GetAssetRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: waves.data.assets.IGetAssetRequest);

                /** GetAssetRequest assetId. */
                public assetId: Uint8Array;

                /**
                 * Creates a new GetAssetRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAssetRequest instance
                 */
                public static create(properties?: waves.data.assets.IGetAssetRequest): waves.data.assets.GetAssetRequest;

                /**
                 * Encodes the specified GetAssetRequest message. Does not implicitly {@link waves.data.assets.GetAssetRequest.verify|verify} messages.
                 * @param message GetAssetRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: waves.data.assets.IGetAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAssetRequest message, length delimited. Does not implicitly {@link waves.data.assets.GetAssetRequest.verify|verify} messages.
                 * @param message GetAssetRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: waves.data.assets.IGetAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAssetRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAssetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.assets.GetAssetRequest;

                /**
                 * Decodes a GetAssetRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAssetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.assets.GetAssetRequest;

                /**
                 * Verifies a GetAssetRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAssetRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAssetRequest
                 */
                public static fromObject(object: { [k: string]: any }): waves.data.assets.GetAssetRequest;

                /**
                 * Creates a plain object from a GetAssetRequest message. Also converts values to other types if specified.
                 * @param message GetAssetRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: waves.data.assets.GetAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAssetRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetAssetResponse. */
            interface IGetAssetResponse {

                /** GetAssetResponse assetInfo */
                assetInfo?: (waves.data.assets.IAssetInfo|null);
            }

            /** Represents a GetAssetResponse. */
            class GetAssetResponse implements IGetAssetResponse {

                /**
                 * Constructs a new GetAssetResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: waves.data.assets.IGetAssetResponse);

                /** GetAssetResponse assetInfo. */
                public assetInfo?: (waves.data.assets.IAssetInfo|null);

                /**
                 * Creates a new GetAssetResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAssetResponse instance
                 */
                public static create(properties?: waves.data.assets.IGetAssetResponse): waves.data.assets.GetAssetResponse;

                /**
                 * Encodes the specified GetAssetResponse message. Does not implicitly {@link waves.data.assets.GetAssetResponse.verify|verify} messages.
                 * @param message GetAssetResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: waves.data.assets.IGetAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAssetResponse message, length delimited. Does not implicitly {@link waves.data.assets.GetAssetResponse.verify|verify} messages.
                 * @param message GetAssetResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: waves.data.assets.IGetAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAssetResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAssetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.assets.GetAssetResponse;

                /**
                 * Decodes a GetAssetResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAssetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.assets.GetAssetResponse;

                /**
                 * Verifies a GetAssetResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAssetResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAssetResponse
                 */
                public static fromObject(object: { [k: string]: any }): waves.data.assets.GetAssetResponse;

                /**
                 * Creates a plain object from a GetAssetResponse message. Also converts values to other types if specified.
                 * @param message GetAssetResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: waves.data.assets.GetAssetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAssetResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetAssetsBatchRequest. */
            interface IGetAssetsBatchRequest {

                /** GetAssetsBatchRequest assetIds */
                assetIds?: (Uint8Array[]|null);
            }

            /** Represents a GetAssetsBatchRequest. */
            class GetAssetsBatchRequest implements IGetAssetsBatchRequest {

                /**
                 * Constructs a new GetAssetsBatchRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: waves.data.assets.IGetAssetsBatchRequest);

                /** GetAssetsBatchRequest assetIds. */
                public assetIds: Uint8Array[];

                /**
                 * Creates a new GetAssetsBatchRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAssetsBatchRequest instance
                 */
                public static create(properties?: waves.data.assets.IGetAssetsBatchRequest): waves.data.assets.GetAssetsBatchRequest;

                /**
                 * Encodes the specified GetAssetsBatchRequest message. Does not implicitly {@link waves.data.assets.GetAssetsBatchRequest.verify|verify} messages.
                 * @param message GetAssetsBatchRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: waves.data.assets.IGetAssetsBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAssetsBatchRequest message, length delimited. Does not implicitly {@link waves.data.assets.GetAssetsBatchRequest.verify|verify} messages.
                 * @param message GetAssetsBatchRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: waves.data.assets.IGetAssetsBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAssetsBatchRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAssetsBatchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.assets.GetAssetsBatchRequest;

                /**
                 * Decodes a GetAssetsBatchRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAssetsBatchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.assets.GetAssetsBatchRequest;

                /**
                 * Verifies a GetAssetsBatchRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAssetsBatchRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAssetsBatchRequest
                 */
                public static fromObject(object: { [k: string]: any }): waves.data.assets.GetAssetsBatchRequest;

                /**
                 * Creates a plain object from a GetAssetsBatchRequest message. Also converts values to other types if specified.
                 * @param message GetAssetsBatchRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: waves.data.assets.GetAssetsBatchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAssetsBatchRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AssetInfoIfExists. */
            interface IAssetInfoIfExists {

                /** AssetInfoIfExists assetInfo */
                assetInfo?: (waves.data.assets.IAssetInfo|null);
            }

            /** Represents an AssetInfoIfExists. */
            class AssetInfoIfExists implements IAssetInfoIfExists {

                /**
                 * Constructs a new AssetInfoIfExists.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: waves.data.assets.IAssetInfoIfExists);

                /** AssetInfoIfExists assetInfo. */
                public assetInfo?: (waves.data.assets.IAssetInfo|null);

                /**
                 * Creates a new AssetInfoIfExists instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AssetInfoIfExists instance
                 */
                public static create(properties?: waves.data.assets.IAssetInfoIfExists): waves.data.assets.AssetInfoIfExists;

                /**
                 * Encodes the specified AssetInfoIfExists message. Does not implicitly {@link waves.data.assets.AssetInfoIfExists.verify|verify} messages.
                 * @param message AssetInfoIfExists message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: waves.data.assets.IAssetInfoIfExists, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AssetInfoIfExists message, length delimited. Does not implicitly {@link waves.data.assets.AssetInfoIfExists.verify|verify} messages.
                 * @param message AssetInfoIfExists message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: waves.data.assets.IAssetInfoIfExists, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AssetInfoIfExists message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AssetInfoIfExists
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.assets.AssetInfoIfExists;

                /**
                 * Decodes an AssetInfoIfExists message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AssetInfoIfExists
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.assets.AssetInfoIfExists;

                /**
                 * Verifies an AssetInfoIfExists message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AssetInfoIfExists message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AssetInfoIfExists
                 */
                public static fromObject(object: { [k: string]: any }): waves.data.assets.AssetInfoIfExists;

                /**
                 * Creates a plain object from an AssetInfoIfExists message. Also converts values to other types if specified.
                 * @param message AssetInfoIfExists
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: waves.data.assets.AssetInfoIfExists, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AssetInfoIfExists to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetAssetsBatchResponse. */
            interface IGetAssetsBatchResponse {

                /** GetAssetsBatchResponse assetInfo */
                assetInfo?: (waves.data.assets.IAssetInfoIfExists[]|null);
            }

            /** Represents a GetAssetsBatchResponse. */
            class GetAssetsBatchResponse implements IGetAssetsBatchResponse {

                /**
                 * Constructs a new GetAssetsBatchResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: waves.data.assets.IGetAssetsBatchResponse);

                /** GetAssetsBatchResponse assetInfo. */
                public assetInfo: waves.data.assets.IAssetInfoIfExists[];

                /**
                 * Creates a new GetAssetsBatchResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAssetsBatchResponse instance
                 */
                public static create(properties?: waves.data.assets.IGetAssetsBatchResponse): waves.data.assets.GetAssetsBatchResponse;

                /**
                 * Encodes the specified GetAssetsBatchResponse message. Does not implicitly {@link waves.data.assets.GetAssetsBatchResponse.verify|verify} messages.
                 * @param message GetAssetsBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: waves.data.assets.IGetAssetsBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAssetsBatchResponse message, length delimited. Does not implicitly {@link waves.data.assets.GetAssetsBatchResponse.verify|verify} messages.
                 * @param message GetAssetsBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: waves.data.assets.IGetAssetsBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAssetsBatchResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAssetsBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.assets.GetAssetsBatchResponse;

                /**
                 * Decodes a GetAssetsBatchResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAssetsBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.assets.GetAssetsBatchResponse;

                /**
                 * Verifies a GetAssetsBatchResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAssetsBatchResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAssetsBatchResponse
                 */
                public static fromObject(object: { [k: string]: any }): waves.data.assets.GetAssetsBatchResponse;

                /**
                 * Creates a plain object from a GetAssetsBatchResponse message. Also converts values to other types if specified.
                 * @param message GetAssetsBatchResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: waves.data.assets.GetAssetsBatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAssetsBatchResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SearchAssetRequest. */
            interface ISearchAssetRequest {

                /** SearchAssetRequest query */
                query?: (string|null);

                /** SearchAssetRequest pagination */
                pagination?: (waves.data.IPagination|null);
            }

            /** Represents a SearchAssetRequest. */
            class SearchAssetRequest implements ISearchAssetRequest {

                /**
                 * Constructs a new SearchAssetRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: waves.data.assets.ISearchAssetRequest);

                /** SearchAssetRequest query. */
                public query: string;

                /** SearchAssetRequest pagination. */
                public pagination?: (waves.data.IPagination|null);

                /**
                 * Creates a new SearchAssetRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchAssetRequest instance
                 */
                public static create(properties?: waves.data.assets.ISearchAssetRequest): waves.data.assets.SearchAssetRequest;

                /**
                 * Encodes the specified SearchAssetRequest message. Does not implicitly {@link waves.data.assets.SearchAssetRequest.verify|verify} messages.
                 * @param message SearchAssetRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: waves.data.assets.ISearchAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchAssetRequest message, length delimited. Does not implicitly {@link waves.data.assets.SearchAssetRequest.verify|verify} messages.
                 * @param message SearchAssetRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: waves.data.assets.ISearchAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchAssetRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchAssetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.assets.SearchAssetRequest;

                /**
                 * Decodes a SearchAssetRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchAssetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.assets.SearchAssetRequest;

                /**
                 * Verifies a SearchAssetRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchAssetRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchAssetRequest
                 */
                public static fromObject(object: { [k: string]: any }): waves.data.assets.SearchAssetRequest;

                /**
                 * Creates a plain object from a SearchAssetRequest message. Also converts values to other types if specified.
                 * @param message SearchAssetRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: waves.data.assets.SearchAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchAssetRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SearchAssetResponse. */
            interface ISearchAssetResponse {

                /** SearchAssetResponse assetInfo */
                assetInfo?: (waves.data.assets.IAssetInfo|null);

                /** SearchAssetResponse cursor */
                cursor?: (Uint8Array|null);
            }

            /** Represents a SearchAssetResponse. */
            class SearchAssetResponse implements ISearchAssetResponse {

                /**
                 * Constructs a new SearchAssetResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: waves.data.assets.ISearchAssetResponse);

                /** SearchAssetResponse assetInfo. */
                public assetInfo?: (waves.data.assets.IAssetInfo|null);

                /** SearchAssetResponse cursor. */
                public cursor: Uint8Array;

                /**
                 * Creates a new SearchAssetResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchAssetResponse instance
                 */
                public static create(properties?: waves.data.assets.ISearchAssetResponse): waves.data.assets.SearchAssetResponse;

                /**
                 * Encodes the specified SearchAssetResponse message. Does not implicitly {@link waves.data.assets.SearchAssetResponse.verify|verify} messages.
                 * @param message SearchAssetResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: waves.data.assets.ISearchAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchAssetResponse message, length delimited. Does not implicitly {@link waves.data.assets.SearchAssetResponse.verify|verify} messages.
                 * @param message SearchAssetResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: waves.data.assets.ISearchAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchAssetResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchAssetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.assets.SearchAssetResponse;

                /**
                 * Decodes a SearchAssetResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchAssetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.assets.SearchAssetResponse;

                /**
                 * Verifies a SearchAssetResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchAssetResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchAssetResponse
                 */
                public static fromObject(object: { [k: string]: any }): waves.data.assets.SearchAssetResponse;

                /**
                 * Creates a plain object from a SearchAssetResponse message. Also converts values to other types if specified.
                 * @param message SearchAssetResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: waves.data.assets.SearchAssetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchAssetResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents an Assets */
            class Assets extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Assets service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Assets service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Assets;

                /**
                 * Calls Get.
                 * @param request GetAssetRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetAssetResponse
                 */
                public get(request: waves.data.assets.IGetAssetRequest, callback: waves.data.assets.Assets.GetCallback): void;

                /**
                 * Calls Get.
                 * @param request GetAssetRequest message or plain object
                 * @returns Promise
                 */
                public get(request: waves.data.assets.IGetAssetRequest): Promise<waves.data.assets.GetAssetResponse>;

                /**
                 * Calls GetBatch.
                 * @param request GetAssetsBatchRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetAssetsBatchResponse
                 */
                public getBatch(request: waves.data.assets.IGetAssetsBatchRequest, callback: waves.data.assets.Assets.GetBatchCallback): void;

                /**
                 * Calls GetBatch.
                 * @param request GetAssetsBatchRequest message or plain object
                 * @returns Promise
                 */
                public getBatch(request: waves.data.assets.IGetAssetsBatchRequest): Promise<waves.data.assets.GetAssetsBatchResponse>;

                /**
                 * Calls Search.
                 * @param request SearchAssetRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SearchAssetResponse
                 */
                public search(request: waves.data.assets.ISearchAssetRequest, callback: waves.data.assets.Assets.SearchCallback): void;

                /**
                 * Calls Search.
                 * @param request SearchAssetRequest message or plain object
                 * @returns Promise
                 */
                public search(request: waves.data.assets.ISearchAssetRequest): Promise<waves.data.assets.SearchAssetResponse>;
            }

            namespace Assets {

                /**
                 * Callback as used by {@link waves.data.assets.Assets#get}.
                 * @param error Error, if any
                 * @param [response] GetAssetResponse
                 */
                type GetCallback = (error: (Error|null), response?: waves.data.assets.GetAssetResponse) => void;

                /**
                 * Callback as used by {@link waves.data.assets.Assets#getBatch}.
                 * @param error Error, if any
                 * @param [response] GetAssetsBatchResponse
                 */
                type GetBatchCallback = (error: (Error|null), response?: waves.data.assets.GetAssetsBatchResponse) => void;

                /**
                 * Callback as used by {@link waves.data.assets.Assets#search}.
                 * @param error Error, if any
                 * @param [response] SearchAssetResponse
                 */
                type SearchCallback = (error: (Error|null), response?: waves.data.assets.SearchAssetResponse) => void;
            }
        }

        /** Properties of a ChangedByTransactionRequest. */
        interface IChangedByTransactionRequest {

            /** ChangedByTransactionRequest transactionId */
            transactionId?: (Uint8Array|null);
        }

        /** Represents a ChangedByTransactionRequest. */
        class ChangedByTransactionRequest implements IChangedByTransactionRequest {

            /**
             * Constructs a new ChangedByTransactionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: waves.data.IChangedByTransactionRequest);

            /** ChangedByTransactionRequest transactionId. */
            public transactionId: Uint8Array;

            /**
             * Creates a new ChangedByTransactionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangedByTransactionRequest instance
             */
            public static create(properties?: waves.data.IChangedByTransactionRequest): waves.data.ChangedByTransactionRequest;

            /**
             * Encodes the specified ChangedByTransactionRequest message. Does not implicitly {@link waves.data.ChangedByTransactionRequest.verify|verify} messages.
             * @param message ChangedByTransactionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: waves.data.IChangedByTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangedByTransactionRequest message, length delimited. Does not implicitly {@link waves.data.ChangedByTransactionRequest.verify|verify} messages.
             * @param message ChangedByTransactionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: waves.data.IChangedByTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangedByTransactionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangedByTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.ChangedByTransactionRequest;

            /**
             * Decodes a ChangedByTransactionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangedByTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.ChangedByTransactionRequest;

            /**
             * Verifies a ChangedByTransactionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangedByTransactionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangedByTransactionRequest
             */
            public static fromObject(object: { [k: string]: any }): waves.data.ChangedByTransactionRequest;

            /**
             * Creates a plain object from a ChangedByTransactionRequest message. Also converts values to other types if specified.
             * @param message ChangedByTransactionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: waves.data.ChangedByTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangedByTransactionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockchainCoordinate. */
        interface IBlockchainCoordinate {

            /** BlockchainCoordinate height */
            height?: (number|null);

            /** BlockchainCoordinate blockTimestamp */
            blockTimestamp?: (number|Long|null);
        }

        /** Represents a BlockchainCoordinate. */
        class BlockchainCoordinate implements IBlockchainCoordinate {

            /**
             * Constructs a new BlockchainCoordinate.
             * @param [properties] Properties to set
             */
            constructor(properties?: waves.data.IBlockchainCoordinate);

            /** BlockchainCoordinate height. */
            public height: number;

            /** BlockchainCoordinate blockTimestamp. */
            public blockTimestamp: (number|Long);

            /** BlockchainCoordinate coordinate. */
            public coordinate?: ("height"|"blockTimestamp");

            /**
             * Creates a new BlockchainCoordinate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockchainCoordinate instance
             */
            public static create(properties?: waves.data.IBlockchainCoordinate): waves.data.BlockchainCoordinate;

            /**
             * Encodes the specified BlockchainCoordinate message. Does not implicitly {@link waves.data.BlockchainCoordinate.verify|verify} messages.
             * @param message BlockchainCoordinate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: waves.data.IBlockchainCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockchainCoordinate message, length delimited. Does not implicitly {@link waves.data.BlockchainCoordinate.verify|verify} messages.
             * @param message BlockchainCoordinate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: waves.data.IBlockchainCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockchainCoordinate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockchainCoordinate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.BlockchainCoordinate;

            /**
             * Decodes a BlockchainCoordinate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockchainCoordinate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.BlockchainCoordinate;

            /**
             * Verifies a BlockchainCoordinate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockchainCoordinate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockchainCoordinate
             */
            public static fromObject(object: { [k: string]: any }): waves.data.BlockchainCoordinate;

            /**
             * Creates a plain object from a BlockchainCoordinate message. Also converts values to other types if specified.
             * @param message BlockchainCoordinate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: waves.data.BlockchainCoordinate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockchainCoordinate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Pagination. */
        interface IPagination {

            /** Pagination limit */
            limit?: (number|null);

            /** Pagination after */
            after?: (Uint8Array|null);
        }

        /** Represents a Pagination. */
        class Pagination implements IPagination {

            /**
             * Constructs a new Pagination.
             * @param [properties] Properties to set
             */
            constructor(properties?: waves.data.IPagination);

            /** Pagination limit. */
            public limit: number;

            /** Pagination after. */
            public after: Uint8Array;

            /**
             * Creates a new Pagination instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pagination instance
             */
            public static create(properties?: waves.data.IPagination): waves.data.Pagination;

            /**
             * Encodes the specified Pagination message. Does not implicitly {@link waves.data.Pagination.verify|verify} messages.
             * @param message Pagination message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: waves.data.IPagination, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pagination message, length delimited. Does not implicitly {@link waves.data.Pagination.verify|verify} messages.
             * @param message Pagination message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: waves.data.IPagination, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pagination message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Pagination
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.Pagination;

            /**
             * Decodes a Pagination message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pagination
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.Pagination;

            /**
             * Verifies a Pagination message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pagination message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pagination
             */
            public static fromObject(object: { [k: string]: any }): waves.data.Pagination;

            /**
             * Creates a plain object from a Pagination message. Also converts values to other types if specified.
             * @param message Pagination
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: waves.data.Pagination, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pagination to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidationError. */
        interface IValidationError {

            /** ValidationError message */
            message?: (string|null);

            /** ValidationError field */
            field?: (string|null);
        }

        /** Represents a ValidationError. */
        class ValidationError implements IValidationError {

            /**
             * Constructs a new ValidationError.
             * @param [properties] Properties to set
             */
            constructor(properties?: waves.data.IValidationError);

            /** ValidationError message. */
            public message: string;

            /** ValidationError field. */
            public field: string;

            /**
             * Creates a new ValidationError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidationError instance
             */
            public static create(properties?: waves.data.IValidationError): waves.data.ValidationError;

            /**
             * Encodes the specified ValidationError message. Does not implicitly {@link waves.data.ValidationError.verify|verify} messages.
             * @param message ValidationError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: waves.data.IValidationError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidationError message, length delimited. Does not implicitly {@link waves.data.ValidationError.verify|verify} messages.
             * @param message ValidationError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: waves.data.IValidationError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidationError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidationError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.ValidationError;

            /**
             * Decodes a ValidationError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidationError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.ValidationError;

            /**
             * Verifies a ValidationError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidationError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidationError
             */
            public static fromObject(object: { [k: string]: any }): waves.data.ValidationError;

            /**
             * Creates a plain object from a ValidationError message. Also converts values to other types if specified.
             * @param message ValidationError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: waves.data.ValidationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidationError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ParseError. */
        interface IParseError {

            /** ParseError message */
            message?: (string|null);
        }

        /** Represents a ParseError. */
        class ParseError implements IParseError {

            /**
             * Constructs a new ParseError.
             * @param [properties] Properties to set
             */
            constructor(properties?: waves.data.IParseError);

            /** ParseError message. */
            public message: string;

            /**
             * Creates a new ParseError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParseError instance
             */
            public static create(properties?: waves.data.IParseError): waves.data.ParseError;

            /**
             * Encodes the specified ParseError message. Does not implicitly {@link waves.data.ParseError.verify|verify} messages.
             * @param message ParseError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: waves.data.IParseError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParseError message, length delimited. Does not implicitly {@link waves.data.ParseError.verify|verify} messages.
             * @param message ParseError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: waves.data.IParseError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParseError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParseError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.ParseError;

            /**
             * Decodes a ParseError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ParseError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.ParseError;

            /**
             * Verifies a ParseError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ParseError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ParseError
             */
            public static fromObject(object: { [k: string]: any }): waves.data.ParseError;

            /**
             * Creates a plain object from a ParseError message. Also converts values to other types if specified.
             * @param message ParseError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: waves.data.ParseError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParseError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceError. */
        interface IServiceError {

            /** ServiceError message */
            message?: (string|null);
        }

        /** Represents a ServiceError. */
        class ServiceError implements IServiceError {

            /**
             * Constructs a new ServiceError.
             * @param [properties] Properties to set
             */
            constructor(properties?: waves.data.IServiceError);

            /** ServiceError message. */
            public message: string;

            /**
             * Creates a new ServiceError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceError instance
             */
            public static create(properties?: waves.data.IServiceError): waves.data.ServiceError;

            /**
             * Encodes the specified ServiceError message. Does not implicitly {@link waves.data.ServiceError.verify|verify} messages.
             * @param message ServiceError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: waves.data.IServiceError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceError message, length delimited. Does not implicitly {@link waves.data.ServiceError.verify|verify} messages.
             * @param message ServiceError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: waves.data.IServiceError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.ServiceError;

            /**
             * Decodes a ServiceError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.ServiceError;

            /**
             * Verifies a ServiceError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceError
             */
            public static fromObject(object: { [k: string]: any }): waves.data.ServiceError;

            /**
             * Creates a plain object from a ServiceError message. Also converts values to other types if specified.
             * @param message ServiceError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: waves.data.ServiceError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timeout. */
        interface ITimeout {

            /** Timeout message */
            message?: (string|null);
        }

        /** Represents a Timeout. */
        class Timeout implements ITimeout {

            /**
             * Constructs a new Timeout.
             * @param [properties] Properties to set
             */
            constructor(properties?: waves.data.ITimeout);

            /** Timeout message. */
            public message: string;

            /**
             * Creates a new Timeout instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timeout instance
             */
            public static create(properties?: waves.data.ITimeout): waves.data.Timeout;

            /**
             * Encodes the specified Timeout message. Does not implicitly {@link waves.data.Timeout.verify|verify} messages.
             * @param message Timeout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: waves.data.ITimeout, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timeout message, length delimited. Does not implicitly {@link waves.data.Timeout.verify|verify} messages.
             * @param message Timeout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: waves.data.ITimeout, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timeout message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timeout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): waves.data.Timeout;

            /**
             * Decodes a Timeout message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timeout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): waves.data.Timeout;

            /**
             * Verifies a Timeout message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timeout message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timeout
             */
            public static fromObject(object: { [k: string]: any }): waves.data.Timeout;

            /**
             * Creates a plain object from a Timeout message. Also converts values to other types if specified.
             * @param message Timeout
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: waves.data.Timeout, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timeout to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
