/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.waves = (function() {

    /**
     * Namespace waves.
     * @exports waves
     * @namespace
     */
    var waves = {};

    waves.data = (function() {

        /**
         * Namespace data.
         * @memberof waves
         * @namespace
         */
        var data = {};

        data.assets = (function() {

            /**
             * Namespace assets.
             * @memberof waves.data
             * @namespace
             */
            var assets = {};

            assets.AssetInfo = (function() {

                /**
                 * Properties of an AssetInfo.
                 * @memberof waves.data.assets
                 * @interface IAssetInfo
                 * @property {Uint8Array|null} [assetId] AssetInfo assetId
                 * @property {string|null} [name] AssetInfo name
                 * @property {string|null} [description] AssetInfo description
                 * @property {number|null} [decimals] AssetInfo decimals
                 * @property {boolean|null} [reissuable] AssetInfo reissuable
                 * @property {Long|null} [totalVolume] AssetInfo totalVolume
                 * @property {Uint8Array|null} [script] AssetInfo script
                 * @property {Long|null} [sponsorship] AssetInfo sponsorship
                 * @property {boolean|null} [nft] AssetInfo nft
                 * @property {Uint8Array|null} [originTransactionId] AssetInfo originTransactionId
                 */

                /**
                 * Constructs a new AssetInfo.
                 * @memberof waves.data.assets
                 * @classdesc Represents an AssetInfo.
                 * @implements IAssetInfo
                 * @constructor
                 * @param {waves.data.assets.IAssetInfo=} [properties] Properties to set
                 */
                function AssetInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AssetInfo assetId.
                 * @member {Uint8Array} assetId
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.assetId = $util.newBuffer([]);

                /**
                 * AssetInfo name.
                 * @member {string} name
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.name = "";

                /**
                 * AssetInfo description.
                 * @member {string} description
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.description = "";

                /**
                 * AssetInfo decimals.
                 * @member {number} decimals
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.decimals = 0;

                /**
                 * AssetInfo reissuable.
                 * @member {boolean} reissuable
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.reissuable = false;

                /**
                 * AssetInfo totalVolume.
                 * @member {Long} totalVolume
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.totalVolume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * AssetInfo script.
                 * @member {Uint8Array} script
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.script = $util.newBuffer([]);

                /**
                 * AssetInfo sponsorship.
                 * @member {Long} sponsorship
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.sponsorship = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * AssetInfo nft.
                 * @member {boolean} nft
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.nft = false;

                /**
                 * AssetInfo originTransactionId.
                 * @member {Uint8Array} originTransactionId
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 */
                AssetInfo.prototype.originTransactionId = $util.newBuffer([]);

                /**
                 * Creates a new AssetInfo instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.AssetInfo
                 * @static
                 * @param {waves.data.assets.IAssetInfo=} [properties] Properties to set
                 * @returns {waves.data.assets.AssetInfo} AssetInfo instance
                 */
                AssetInfo.create = function create(properties) {
                    return new AssetInfo(properties);
                };

                /**
                 * Encodes the specified AssetInfo message. Does not implicitly {@link waves.data.assets.AssetInfo.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.AssetInfo
                 * @static
                 * @param {waves.data.assets.IAssetInfo} message AssetInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssetInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.assetId != null && message.hasOwnProperty("assetId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.assetId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                    if (message.decimals != null && message.hasOwnProperty("decimals"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.decimals);
                    if (message.reissuable != null && message.hasOwnProperty("reissuable"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.reissuable);
                    if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int64(message.totalVolume);
                    if (message.script != null && message.hasOwnProperty("script"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.script);
                    if (message.sponsorship != null && message.hasOwnProperty("sponsorship"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int64(message.sponsorship);
                    if (message.nft != null && message.hasOwnProperty("nft"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.nft);
                    if (message.originTransactionId != null && message.hasOwnProperty("originTransactionId"))
                        writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.originTransactionId);
                    return writer;
                };

                /**
                 * Encodes the specified AssetInfo message, length delimited. Does not implicitly {@link waves.data.assets.AssetInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.AssetInfo
                 * @static
                 * @param {waves.data.assets.IAssetInfo} message AssetInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssetInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AssetInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.AssetInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.AssetInfo} AssetInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssetInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.AssetInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.assetId = reader.bytes();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.description = reader.string();
                            break;
                        case 4:
                            message.decimals = reader.int32();
                            break;
                        case 5:
                            message.reissuable = reader.bool();
                            break;
                        case 6:
                            message.totalVolume = reader.int64();
                            break;
                        case 7:
                            message.script = reader.bytes();
                            break;
                        case 8:
                            message.sponsorship = reader.int64();
                            break;
                        case 9:
                            message.nft = reader.bool();
                            break;
                        case 10:
                            message.originTransactionId = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AssetInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.AssetInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.AssetInfo} AssetInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssetInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AssetInfo message.
                 * @function verify
                 * @memberof waves.data.assets.AssetInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AssetInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.assetId != null && message.hasOwnProperty("assetId"))
                        if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                            return "assetId: buffer expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.decimals != null && message.hasOwnProperty("decimals"))
                        if (!$util.isInteger(message.decimals))
                            return "decimals: integer expected";
                    if (message.reissuable != null && message.hasOwnProperty("reissuable"))
                        if (typeof message.reissuable !== "boolean")
                            return "reissuable: boolean expected";
                    if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                        if (!$util.isInteger(message.totalVolume) && !(message.totalVolume && $util.isInteger(message.totalVolume.low) && $util.isInteger(message.totalVolume.high)))
                            return "totalVolume: integer|Long expected";
                    if (message.script != null && message.hasOwnProperty("script"))
                        if (!(message.script && typeof message.script.length === "number" || $util.isString(message.script)))
                            return "script: buffer expected";
                    if (message.sponsorship != null && message.hasOwnProperty("sponsorship"))
                        if (!$util.isInteger(message.sponsorship) && !(message.sponsorship && $util.isInteger(message.sponsorship.low) && $util.isInteger(message.sponsorship.high)))
                            return "sponsorship: integer|Long expected";
                    if (message.nft != null && message.hasOwnProperty("nft"))
                        if (typeof message.nft !== "boolean")
                            return "nft: boolean expected";
                    if (message.originTransactionId != null && message.hasOwnProperty("originTransactionId"))
                        if (!(message.originTransactionId && typeof message.originTransactionId.length === "number" || $util.isString(message.originTransactionId)))
                            return "originTransactionId: buffer expected";
                    return null;
                };

                /**
                 * Creates an AssetInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.AssetInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.AssetInfo} AssetInfo
                 */
                AssetInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.AssetInfo)
                        return object;
                    var message = new $root.waves.data.assets.AssetInfo();
                    if (object.assetId != null)
                        if (typeof object.assetId === "string")
                            $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                        else if (object.assetId.length)
                            message.assetId = object.assetId;
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.decimals != null)
                        message.decimals = object.decimals | 0;
                    if (object.reissuable != null)
                        message.reissuable = Boolean(object.reissuable);
                    if (object.totalVolume != null)
                        if ($util.Long)
                            (message.totalVolume = $util.Long.fromValue(object.totalVolume)).unsigned = false;
                        else if (typeof object.totalVolume === "string")
                            message.totalVolume = parseInt(object.totalVolume, 10);
                        else if (typeof object.totalVolume === "number")
                            message.totalVolume = object.totalVolume;
                        else if (typeof object.totalVolume === "object")
                            message.totalVolume = new $util.LongBits(object.totalVolume.low >>> 0, object.totalVolume.high >>> 0).toNumber();
                    if (object.script != null)
                        if (typeof object.script === "string")
                            $util.base64.decode(object.script, message.script = $util.newBuffer($util.base64.length(object.script)), 0);
                        else if (object.script.length)
                            message.script = object.script;
                    if (object.sponsorship != null)
                        if ($util.Long)
                            (message.sponsorship = $util.Long.fromValue(object.sponsorship)).unsigned = false;
                        else if (typeof object.sponsorship === "string")
                            message.sponsorship = parseInt(object.sponsorship, 10);
                        else if (typeof object.sponsorship === "number")
                            message.sponsorship = object.sponsorship;
                        else if (typeof object.sponsorship === "object")
                            message.sponsorship = new $util.LongBits(object.sponsorship.low >>> 0, object.sponsorship.high >>> 0).toNumber();
                    if (object.nft != null)
                        message.nft = Boolean(object.nft);
                    if (object.originTransactionId != null)
                        if (typeof object.originTransactionId === "string")
                            $util.base64.decode(object.originTransactionId, message.originTransactionId = $util.newBuffer($util.base64.length(object.originTransactionId)), 0);
                        else if (object.originTransactionId.length)
                            message.originTransactionId = object.originTransactionId;
                    return message;
                };

                /**
                 * Creates a plain object from an AssetInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.AssetInfo
                 * @static
                 * @param {waves.data.assets.AssetInfo} message AssetInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AssetInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.assetId = "";
                        else {
                            object.assetId = [];
                            if (options.bytes !== Array)
                                object.assetId = $util.newBuffer(object.assetId);
                        }
                        object.name = "";
                        object.description = "";
                        object.decimals = 0;
                        object.reissuable = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.totalVolume = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.totalVolume = options.longs === String ? "0" : 0;
                        if (options.bytes === String)
                            object.script = "";
                        else {
                            object.script = [];
                            if (options.bytes !== Array)
                                object.script = $util.newBuffer(object.script);
                        }
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.sponsorship = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.sponsorship = options.longs === String ? "0" : 0;
                        object.nft = false;
                        if (options.bytes === String)
                            object.originTransactionId = "";
                        else {
                            object.originTransactionId = [];
                            if (options.bytes !== Array)
                                object.originTransactionId = $util.newBuffer(object.originTransactionId);
                        }
                    }
                    if (message.assetId != null && message.hasOwnProperty("assetId"))
                        object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.decimals != null && message.hasOwnProperty("decimals"))
                        object.decimals = message.decimals;
                    if (message.reissuable != null && message.hasOwnProperty("reissuable"))
                        object.reissuable = message.reissuable;
                    if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                        if (typeof message.totalVolume === "number")
                            object.totalVolume = options.longs === String ? String(message.totalVolume) : message.totalVolume;
                        else
                            object.totalVolume = options.longs === String ? $util.Long.prototype.toString.call(message.totalVolume) : options.longs === Number ? new $util.LongBits(message.totalVolume.low >>> 0, message.totalVolume.high >>> 0).toNumber() : message.totalVolume;
                    if (message.script != null && message.hasOwnProperty("script"))
                        object.script = options.bytes === String ? $util.base64.encode(message.script, 0, message.script.length) : options.bytes === Array ? Array.prototype.slice.call(message.script) : message.script;
                    if (message.sponsorship != null && message.hasOwnProperty("sponsorship"))
                        if (typeof message.sponsorship === "number")
                            object.sponsorship = options.longs === String ? String(message.sponsorship) : message.sponsorship;
                        else
                            object.sponsorship = options.longs === String ? $util.Long.prototype.toString.call(message.sponsorship) : options.longs === Number ? new $util.LongBits(message.sponsorship.low >>> 0, message.sponsorship.high >>> 0).toNumber() : message.sponsorship;
                    if (message.nft != null && message.hasOwnProperty("nft"))
                        object.nft = message.nft;
                    if (message.originTransactionId != null && message.hasOwnProperty("originTransactionId"))
                        object.originTransactionId = options.bytes === String ? $util.base64.encode(message.originTransactionId, 0, message.originTransactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.originTransactionId) : message.originTransactionId;
                    return object;
                };

                /**
                 * Converts this AssetInfo to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.AssetInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AssetInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AssetInfo;
            })();

            assets.WavesInfo = (function() {

                /**
                 * Properties of a WavesInfo.
                 * @memberof waves.data.assets
                 * @interface IWavesInfo
                 * @property {number|null} [decimals] WavesInfo decimals
                 * @property {Long|null} [totalVolume] WavesInfo totalVolume
                 */

                /**
                 * Constructs a new WavesInfo.
                 * @memberof waves.data.assets
                 * @classdesc Represents a WavesInfo.
                 * @implements IWavesInfo
                 * @constructor
                 * @param {waves.data.assets.IWavesInfo=} [properties] Properties to set
                 */
                function WavesInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * WavesInfo decimals.
                 * @member {number} decimals
                 * @memberof waves.data.assets.WavesInfo
                 * @instance
                 */
                WavesInfo.prototype.decimals = 0;

                /**
                 * WavesInfo totalVolume.
                 * @member {Long} totalVolume
                 * @memberof waves.data.assets.WavesInfo
                 * @instance
                 */
                WavesInfo.prototype.totalVolume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new WavesInfo instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.WavesInfo
                 * @static
                 * @param {waves.data.assets.IWavesInfo=} [properties] Properties to set
                 * @returns {waves.data.assets.WavesInfo} WavesInfo instance
                 */
                WavesInfo.create = function create(properties) {
                    return new WavesInfo(properties);
                };

                /**
                 * Encodes the specified WavesInfo message. Does not implicitly {@link waves.data.assets.WavesInfo.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.WavesInfo
                 * @static
                 * @param {waves.data.assets.IWavesInfo} message WavesInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WavesInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.decimals != null && message.hasOwnProperty("decimals"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.decimals);
                    if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.totalVolume);
                    return writer;
                };

                /**
                 * Encodes the specified WavesInfo message, length delimited. Does not implicitly {@link waves.data.assets.WavesInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.WavesInfo
                 * @static
                 * @param {waves.data.assets.IWavesInfo} message WavesInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WavesInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a WavesInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.WavesInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.WavesInfo} WavesInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WavesInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.WavesInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.decimals = reader.int32();
                            break;
                        case 2:
                            message.totalVolume = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a WavesInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.WavesInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.WavesInfo} WavesInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WavesInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a WavesInfo message.
                 * @function verify
                 * @memberof waves.data.assets.WavesInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                WavesInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.decimals != null && message.hasOwnProperty("decimals"))
                        if (!$util.isInteger(message.decimals))
                            return "decimals: integer expected";
                    if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                        if (!$util.isInteger(message.totalVolume) && !(message.totalVolume && $util.isInteger(message.totalVolume.low) && $util.isInteger(message.totalVolume.high)))
                            return "totalVolume: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a WavesInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.WavesInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.WavesInfo} WavesInfo
                 */
                WavesInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.WavesInfo)
                        return object;
                    var message = new $root.waves.data.assets.WavesInfo();
                    if (object.decimals != null)
                        message.decimals = object.decimals | 0;
                    if (object.totalVolume != null)
                        if ($util.Long)
                            (message.totalVolume = $util.Long.fromValue(object.totalVolume)).unsigned = false;
                        else if (typeof object.totalVolume === "string")
                            message.totalVolume = parseInt(object.totalVolume, 10);
                        else if (typeof object.totalVolume === "number")
                            message.totalVolume = object.totalVolume;
                        else if (typeof object.totalVolume === "object")
                            message.totalVolume = new $util.LongBits(object.totalVolume.low >>> 0, object.totalVolume.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a WavesInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.WavesInfo
                 * @static
                 * @param {waves.data.assets.WavesInfo} message WavesInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                WavesInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.decimals = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.totalVolume = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.totalVolume = options.longs === String ? "0" : 0;
                    }
                    if (message.decimals != null && message.hasOwnProperty("decimals"))
                        object.decimals = message.decimals;
                    if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                        if (typeof message.totalVolume === "number")
                            object.totalVolume = options.longs === String ? String(message.totalVolume) : message.totalVolume;
                        else
                            object.totalVolume = options.longs === String ? $util.Long.prototype.toString.call(message.totalVolume) : options.longs === Number ? new $util.LongBits(message.totalVolume.low >>> 0, message.totalVolume.high >>> 0).toNumber() : message.totalVolume;
                    return object;
                };

                /**
                 * Converts this WavesInfo to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.WavesInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                WavesInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return WavesInfo;
            })();

            assets.GetWavesRequest = (function() {

                /**
                 * Properties of a GetWavesRequest.
                 * @memberof waves.data.assets
                 * @interface IGetWavesRequest
                 */

                /**
                 * Constructs a new GetWavesRequest.
                 * @memberof waves.data.assets
                 * @classdesc Represents a GetWavesRequest.
                 * @implements IGetWavesRequest
                 * @constructor
                 * @param {waves.data.assets.IGetWavesRequest=} [properties] Properties to set
                 */
                function GetWavesRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new GetWavesRequest instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.GetWavesRequest
                 * @static
                 * @param {waves.data.assets.IGetWavesRequest=} [properties] Properties to set
                 * @returns {waves.data.assets.GetWavesRequest} GetWavesRequest instance
                 */
                GetWavesRequest.create = function create(properties) {
                    return new GetWavesRequest(properties);
                };

                /**
                 * Encodes the specified GetWavesRequest message. Does not implicitly {@link waves.data.assets.GetWavesRequest.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.GetWavesRequest
                 * @static
                 * @param {waves.data.assets.IGetWavesRequest} message GetWavesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetWavesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified GetWavesRequest message, length delimited. Does not implicitly {@link waves.data.assets.GetWavesRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.GetWavesRequest
                 * @static
                 * @param {waves.data.assets.IGetWavesRequest} message GetWavesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetWavesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetWavesRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.GetWavesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.GetWavesRequest} GetWavesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetWavesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.GetWavesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetWavesRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.GetWavesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.GetWavesRequest} GetWavesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetWavesRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetWavesRequest message.
                 * @function verify
                 * @memberof waves.data.assets.GetWavesRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetWavesRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a GetWavesRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.GetWavesRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.GetWavesRequest} GetWavesRequest
                 */
                GetWavesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.GetWavesRequest)
                        return object;
                    return new $root.waves.data.assets.GetWavesRequest();
                };

                /**
                 * Creates a plain object from a GetWavesRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.GetWavesRequest
                 * @static
                 * @param {waves.data.assets.GetWavesRequest} message GetWavesRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetWavesRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this GetWavesRequest to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.GetWavesRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetWavesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetWavesRequest;
            })();

            assets.GetWavesResponse = (function() {

                /**
                 * Properties of a GetWavesResponse.
                 * @memberof waves.data.assets
                 * @interface IGetWavesResponse
                 * @property {waves.data.assets.IWavesInfo|null} [wavesInfo] GetWavesResponse wavesInfo
                 */

                /**
                 * Constructs a new GetWavesResponse.
                 * @memberof waves.data.assets
                 * @classdesc Represents a GetWavesResponse.
                 * @implements IGetWavesResponse
                 * @constructor
                 * @param {waves.data.assets.IGetWavesResponse=} [properties] Properties to set
                 */
                function GetWavesResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetWavesResponse wavesInfo.
                 * @member {waves.data.assets.IWavesInfo|null|undefined} wavesInfo
                 * @memberof waves.data.assets.GetWavesResponse
                 * @instance
                 */
                GetWavesResponse.prototype.wavesInfo = null;

                /**
                 * Creates a new GetWavesResponse instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.GetWavesResponse
                 * @static
                 * @param {waves.data.assets.IGetWavesResponse=} [properties] Properties to set
                 * @returns {waves.data.assets.GetWavesResponse} GetWavesResponse instance
                 */
                GetWavesResponse.create = function create(properties) {
                    return new GetWavesResponse(properties);
                };

                /**
                 * Encodes the specified GetWavesResponse message. Does not implicitly {@link waves.data.assets.GetWavesResponse.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.GetWavesResponse
                 * @static
                 * @param {waves.data.assets.IGetWavesResponse} message GetWavesResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetWavesResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.wavesInfo != null && message.hasOwnProperty("wavesInfo"))
                        $root.waves.data.assets.WavesInfo.encode(message.wavesInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetWavesResponse message, length delimited. Does not implicitly {@link waves.data.assets.GetWavesResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.GetWavesResponse
                 * @static
                 * @param {waves.data.assets.IGetWavesResponse} message GetWavesResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetWavesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetWavesResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.GetWavesResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.GetWavesResponse} GetWavesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetWavesResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.GetWavesResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.wavesInfo = $root.waves.data.assets.WavesInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetWavesResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.GetWavesResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.GetWavesResponse} GetWavesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetWavesResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetWavesResponse message.
                 * @function verify
                 * @memberof waves.data.assets.GetWavesResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetWavesResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.wavesInfo != null && message.hasOwnProperty("wavesInfo")) {
                        var error = $root.waves.data.assets.WavesInfo.verify(message.wavesInfo);
                        if (error)
                            return "wavesInfo." + error;
                    }
                    return null;
                };

                /**
                 * Creates a GetWavesResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.GetWavesResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.GetWavesResponse} GetWavesResponse
                 */
                GetWavesResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.GetWavesResponse)
                        return object;
                    var message = new $root.waves.data.assets.GetWavesResponse();
                    if (object.wavesInfo != null) {
                        if (typeof object.wavesInfo !== "object")
                            throw TypeError(".waves.data.assets.GetWavesResponse.wavesInfo: object expected");
                        message.wavesInfo = $root.waves.data.assets.WavesInfo.fromObject(object.wavesInfo);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetWavesResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.GetWavesResponse
                 * @static
                 * @param {waves.data.assets.GetWavesResponse} message GetWavesResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetWavesResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.wavesInfo = null;
                    if (message.wavesInfo != null && message.hasOwnProperty("wavesInfo"))
                        object.wavesInfo = $root.waves.data.assets.WavesInfo.toObject(message.wavesInfo, options);
                    return object;
                };

                /**
                 * Converts this GetWavesResponse to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.GetWavesResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetWavesResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetWavesResponse;
            })();

            assets.GetAssetRequest = (function() {

                /**
                 * Properties of a GetAssetRequest.
                 * @memberof waves.data.assets
                 * @interface IGetAssetRequest
                 * @property {Uint8Array|null} [assetId] GetAssetRequest assetId
                 */

                /**
                 * Constructs a new GetAssetRequest.
                 * @memberof waves.data.assets
                 * @classdesc Represents a GetAssetRequest.
                 * @implements IGetAssetRequest
                 * @constructor
                 * @param {waves.data.assets.IGetAssetRequest=} [properties] Properties to set
                 */
                function GetAssetRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetAssetRequest assetId.
                 * @member {Uint8Array} assetId
                 * @memberof waves.data.assets.GetAssetRequest
                 * @instance
                 */
                GetAssetRequest.prototype.assetId = $util.newBuffer([]);

                /**
                 * Creates a new GetAssetRequest instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.GetAssetRequest
                 * @static
                 * @param {waves.data.assets.IGetAssetRequest=} [properties] Properties to set
                 * @returns {waves.data.assets.GetAssetRequest} GetAssetRequest instance
                 */
                GetAssetRequest.create = function create(properties) {
                    return new GetAssetRequest(properties);
                };

                /**
                 * Encodes the specified GetAssetRequest message. Does not implicitly {@link waves.data.assets.GetAssetRequest.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.GetAssetRequest
                 * @static
                 * @param {waves.data.assets.IGetAssetRequest} message GetAssetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAssetRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.assetId != null && message.hasOwnProperty("assetId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.assetId);
                    return writer;
                };

                /**
                 * Encodes the specified GetAssetRequest message, length delimited. Does not implicitly {@link waves.data.assets.GetAssetRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.GetAssetRequest
                 * @static
                 * @param {waves.data.assets.IGetAssetRequest} message GetAssetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAssetRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetAssetRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.GetAssetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.GetAssetRequest} GetAssetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAssetRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.GetAssetRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.assetId = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetAssetRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.GetAssetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.GetAssetRequest} GetAssetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAssetRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetAssetRequest message.
                 * @function verify
                 * @memberof waves.data.assets.GetAssetRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetAssetRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.assetId != null && message.hasOwnProperty("assetId"))
                        if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                            return "assetId: buffer expected";
                    return null;
                };

                /**
                 * Creates a GetAssetRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.GetAssetRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.GetAssetRequest} GetAssetRequest
                 */
                GetAssetRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.GetAssetRequest)
                        return object;
                    var message = new $root.waves.data.assets.GetAssetRequest();
                    if (object.assetId != null)
                        if (typeof object.assetId === "string")
                            $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                        else if (object.assetId.length)
                            message.assetId = object.assetId;
                    return message;
                };

                /**
                 * Creates a plain object from a GetAssetRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.GetAssetRequest
                 * @static
                 * @param {waves.data.assets.GetAssetRequest} message GetAssetRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetAssetRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.assetId = "";
                        else {
                            object.assetId = [];
                            if (options.bytes !== Array)
                                object.assetId = $util.newBuffer(object.assetId);
                        }
                    if (message.assetId != null && message.hasOwnProperty("assetId"))
                        object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
                    return object;
                };

                /**
                 * Converts this GetAssetRequest to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.GetAssetRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetAssetRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetAssetRequest;
            })();

            assets.GetAssetResponse = (function() {

                /**
                 * Properties of a GetAssetResponse.
                 * @memberof waves.data.assets
                 * @interface IGetAssetResponse
                 * @property {waves.data.assets.IAssetInfo|null} [assetInfo] GetAssetResponse assetInfo
                 */

                /**
                 * Constructs a new GetAssetResponse.
                 * @memberof waves.data.assets
                 * @classdesc Represents a GetAssetResponse.
                 * @implements IGetAssetResponse
                 * @constructor
                 * @param {waves.data.assets.IGetAssetResponse=} [properties] Properties to set
                 */
                function GetAssetResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetAssetResponse assetInfo.
                 * @member {waves.data.assets.IAssetInfo|null|undefined} assetInfo
                 * @memberof waves.data.assets.GetAssetResponse
                 * @instance
                 */
                GetAssetResponse.prototype.assetInfo = null;

                /**
                 * Creates a new GetAssetResponse instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.GetAssetResponse
                 * @static
                 * @param {waves.data.assets.IGetAssetResponse=} [properties] Properties to set
                 * @returns {waves.data.assets.GetAssetResponse} GetAssetResponse instance
                 */
                GetAssetResponse.create = function create(properties) {
                    return new GetAssetResponse(properties);
                };

                /**
                 * Encodes the specified GetAssetResponse message. Does not implicitly {@link waves.data.assets.GetAssetResponse.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.GetAssetResponse
                 * @static
                 * @param {waves.data.assets.IGetAssetResponse} message GetAssetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAssetResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo"))
                        $root.waves.data.assets.AssetInfo.encode(message.assetInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetAssetResponse message, length delimited. Does not implicitly {@link waves.data.assets.GetAssetResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.GetAssetResponse
                 * @static
                 * @param {waves.data.assets.IGetAssetResponse} message GetAssetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAssetResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetAssetResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.GetAssetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.GetAssetResponse} GetAssetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAssetResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.GetAssetResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.assetInfo = $root.waves.data.assets.AssetInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetAssetResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.GetAssetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.GetAssetResponse} GetAssetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAssetResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetAssetResponse message.
                 * @function verify
                 * @memberof waves.data.assets.GetAssetResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetAssetResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo")) {
                        var error = $root.waves.data.assets.AssetInfo.verify(message.assetInfo);
                        if (error)
                            return "assetInfo." + error;
                    }
                    return null;
                };

                /**
                 * Creates a GetAssetResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.GetAssetResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.GetAssetResponse} GetAssetResponse
                 */
                GetAssetResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.GetAssetResponse)
                        return object;
                    var message = new $root.waves.data.assets.GetAssetResponse();
                    if (object.assetInfo != null) {
                        if (typeof object.assetInfo !== "object")
                            throw TypeError(".waves.data.assets.GetAssetResponse.assetInfo: object expected");
                        message.assetInfo = $root.waves.data.assets.AssetInfo.fromObject(object.assetInfo);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetAssetResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.GetAssetResponse
                 * @static
                 * @param {waves.data.assets.GetAssetResponse} message GetAssetResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetAssetResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.assetInfo = null;
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo"))
                        object.assetInfo = $root.waves.data.assets.AssetInfo.toObject(message.assetInfo, options);
                    return object;
                };

                /**
                 * Converts this GetAssetResponse to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.GetAssetResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetAssetResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetAssetResponse;
            })();

            assets.GetAssetsBatchRequest = (function() {

                /**
                 * Properties of a GetAssetsBatchRequest.
                 * @memberof waves.data.assets
                 * @interface IGetAssetsBatchRequest
                 * @property {Array.<Uint8Array>|null} [assetIds] GetAssetsBatchRequest assetIds
                 */

                /**
                 * Constructs a new GetAssetsBatchRequest.
                 * @memberof waves.data.assets
                 * @classdesc Represents a GetAssetsBatchRequest.
                 * @implements IGetAssetsBatchRequest
                 * @constructor
                 * @param {waves.data.assets.IGetAssetsBatchRequest=} [properties] Properties to set
                 */
                function GetAssetsBatchRequest(properties) {
                    this.assetIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetAssetsBatchRequest assetIds.
                 * @member {Array.<Uint8Array>} assetIds
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @instance
                 */
                GetAssetsBatchRequest.prototype.assetIds = $util.emptyArray;

                /**
                 * Creates a new GetAssetsBatchRequest instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @static
                 * @param {waves.data.assets.IGetAssetsBatchRequest=} [properties] Properties to set
                 * @returns {waves.data.assets.GetAssetsBatchRequest} GetAssetsBatchRequest instance
                 */
                GetAssetsBatchRequest.create = function create(properties) {
                    return new GetAssetsBatchRequest(properties);
                };

                /**
                 * Encodes the specified GetAssetsBatchRequest message. Does not implicitly {@link waves.data.assets.GetAssetsBatchRequest.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @static
                 * @param {waves.data.assets.IGetAssetsBatchRequest} message GetAssetsBatchRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAssetsBatchRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.assetIds != null && message.assetIds.length)
                        for (var i = 0; i < message.assetIds.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.assetIds[i]);
                    return writer;
                };

                /**
                 * Encodes the specified GetAssetsBatchRequest message, length delimited. Does not implicitly {@link waves.data.assets.GetAssetsBatchRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @static
                 * @param {waves.data.assets.IGetAssetsBatchRequest} message GetAssetsBatchRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAssetsBatchRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetAssetsBatchRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.GetAssetsBatchRequest} GetAssetsBatchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAssetsBatchRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.GetAssetsBatchRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.assetIds && message.assetIds.length))
                                message.assetIds = [];
                            message.assetIds.push(reader.bytes());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetAssetsBatchRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.GetAssetsBatchRequest} GetAssetsBatchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAssetsBatchRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetAssetsBatchRequest message.
                 * @function verify
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetAssetsBatchRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.assetIds != null && message.hasOwnProperty("assetIds")) {
                        if (!Array.isArray(message.assetIds))
                            return "assetIds: array expected";
                        for (var i = 0; i < message.assetIds.length; ++i)
                            if (!(message.assetIds[i] && typeof message.assetIds[i].length === "number" || $util.isString(message.assetIds[i])))
                                return "assetIds: buffer[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a GetAssetsBatchRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.GetAssetsBatchRequest} GetAssetsBatchRequest
                 */
                GetAssetsBatchRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.GetAssetsBatchRequest)
                        return object;
                    var message = new $root.waves.data.assets.GetAssetsBatchRequest();
                    if (object.assetIds) {
                        if (!Array.isArray(object.assetIds))
                            throw TypeError(".waves.data.assets.GetAssetsBatchRequest.assetIds: array expected");
                        message.assetIds = [];
                        for (var i = 0; i < object.assetIds.length; ++i)
                            if (typeof object.assetIds[i] === "string")
                                $util.base64.decode(object.assetIds[i], message.assetIds[i] = $util.newBuffer($util.base64.length(object.assetIds[i])), 0);
                            else if (object.assetIds[i].length)
                                message.assetIds[i] = object.assetIds[i];
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetAssetsBatchRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @static
                 * @param {waves.data.assets.GetAssetsBatchRequest} message GetAssetsBatchRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetAssetsBatchRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.assetIds = [];
                    if (message.assetIds && message.assetIds.length) {
                        object.assetIds = [];
                        for (var j = 0; j < message.assetIds.length; ++j)
                            object.assetIds[j] = options.bytes === String ? $util.base64.encode(message.assetIds[j], 0, message.assetIds[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.assetIds[j]) : message.assetIds[j];
                    }
                    return object;
                };

                /**
                 * Converts this GetAssetsBatchRequest to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.GetAssetsBatchRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetAssetsBatchRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetAssetsBatchRequest;
            })();

            assets.AssetInfoIfExists = (function() {

                /**
                 * Properties of an AssetInfoIfExists.
                 * @memberof waves.data.assets
                 * @interface IAssetInfoIfExists
                 * @property {waves.data.assets.IAssetInfo|null} [assetInfo] AssetInfoIfExists assetInfo
                 */

                /**
                 * Constructs a new AssetInfoIfExists.
                 * @memberof waves.data.assets
                 * @classdesc Represents an AssetInfoIfExists.
                 * @implements IAssetInfoIfExists
                 * @constructor
                 * @param {waves.data.assets.IAssetInfoIfExists=} [properties] Properties to set
                 */
                function AssetInfoIfExists(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AssetInfoIfExists assetInfo.
                 * @member {waves.data.assets.IAssetInfo|null|undefined} assetInfo
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @instance
                 */
                AssetInfoIfExists.prototype.assetInfo = null;

                /**
                 * Creates a new AssetInfoIfExists instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @static
                 * @param {waves.data.assets.IAssetInfoIfExists=} [properties] Properties to set
                 * @returns {waves.data.assets.AssetInfoIfExists} AssetInfoIfExists instance
                 */
                AssetInfoIfExists.create = function create(properties) {
                    return new AssetInfoIfExists(properties);
                };

                /**
                 * Encodes the specified AssetInfoIfExists message. Does not implicitly {@link waves.data.assets.AssetInfoIfExists.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @static
                 * @param {waves.data.assets.IAssetInfoIfExists} message AssetInfoIfExists message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssetInfoIfExists.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo"))
                        $root.waves.data.assets.AssetInfo.encode(message.assetInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AssetInfoIfExists message, length delimited. Does not implicitly {@link waves.data.assets.AssetInfoIfExists.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @static
                 * @param {waves.data.assets.IAssetInfoIfExists} message AssetInfoIfExists message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssetInfoIfExists.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AssetInfoIfExists message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.AssetInfoIfExists} AssetInfoIfExists
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssetInfoIfExists.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.AssetInfoIfExists();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.assetInfo = $root.waves.data.assets.AssetInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AssetInfoIfExists message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.AssetInfoIfExists} AssetInfoIfExists
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssetInfoIfExists.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AssetInfoIfExists message.
                 * @function verify
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AssetInfoIfExists.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo")) {
                        var error = $root.waves.data.assets.AssetInfo.verify(message.assetInfo);
                        if (error)
                            return "assetInfo." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AssetInfoIfExists message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.AssetInfoIfExists} AssetInfoIfExists
                 */
                AssetInfoIfExists.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.AssetInfoIfExists)
                        return object;
                    var message = new $root.waves.data.assets.AssetInfoIfExists();
                    if (object.assetInfo != null) {
                        if (typeof object.assetInfo !== "object")
                            throw TypeError(".waves.data.assets.AssetInfoIfExists.assetInfo: object expected");
                        message.assetInfo = $root.waves.data.assets.AssetInfo.fromObject(object.assetInfo);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AssetInfoIfExists message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @static
                 * @param {waves.data.assets.AssetInfoIfExists} message AssetInfoIfExists
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AssetInfoIfExists.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.assetInfo = null;
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo"))
                        object.assetInfo = $root.waves.data.assets.AssetInfo.toObject(message.assetInfo, options);
                    return object;
                };

                /**
                 * Converts this AssetInfoIfExists to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.AssetInfoIfExists
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AssetInfoIfExists.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AssetInfoIfExists;
            })();

            assets.GetAssetsBatchResponse = (function() {

                /**
                 * Properties of a GetAssetsBatchResponse.
                 * @memberof waves.data.assets
                 * @interface IGetAssetsBatchResponse
                 * @property {Array.<waves.data.assets.IAssetInfoIfExists>|null} [assetInfo] GetAssetsBatchResponse assetInfo
                 */

                /**
                 * Constructs a new GetAssetsBatchResponse.
                 * @memberof waves.data.assets
                 * @classdesc Represents a GetAssetsBatchResponse.
                 * @implements IGetAssetsBatchResponse
                 * @constructor
                 * @param {waves.data.assets.IGetAssetsBatchResponse=} [properties] Properties to set
                 */
                function GetAssetsBatchResponse(properties) {
                    this.assetInfo = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetAssetsBatchResponse assetInfo.
                 * @member {Array.<waves.data.assets.IAssetInfoIfExists>} assetInfo
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @instance
                 */
                GetAssetsBatchResponse.prototype.assetInfo = $util.emptyArray;

                /**
                 * Creates a new GetAssetsBatchResponse instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @static
                 * @param {waves.data.assets.IGetAssetsBatchResponse=} [properties] Properties to set
                 * @returns {waves.data.assets.GetAssetsBatchResponse} GetAssetsBatchResponse instance
                 */
                GetAssetsBatchResponse.create = function create(properties) {
                    return new GetAssetsBatchResponse(properties);
                };

                /**
                 * Encodes the specified GetAssetsBatchResponse message. Does not implicitly {@link waves.data.assets.GetAssetsBatchResponse.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @static
                 * @param {waves.data.assets.IGetAssetsBatchResponse} message GetAssetsBatchResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAssetsBatchResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.assetInfo != null && message.assetInfo.length)
                        for (var i = 0; i < message.assetInfo.length; ++i)
                            $root.waves.data.assets.AssetInfoIfExists.encode(message.assetInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetAssetsBatchResponse message, length delimited. Does not implicitly {@link waves.data.assets.GetAssetsBatchResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @static
                 * @param {waves.data.assets.IGetAssetsBatchResponse} message GetAssetsBatchResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAssetsBatchResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetAssetsBatchResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.GetAssetsBatchResponse} GetAssetsBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAssetsBatchResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.GetAssetsBatchResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.assetInfo && message.assetInfo.length))
                                message.assetInfo = [];
                            message.assetInfo.push($root.waves.data.assets.AssetInfoIfExists.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetAssetsBatchResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.GetAssetsBatchResponse} GetAssetsBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAssetsBatchResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetAssetsBatchResponse message.
                 * @function verify
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetAssetsBatchResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo")) {
                        if (!Array.isArray(message.assetInfo))
                            return "assetInfo: array expected";
                        for (var i = 0; i < message.assetInfo.length; ++i) {
                            var error = $root.waves.data.assets.AssetInfoIfExists.verify(message.assetInfo[i]);
                            if (error)
                                return "assetInfo." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a GetAssetsBatchResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.GetAssetsBatchResponse} GetAssetsBatchResponse
                 */
                GetAssetsBatchResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.GetAssetsBatchResponse)
                        return object;
                    var message = new $root.waves.data.assets.GetAssetsBatchResponse();
                    if (object.assetInfo) {
                        if (!Array.isArray(object.assetInfo))
                            throw TypeError(".waves.data.assets.GetAssetsBatchResponse.assetInfo: array expected");
                        message.assetInfo = [];
                        for (var i = 0; i < object.assetInfo.length; ++i) {
                            if (typeof object.assetInfo[i] !== "object")
                                throw TypeError(".waves.data.assets.GetAssetsBatchResponse.assetInfo: object expected");
                            message.assetInfo[i] = $root.waves.data.assets.AssetInfoIfExists.fromObject(object.assetInfo[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetAssetsBatchResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @static
                 * @param {waves.data.assets.GetAssetsBatchResponse} message GetAssetsBatchResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetAssetsBatchResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.assetInfo = [];
                    if (message.assetInfo && message.assetInfo.length) {
                        object.assetInfo = [];
                        for (var j = 0; j < message.assetInfo.length; ++j)
                            object.assetInfo[j] = $root.waves.data.assets.AssetInfoIfExists.toObject(message.assetInfo[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this GetAssetsBatchResponse to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.GetAssetsBatchResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetAssetsBatchResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetAssetsBatchResponse;
            })();

            assets.SearchAssetRequest = (function() {

                /**
                 * Properties of a SearchAssetRequest.
                 * @memberof waves.data.assets
                 * @interface ISearchAssetRequest
                 * @property {string|null} [query] SearchAssetRequest query
                 * @property {waves.data.IPagination|null} [pagination] SearchAssetRequest pagination
                 */

                /**
                 * Constructs a new SearchAssetRequest.
                 * @memberof waves.data.assets
                 * @classdesc Represents a SearchAssetRequest.
                 * @implements ISearchAssetRequest
                 * @constructor
                 * @param {waves.data.assets.ISearchAssetRequest=} [properties] Properties to set
                 */
                function SearchAssetRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SearchAssetRequest query.
                 * @member {string} query
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @instance
                 */
                SearchAssetRequest.prototype.query = "";

                /**
                 * SearchAssetRequest pagination.
                 * @member {waves.data.IPagination|null|undefined} pagination
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @instance
                 */
                SearchAssetRequest.prototype.pagination = null;

                /**
                 * Creates a new SearchAssetRequest instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @static
                 * @param {waves.data.assets.ISearchAssetRequest=} [properties] Properties to set
                 * @returns {waves.data.assets.SearchAssetRequest} SearchAssetRequest instance
                 */
                SearchAssetRequest.create = function create(properties) {
                    return new SearchAssetRequest(properties);
                };

                /**
                 * Encodes the specified SearchAssetRequest message. Does not implicitly {@link waves.data.assets.SearchAssetRequest.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @static
                 * @param {waves.data.assets.ISearchAssetRequest} message SearchAssetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchAssetRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.query != null && message.hasOwnProperty("query"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
                    if (message.pagination != null && message.hasOwnProperty("pagination"))
                        $root.waves.data.Pagination.encode(message.pagination, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SearchAssetRequest message, length delimited. Does not implicitly {@link waves.data.assets.SearchAssetRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @static
                 * @param {waves.data.assets.ISearchAssetRequest} message SearchAssetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchAssetRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SearchAssetRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.SearchAssetRequest} SearchAssetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchAssetRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.SearchAssetRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.query = reader.string();
                            break;
                        case 100:
                            message.pagination = $root.waves.data.Pagination.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SearchAssetRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.SearchAssetRequest} SearchAssetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchAssetRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SearchAssetRequest message.
                 * @function verify
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SearchAssetRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.query != null && message.hasOwnProperty("query"))
                        if (!$util.isString(message.query))
                            return "query: string expected";
                    if (message.pagination != null && message.hasOwnProperty("pagination")) {
                        var error = $root.waves.data.Pagination.verify(message.pagination);
                        if (error)
                            return "pagination." + error;
                    }
                    return null;
                };

                /**
                 * Creates a SearchAssetRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.SearchAssetRequest} SearchAssetRequest
                 */
                SearchAssetRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.SearchAssetRequest)
                        return object;
                    var message = new $root.waves.data.assets.SearchAssetRequest();
                    if (object.query != null)
                        message.query = String(object.query);
                    if (object.pagination != null) {
                        if (typeof object.pagination !== "object")
                            throw TypeError(".waves.data.assets.SearchAssetRequest.pagination: object expected");
                        message.pagination = $root.waves.data.Pagination.fromObject(object.pagination);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SearchAssetRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @static
                 * @param {waves.data.assets.SearchAssetRequest} message SearchAssetRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SearchAssetRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.query = "";
                        object.pagination = null;
                    }
                    if (message.query != null && message.hasOwnProperty("query"))
                        object.query = message.query;
                    if (message.pagination != null && message.hasOwnProperty("pagination"))
                        object.pagination = $root.waves.data.Pagination.toObject(message.pagination, options);
                    return object;
                };

                /**
                 * Converts this SearchAssetRequest to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.SearchAssetRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SearchAssetRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SearchAssetRequest;
            })();

            assets.SearchAssetResponse = (function() {

                /**
                 * Properties of a SearchAssetResponse.
                 * @memberof waves.data.assets
                 * @interface ISearchAssetResponse
                 * @property {waves.data.assets.IAssetInfo|null} [assetInfo] SearchAssetResponse assetInfo
                 * @property {Uint8Array|null} [cursor] SearchAssetResponse cursor
                 */

                /**
                 * Constructs a new SearchAssetResponse.
                 * @memberof waves.data.assets
                 * @classdesc Represents a SearchAssetResponse.
                 * @implements ISearchAssetResponse
                 * @constructor
                 * @param {waves.data.assets.ISearchAssetResponse=} [properties] Properties to set
                 */
                function SearchAssetResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SearchAssetResponse assetInfo.
                 * @member {waves.data.assets.IAssetInfo|null|undefined} assetInfo
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @instance
                 */
                SearchAssetResponse.prototype.assetInfo = null;

                /**
                 * SearchAssetResponse cursor.
                 * @member {Uint8Array} cursor
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @instance
                 */
                SearchAssetResponse.prototype.cursor = $util.newBuffer([]);

                /**
                 * Creates a new SearchAssetResponse instance using the specified properties.
                 * @function create
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @static
                 * @param {waves.data.assets.ISearchAssetResponse=} [properties] Properties to set
                 * @returns {waves.data.assets.SearchAssetResponse} SearchAssetResponse instance
                 */
                SearchAssetResponse.create = function create(properties) {
                    return new SearchAssetResponse(properties);
                };

                /**
                 * Encodes the specified SearchAssetResponse message. Does not implicitly {@link waves.data.assets.SearchAssetResponse.verify|verify} messages.
                 * @function encode
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @static
                 * @param {waves.data.assets.ISearchAssetResponse} message SearchAssetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchAssetResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo"))
                        $root.waves.data.assets.AssetInfo.encode(message.assetInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.cursor != null && message.hasOwnProperty("cursor"))
                        writer.uint32(/* id 100, wireType 2 =*/802).bytes(message.cursor);
                    return writer;
                };

                /**
                 * Encodes the specified SearchAssetResponse message, length delimited. Does not implicitly {@link waves.data.assets.SearchAssetResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @static
                 * @param {waves.data.assets.ISearchAssetResponse} message SearchAssetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchAssetResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SearchAssetResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {waves.data.assets.SearchAssetResponse} SearchAssetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchAssetResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.assets.SearchAssetResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.assetInfo = $root.waves.data.assets.AssetInfo.decode(reader, reader.uint32());
                            break;
                        case 100:
                            message.cursor = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SearchAssetResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {waves.data.assets.SearchAssetResponse} SearchAssetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchAssetResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SearchAssetResponse message.
                 * @function verify
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SearchAssetResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo")) {
                        var error = $root.waves.data.assets.AssetInfo.verify(message.assetInfo);
                        if (error)
                            return "assetInfo." + error;
                    }
                    if (message.cursor != null && message.hasOwnProperty("cursor"))
                        if (!(message.cursor && typeof message.cursor.length === "number" || $util.isString(message.cursor)))
                            return "cursor: buffer expected";
                    return null;
                };

                /**
                 * Creates a SearchAssetResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {waves.data.assets.SearchAssetResponse} SearchAssetResponse
                 */
                SearchAssetResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.waves.data.assets.SearchAssetResponse)
                        return object;
                    var message = new $root.waves.data.assets.SearchAssetResponse();
                    if (object.assetInfo != null) {
                        if (typeof object.assetInfo !== "object")
                            throw TypeError(".waves.data.assets.SearchAssetResponse.assetInfo: object expected");
                        message.assetInfo = $root.waves.data.assets.AssetInfo.fromObject(object.assetInfo);
                    }
                    if (object.cursor != null)
                        if (typeof object.cursor === "string")
                            $util.base64.decode(object.cursor, message.cursor = $util.newBuffer($util.base64.length(object.cursor)), 0);
                        else if (object.cursor.length)
                            message.cursor = object.cursor;
                    return message;
                };

                /**
                 * Creates a plain object from a SearchAssetResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @static
                 * @param {waves.data.assets.SearchAssetResponse} message SearchAssetResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SearchAssetResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.assetInfo = null;
                        if (options.bytes === String)
                            object.cursor = "";
                        else {
                            object.cursor = [];
                            if (options.bytes !== Array)
                                object.cursor = $util.newBuffer(object.cursor);
                        }
                    }
                    if (message.assetInfo != null && message.hasOwnProperty("assetInfo"))
                        object.assetInfo = $root.waves.data.assets.AssetInfo.toObject(message.assetInfo, options);
                    if (message.cursor != null && message.hasOwnProperty("cursor"))
                        object.cursor = options.bytes === String ? $util.base64.encode(message.cursor, 0, message.cursor.length) : options.bytes === Array ? Array.prototype.slice.call(message.cursor) : message.cursor;
                    return object;
                };

                /**
                 * Converts this SearchAssetResponse to JSON.
                 * @function toJSON
                 * @memberof waves.data.assets.SearchAssetResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SearchAssetResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SearchAssetResponse;
            })();

            assets.Assets = (function() {

                /**
                 * Constructs a new Assets service.
                 * @memberof waves.data.assets
                 * @classdesc Represents an Assets
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Assets(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Assets.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Assets;

                /**
                 * Creates new Assets service using the specified rpc implementation.
                 * @function create
                 * @memberof waves.data.assets.Assets
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Assets} RPC service. Useful where requests and/or responses are streamed.
                 */
                Assets.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link waves.data.assets.Assets#getWaves}.
                 * @memberof waves.data.assets.Assets
                 * @typedef GetWavesCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {waves.data.assets.GetWavesResponse} [response] GetWavesResponse
                 */

                /**
                 * Calls GetWaves.
                 * @function getWaves
                 * @memberof waves.data.assets.Assets
                 * @instance
                 * @param {waves.data.assets.IGetWavesRequest} request GetWavesRequest message or plain object
                 * @param {waves.data.assets.Assets.GetWavesCallback} callback Node-style callback called with the error, if any, and GetWavesResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Assets.prototype.getWaves = function getWaves(request, callback) {
                    return this.rpcCall(getWaves, $root.waves.data.assets.GetWavesRequest, $root.waves.data.assets.GetWavesResponse, request, callback);
                }, "name", { value: "GetWaves" });

                /**
                 * Calls GetWaves.
                 * @function getWaves
                 * @memberof waves.data.assets.Assets
                 * @instance
                 * @param {waves.data.assets.IGetWavesRequest} request GetWavesRequest message or plain object
                 * @returns {Promise<waves.data.assets.GetWavesResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link waves.data.assets.Assets#getAsset}.
                 * @memberof waves.data.assets.Assets
                 * @typedef GetAssetCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {waves.data.assets.GetAssetResponse} [response] GetAssetResponse
                 */

                /**
                 * Calls GetAsset.
                 * @function getAsset
                 * @memberof waves.data.assets.Assets
                 * @instance
                 * @param {waves.data.assets.IGetAssetRequest} request GetAssetRequest message or plain object
                 * @param {waves.data.assets.Assets.GetAssetCallback} callback Node-style callback called with the error, if any, and GetAssetResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Assets.prototype.getAsset = function getAsset(request, callback) {
                    return this.rpcCall(getAsset, $root.waves.data.assets.GetAssetRequest, $root.waves.data.assets.GetAssetResponse, request, callback);
                }, "name", { value: "GetAsset" });

                /**
                 * Calls GetAsset.
                 * @function getAsset
                 * @memberof waves.data.assets.Assets
                 * @instance
                 * @param {waves.data.assets.IGetAssetRequest} request GetAssetRequest message or plain object
                 * @returns {Promise<waves.data.assets.GetAssetResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link waves.data.assets.Assets#getAssetsBatch}.
                 * @memberof waves.data.assets.Assets
                 * @typedef GetAssetsBatchCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {waves.data.assets.GetAssetsBatchResponse} [response] GetAssetsBatchResponse
                 */

                /**
                 * Calls GetAssetsBatch.
                 * @function getAssetsBatch
                 * @memberof waves.data.assets.Assets
                 * @instance
                 * @param {waves.data.assets.IGetAssetsBatchRequest} request GetAssetsBatchRequest message or plain object
                 * @param {waves.data.assets.Assets.GetAssetsBatchCallback} callback Node-style callback called with the error, if any, and GetAssetsBatchResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Assets.prototype.getAssetsBatch = function getAssetsBatch(request, callback) {
                    return this.rpcCall(getAssetsBatch, $root.waves.data.assets.GetAssetsBatchRequest, $root.waves.data.assets.GetAssetsBatchResponse, request, callback);
                }, "name", { value: "GetAssetsBatch" });

                /**
                 * Calls GetAssetsBatch.
                 * @function getAssetsBatch
                 * @memberof waves.data.assets.Assets
                 * @instance
                 * @param {waves.data.assets.IGetAssetsBatchRequest} request GetAssetsBatchRequest message or plain object
                 * @returns {Promise<waves.data.assets.GetAssetsBatchResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link waves.data.assets.Assets#searchAsset}.
                 * @memberof waves.data.assets.Assets
                 * @typedef SearchAssetCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {waves.data.assets.SearchAssetResponse} [response] SearchAssetResponse
                 */

                /**
                 * Calls SearchAsset.
                 * @function searchAsset
                 * @memberof waves.data.assets.Assets
                 * @instance
                 * @param {waves.data.assets.ISearchAssetRequest} request SearchAssetRequest message or plain object
                 * @param {waves.data.assets.Assets.SearchAssetCallback} callback Node-style callback called with the error, if any, and SearchAssetResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Assets.prototype.searchAsset = function searchAsset(request, callback) {
                    return this.rpcCall(searchAsset, $root.waves.data.assets.SearchAssetRequest, $root.waves.data.assets.SearchAssetResponse, request, callback);
                }, "name", { value: "SearchAsset" });

                /**
                 * Calls SearchAsset.
                 * @function searchAsset
                 * @memberof waves.data.assets.Assets
                 * @instance
                 * @param {waves.data.assets.ISearchAssetRequest} request SearchAssetRequest message or plain object
                 * @returns {Promise<waves.data.assets.SearchAssetResponse>} Promise
                 * @variation 2
                 */

                return Assets;
            })();

            return assets;
        })();

        data.ChangedByTransactionRequest = (function() {

            /**
             * Properties of a ChangedByTransactionRequest.
             * @memberof waves.data
             * @interface IChangedByTransactionRequest
             * @property {Uint8Array|null} [transactionId] ChangedByTransactionRequest transactionId
             */

            /**
             * Constructs a new ChangedByTransactionRequest.
             * @memberof waves.data
             * @classdesc Represents a ChangedByTransactionRequest.
             * @implements IChangedByTransactionRequest
             * @constructor
             * @param {waves.data.IChangedByTransactionRequest=} [properties] Properties to set
             */
            function ChangedByTransactionRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChangedByTransactionRequest transactionId.
             * @member {Uint8Array} transactionId
             * @memberof waves.data.ChangedByTransactionRequest
             * @instance
             */
            ChangedByTransactionRequest.prototype.transactionId = $util.newBuffer([]);

            /**
             * Creates a new ChangedByTransactionRequest instance using the specified properties.
             * @function create
             * @memberof waves.data.ChangedByTransactionRequest
             * @static
             * @param {waves.data.IChangedByTransactionRequest=} [properties] Properties to set
             * @returns {waves.data.ChangedByTransactionRequest} ChangedByTransactionRequest instance
             */
            ChangedByTransactionRequest.create = function create(properties) {
                return new ChangedByTransactionRequest(properties);
            };

            /**
             * Encodes the specified ChangedByTransactionRequest message. Does not implicitly {@link waves.data.ChangedByTransactionRequest.verify|verify} messages.
             * @function encode
             * @memberof waves.data.ChangedByTransactionRequest
             * @static
             * @param {waves.data.IChangedByTransactionRequest} message ChangedByTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangedByTransactionRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.transactionId);
                return writer;
            };

            /**
             * Encodes the specified ChangedByTransactionRequest message, length delimited. Does not implicitly {@link waves.data.ChangedByTransactionRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof waves.data.ChangedByTransactionRequest
             * @static
             * @param {waves.data.IChangedByTransactionRequest} message ChangedByTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangedByTransactionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChangedByTransactionRequest message from the specified reader or buffer.
             * @function decode
             * @memberof waves.data.ChangedByTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {waves.data.ChangedByTransactionRequest} ChangedByTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangedByTransactionRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.ChangedByTransactionRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.transactionId = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChangedByTransactionRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof waves.data.ChangedByTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {waves.data.ChangedByTransactionRequest} ChangedByTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangedByTransactionRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChangedByTransactionRequest message.
             * @function verify
             * @memberof waves.data.ChangedByTransactionRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangedByTransactionRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                        return "transactionId: buffer expected";
                return null;
            };

            /**
             * Creates a ChangedByTransactionRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof waves.data.ChangedByTransactionRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {waves.data.ChangedByTransactionRequest} ChangedByTransactionRequest
             */
            ChangedByTransactionRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.waves.data.ChangedByTransactionRequest)
                    return object;
                var message = new $root.waves.data.ChangedByTransactionRequest();
                if (object.transactionId != null)
                    if (typeof object.transactionId === "string")
                        $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                    else if (object.transactionId.length)
                        message.transactionId = object.transactionId;
                return message;
            };

            /**
             * Creates a plain object from a ChangedByTransactionRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof waves.data.ChangedByTransactionRequest
             * @static
             * @param {waves.data.ChangedByTransactionRequest} message ChangedByTransactionRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangedByTransactionRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.transactionId = "";
                    else {
                        object.transactionId = [];
                        if (options.bytes !== Array)
                            object.transactionId = $util.newBuffer(object.transactionId);
                    }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                return object;
            };

            /**
             * Converts this ChangedByTransactionRequest to JSON.
             * @function toJSON
             * @memberof waves.data.ChangedByTransactionRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangedByTransactionRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ChangedByTransactionRequest;
        })();

        data.BlockchainCoordinate = (function() {

            /**
             * Properties of a BlockchainCoordinate.
             * @memberof waves.data
             * @interface IBlockchainCoordinate
             * @property {number|null} [height] BlockchainCoordinate height
             * @property {Long|null} [blockTimestamp] BlockchainCoordinate blockTimestamp
             */

            /**
             * Constructs a new BlockchainCoordinate.
             * @memberof waves.data
             * @classdesc Represents a BlockchainCoordinate.
             * @implements IBlockchainCoordinate
             * @constructor
             * @param {waves.data.IBlockchainCoordinate=} [properties] Properties to set
             */
            function BlockchainCoordinate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BlockchainCoordinate height.
             * @member {number} height
             * @memberof waves.data.BlockchainCoordinate
             * @instance
             */
            BlockchainCoordinate.prototype.height = 0;

            /**
             * BlockchainCoordinate blockTimestamp.
             * @member {Long} blockTimestamp
             * @memberof waves.data.BlockchainCoordinate
             * @instance
             */
            BlockchainCoordinate.prototype.blockTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * BlockchainCoordinate coordinate.
             * @member {"height"|"blockTimestamp"|undefined} coordinate
             * @memberof waves.data.BlockchainCoordinate
             * @instance
             */
            Object.defineProperty(BlockchainCoordinate.prototype, "coordinate", {
                get: $util.oneOfGetter($oneOfFields = ["height", "blockTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BlockchainCoordinate instance using the specified properties.
             * @function create
             * @memberof waves.data.BlockchainCoordinate
             * @static
             * @param {waves.data.IBlockchainCoordinate=} [properties] Properties to set
             * @returns {waves.data.BlockchainCoordinate} BlockchainCoordinate instance
             */
            BlockchainCoordinate.create = function create(properties) {
                return new BlockchainCoordinate(properties);
            };

            /**
             * Encodes the specified BlockchainCoordinate message. Does not implicitly {@link waves.data.BlockchainCoordinate.verify|verify} messages.
             * @function encode
             * @memberof waves.data.BlockchainCoordinate
             * @static
             * @param {waves.data.IBlockchainCoordinate} message BlockchainCoordinate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlockchainCoordinate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.height);
                if (message.blockTimestamp != null && message.hasOwnProperty("blockTimestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockTimestamp);
                return writer;
            };

            /**
             * Encodes the specified BlockchainCoordinate message, length delimited. Does not implicitly {@link waves.data.BlockchainCoordinate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof waves.data.BlockchainCoordinate
             * @static
             * @param {waves.data.IBlockchainCoordinate} message BlockchainCoordinate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlockchainCoordinate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BlockchainCoordinate message from the specified reader or buffer.
             * @function decode
             * @memberof waves.data.BlockchainCoordinate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {waves.data.BlockchainCoordinate} BlockchainCoordinate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlockchainCoordinate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.BlockchainCoordinate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.height = reader.int32();
                        break;
                    case 2:
                        message.blockTimestamp = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BlockchainCoordinate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof waves.data.BlockchainCoordinate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {waves.data.BlockchainCoordinate} BlockchainCoordinate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlockchainCoordinate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BlockchainCoordinate message.
             * @function verify
             * @memberof waves.data.BlockchainCoordinate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BlockchainCoordinate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.height != null && message.hasOwnProperty("height")) {
                    properties.coordinate = 1;
                    if (!$util.isInteger(message.height))
                        return "height: integer expected";
                }
                if (message.blockTimestamp != null && message.hasOwnProperty("blockTimestamp")) {
                    if (properties.coordinate === 1)
                        return "coordinate: multiple values";
                    properties.coordinate = 1;
                    if (!$util.isInteger(message.blockTimestamp) && !(message.blockTimestamp && $util.isInteger(message.blockTimestamp.low) && $util.isInteger(message.blockTimestamp.high)))
                        return "blockTimestamp: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates a BlockchainCoordinate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof waves.data.BlockchainCoordinate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {waves.data.BlockchainCoordinate} BlockchainCoordinate
             */
            BlockchainCoordinate.fromObject = function fromObject(object) {
                if (object instanceof $root.waves.data.BlockchainCoordinate)
                    return object;
                var message = new $root.waves.data.BlockchainCoordinate();
                if (object.height != null)
                    message.height = object.height | 0;
                if (object.blockTimestamp != null)
                    if ($util.Long)
                        (message.blockTimestamp = $util.Long.fromValue(object.blockTimestamp)).unsigned = false;
                    else if (typeof object.blockTimestamp === "string")
                        message.blockTimestamp = parseInt(object.blockTimestamp, 10);
                    else if (typeof object.blockTimestamp === "number")
                        message.blockTimestamp = object.blockTimestamp;
                    else if (typeof object.blockTimestamp === "object")
                        message.blockTimestamp = new $util.LongBits(object.blockTimestamp.low >>> 0, object.blockTimestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a BlockchainCoordinate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof waves.data.BlockchainCoordinate
             * @static
             * @param {waves.data.BlockchainCoordinate} message BlockchainCoordinate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BlockchainCoordinate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.height != null && message.hasOwnProperty("height")) {
                    object.height = message.height;
                    if (options.oneofs)
                        object.coordinate = "height";
                }
                if (message.blockTimestamp != null && message.hasOwnProperty("blockTimestamp")) {
                    if (typeof message.blockTimestamp === "number")
                        object.blockTimestamp = options.longs === String ? String(message.blockTimestamp) : message.blockTimestamp;
                    else
                        object.blockTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.blockTimestamp) : options.longs === Number ? new $util.LongBits(message.blockTimestamp.low >>> 0, message.blockTimestamp.high >>> 0).toNumber() : message.blockTimestamp;
                    if (options.oneofs)
                        object.coordinate = "blockTimestamp";
                }
                return object;
            };

            /**
             * Converts this BlockchainCoordinate to JSON.
             * @function toJSON
             * @memberof waves.data.BlockchainCoordinate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BlockchainCoordinate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BlockchainCoordinate;
        })();

        data.Pagination = (function() {

            /**
             * Properties of a Pagination.
             * @memberof waves.data
             * @interface IPagination
             * @property {number|null} [limit] Pagination limit
             * @property {Uint8Array|null} [after] Pagination after
             */

            /**
             * Constructs a new Pagination.
             * @memberof waves.data
             * @classdesc Represents a Pagination.
             * @implements IPagination
             * @constructor
             * @param {waves.data.IPagination=} [properties] Properties to set
             */
            function Pagination(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Pagination limit.
             * @member {number} limit
             * @memberof waves.data.Pagination
             * @instance
             */
            Pagination.prototype.limit = 0;

            /**
             * Pagination after.
             * @member {Uint8Array} after
             * @memberof waves.data.Pagination
             * @instance
             */
            Pagination.prototype.after = $util.newBuffer([]);

            /**
             * Creates a new Pagination instance using the specified properties.
             * @function create
             * @memberof waves.data.Pagination
             * @static
             * @param {waves.data.IPagination=} [properties] Properties to set
             * @returns {waves.data.Pagination} Pagination instance
             */
            Pagination.create = function create(properties) {
                return new Pagination(properties);
            };

            /**
             * Encodes the specified Pagination message. Does not implicitly {@link waves.data.Pagination.verify|verify} messages.
             * @function encode
             * @memberof waves.data.Pagination
             * @static
             * @param {waves.data.IPagination} message Pagination message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pagination.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.limit != null && message.hasOwnProperty("limit"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.limit);
                if (message.after != null && message.hasOwnProperty("after"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.after);
                return writer;
            };

            /**
             * Encodes the specified Pagination message, length delimited. Does not implicitly {@link waves.data.Pagination.verify|verify} messages.
             * @function encodeDelimited
             * @memberof waves.data.Pagination
             * @static
             * @param {waves.data.IPagination} message Pagination message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pagination.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Pagination message from the specified reader or buffer.
             * @function decode
             * @memberof waves.data.Pagination
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {waves.data.Pagination} Pagination
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pagination.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.Pagination();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.limit = reader.int32();
                        break;
                    case 2:
                        message.after = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Pagination message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof waves.data.Pagination
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {waves.data.Pagination} Pagination
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pagination.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pagination message.
             * @function verify
             * @memberof waves.data.Pagination
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pagination.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.limit != null && message.hasOwnProperty("limit"))
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                if (message.after != null && message.hasOwnProperty("after"))
                    if (!(message.after && typeof message.after.length === "number" || $util.isString(message.after)))
                        return "after: buffer expected";
                return null;
            };

            /**
             * Creates a Pagination message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof waves.data.Pagination
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {waves.data.Pagination} Pagination
             */
            Pagination.fromObject = function fromObject(object) {
                if (object instanceof $root.waves.data.Pagination)
                    return object;
                var message = new $root.waves.data.Pagination();
                if (object.limit != null)
                    message.limit = object.limit | 0;
                if (object.after != null)
                    if (typeof object.after === "string")
                        $util.base64.decode(object.after, message.after = $util.newBuffer($util.base64.length(object.after)), 0);
                    else if (object.after.length)
                        message.after = object.after;
                return message;
            };

            /**
             * Creates a plain object from a Pagination message. Also converts values to other types if specified.
             * @function toObject
             * @memberof waves.data.Pagination
             * @static
             * @param {waves.data.Pagination} message Pagination
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pagination.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.limit = 0;
                    if (options.bytes === String)
                        object.after = "";
                    else {
                        object.after = [];
                        if (options.bytes !== Array)
                            object.after = $util.newBuffer(object.after);
                    }
                }
                if (message.limit != null && message.hasOwnProperty("limit"))
                    object.limit = message.limit;
                if (message.after != null && message.hasOwnProperty("after"))
                    object.after = options.bytes === String ? $util.base64.encode(message.after, 0, message.after.length) : options.bytes === Array ? Array.prototype.slice.call(message.after) : message.after;
                return object;
            };

            /**
             * Converts this Pagination to JSON.
             * @function toJSON
             * @memberof waves.data.Pagination
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pagination.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Pagination;
        })();

        data.ValidationError = (function() {

            /**
             * Properties of a ValidationError.
             * @memberof waves.data
             * @interface IValidationError
             * @property {string|null} [message] ValidationError message
             * @property {string|null} [field] ValidationError field
             */

            /**
             * Constructs a new ValidationError.
             * @memberof waves.data
             * @classdesc Represents a ValidationError.
             * @implements IValidationError
             * @constructor
             * @param {waves.data.IValidationError=} [properties] Properties to set
             */
            function ValidationError(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ValidationError message.
             * @member {string} message
             * @memberof waves.data.ValidationError
             * @instance
             */
            ValidationError.prototype.message = "";

            /**
             * ValidationError field.
             * @member {string} field
             * @memberof waves.data.ValidationError
             * @instance
             */
            ValidationError.prototype.field = "";

            /**
             * Creates a new ValidationError instance using the specified properties.
             * @function create
             * @memberof waves.data.ValidationError
             * @static
             * @param {waves.data.IValidationError=} [properties] Properties to set
             * @returns {waves.data.ValidationError} ValidationError instance
             */
            ValidationError.create = function create(properties) {
                return new ValidationError(properties);
            };

            /**
             * Encodes the specified ValidationError message. Does not implicitly {@link waves.data.ValidationError.verify|verify} messages.
             * @function encode
             * @memberof waves.data.ValidationError
             * @static
             * @param {waves.data.IValidationError} message ValidationError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValidationError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.field != null && message.hasOwnProperty("field"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.field);
                return writer;
            };

            /**
             * Encodes the specified ValidationError message, length delimited. Does not implicitly {@link waves.data.ValidationError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof waves.data.ValidationError
             * @static
             * @param {waves.data.IValidationError} message ValidationError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValidationError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ValidationError message from the specified reader or buffer.
             * @function decode
             * @memberof waves.data.ValidationError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {waves.data.ValidationError} ValidationError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValidationError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.ValidationError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    case 2:
                        message.field = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ValidationError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof waves.data.ValidationError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {waves.data.ValidationError} ValidationError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValidationError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ValidationError message.
             * @function verify
             * @memberof waves.data.ValidationError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ValidationError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.field != null && message.hasOwnProperty("field"))
                    if (!$util.isString(message.field))
                        return "field: string expected";
                return null;
            };

            /**
             * Creates a ValidationError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof waves.data.ValidationError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {waves.data.ValidationError} ValidationError
             */
            ValidationError.fromObject = function fromObject(object) {
                if (object instanceof $root.waves.data.ValidationError)
                    return object;
                var message = new $root.waves.data.ValidationError();
                if (object.message != null)
                    message.message = String(object.message);
                if (object.field != null)
                    message.field = String(object.field);
                return message;
            };

            /**
             * Creates a plain object from a ValidationError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof waves.data.ValidationError
             * @static
             * @param {waves.data.ValidationError} message ValidationError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ValidationError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.message = "";
                    object.field = "";
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.field != null && message.hasOwnProperty("field"))
                    object.field = message.field;
                return object;
            };

            /**
             * Converts this ValidationError to JSON.
             * @function toJSON
             * @memberof waves.data.ValidationError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ValidationError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ValidationError;
        })();

        data.ParseError = (function() {

            /**
             * Properties of a ParseError.
             * @memberof waves.data
             * @interface IParseError
             * @property {string|null} [message] ParseError message
             */

            /**
             * Constructs a new ParseError.
             * @memberof waves.data
             * @classdesc Represents a ParseError.
             * @implements IParseError
             * @constructor
             * @param {waves.data.IParseError=} [properties] Properties to set
             */
            function ParseError(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ParseError message.
             * @member {string} message
             * @memberof waves.data.ParseError
             * @instance
             */
            ParseError.prototype.message = "";

            /**
             * Creates a new ParseError instance using the specified properties.
             * @function create
             * @memberof waves.data.ParseError
             * @static
             * @param {waves.data.IParseError=} [properties] Properties to set
             * @returns {waves.data.ParseError} ParseError instance
             */
            ParseError.create = function create(properties) {
                return new ParseError(properties);
            };

            /**
             * Encodes the specified ParseError message. Does not implicitly {@link waves.data.ParseError.verify|verify} messages.
             * @function encode
             * @memberof waves.data.ParseError
             * @static
             * @param {waves.data.IParseError} message ParseError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParseError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified ParseError message, length delimited. Does not implicitly {@link waves.data.ParseError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof waves.data.ParseError
             * @static
             * @param {waves.data.IParseError} message ParseError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParseError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ParseError message from the specified reader or buffer.
             * @function decode
             * @memberof waves.data.ParseError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {waves.data.ParseError} ParseError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParseError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.ParseError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ParseError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof waves.data.ParseError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {waves.data.ParseError} ParseError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParseError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ParseError message.
             * @function verify
             * @memberof waves.data.ParseError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ParseError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a ParseError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof waves.data.ParseError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {waves.data.ParseError} ParseError
             */
            ParseError.fromObject = function fromObject(object) {
                if (object instanceof $root.waves.data.ParseError)
                    return object;
                var message = new $root.waves.data.ParseError();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a ParseError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof waves.data.ParseError
             * @static
             * @param {waves.data.ParseError} message ParseError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ParseError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this ParseError to JSON.
             * @function toJSON
             * @memberof waves.data.ParseError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ParseError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ParseError;
        })();

        data.ServiceError = (function() {

            /**
             * Properties of a ServiceError.
             * @memberof waves.data
             * @interface IServiceError
             * @property {string|null} [message] ServiceError message
             */

            /**
             * Constructs a new ServiceError.
             * @memberof waves.data
             * @classdesc Represents a ServiceError.
             * @implements IServiceError
             * @constructor
             * @param {waves.data.IServiceError=} [properties] Properties to set
             */
            function ServiceError(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceError message.
             * @member {string} message
             * @memberof waves.data.ServiceError
             * @instance
             */
            ServiceError.prototype.message = "";

            /**
             * Creates a new ServiceError instance using the specified properties.
             * @function create
             * @memberof waves.data.ServiceError
             * @static
             * @param {waves.data.IServiceError=} [properties] Properties to set
             * @returns {waves.data.ServiceError} ServiceError instance
             */
            ServiceError.create = function create(properties) {
                return new ServiceError(properties);
            };

            /**
             * Encodes the specified ServiceError message. Does not implicitly {@link waves.data.ServiceError.verify|verify} messages.
             * @function encode
             * @memberof waves.data.ServiceError
             * @static
             * @param {waves.data.IServiceError} message ServiceError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified ServiceError message, length delimited. Does not implicitly {@link waves.data.ServiceError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof waves.data.ServiceError
             * @static
             * @param {waves.data.IServiceError} message ServiceError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceError message from the specified reader or buffer.
             * @function decode
             * @memberof waves.data.ServiceError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {waves.data.ServiceError} ServiceError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.ServiceError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof waves.data.ServiceError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {waves.data.ServiceError} ServiceError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceError message.
             * @function verify
             * @memberof waves.data.ServiceError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a ServiceError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof waves.data.ServiceError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {waves.data.ServiceError} ServiceError
             */
            ServiceError.fromObject = function fromObject(object) {
                if (object instanceof $root.waves.data.ServiceError)
                    return object;
                var message = new $root.waves.data.ServiceError();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a ServiceError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof waves.data.ServiceError
             * @static
             * @param {waves.data.ServiceError} message ServiceError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this ServiceError to JSON.
             * @function toJSON
             * @memberof waves.data.ServiceError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceError;
        })();

        data.Timeout = (function() {

            /**
             * Properties of a Timeout.
             * @memberof waves.data
             * @interface ITimeout
             * @property {string|null} [message] Timeout message
             */

            /**
             * Constructs a new Timeout.
             * @memberof waves.data
             * @classdesc Represents a Timeout.
             * @implements ITimeout
             * @constructor
             * @param {waves.data.ITimeout=} [properties] Properties to set
             */
            function Timeout(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timeout message.
             * @member {string} message
             * @memberof waves.data.Timeout
             * @instance
             */
            Timeout.prototype.message = "";

            /**
             * Creates a new Timeout instance using the specified properties.
             * @function create
             * @memberof waves.data.Timeout
             * @static
             * @param {waves.data.ITimeout=} [properties] Properties to set
             * @returns {waves.data.Timeout} Timeout instance
             */
            Timeout.create = function create(properties) {
                return new Timeout(properties);
            };

            /**
             * Encodes the specified Timeout message. Does not implicitly {@link waves.data.Timeout.verify|verify} messages.
             * @function encode
             * @memberof waves.data.Timeout
             * @static
             * @param {waves.data.ITimeout} message Timeout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timeout.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Timeout message, length delimited. Does not implicitly {@link waves.data.Timeout.verify|verify} messages.
             * @function encodeDelimited
             * @memberof waves.data.Timeout
             * @static
             * @param {waves.data.ITimeout} message Timeout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timeout.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timeout message from the specified reader or buffer.
             * @function decode
             * @memberof waves.data.Timeout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {waves.data.Timeout} Timeout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timeout.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.waves.data.Timeout();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timeout message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof waves.data.Timeout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {waves.data.Timeout} Timeout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timeout.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timeout message.
             * @function verify
             * @memberof waves.data.Timeout
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timeout.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Timeout message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof waves.data.Timeout
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {waves.data.Timeout} Timeout
             */
            Timeout.fromObject = function fromObject(object) {
                if (object instanceof $root.waves.data.Timeout)
                    return object;
                var message = new $root.waves.data.Timeout();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Timeout message. Also converts values to other types if specified.
             * @function toObject
             * @memberof waves.data.Timeout
             * @static
             * @param {waves.data.Timeout} message Timeout
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timeout.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Timeout to JSON.
             * @function toJSON
             * @memberof waves.data.Timeout
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timeout.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timeout;
        })();

        return data;
    })();

    return waves;
})();

module.exports = $root;
