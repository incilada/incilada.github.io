import SimpleCrypto from "simple-crypto-js";
import * as LZString from "lz-string";

export class CryptoService {
  secretKey = "Y0zo37HEOx-BV7RQjvVmrjhIkO42Ii2Jcb9yydUdPkC";
  simpleCrypto;

  constructor() {
    this.simpleCrypto = new SimpleCrypto(this.secretKey);
  }

  encrypt = (data) => {
    return this.compress(this.simpleCrypto.encrypt(data));
  };

  decrypt = (ciphered) => {
    return JSON.stringify(
      this.simpleCrypto.decrypt(this.decompress(ciphered)),
      null,
      2
    );
  };

  compress = (data) => {
    return LZString.compressToUTF16(data);
  };

  decompress = (value) => {
    return LZString.decompressFromUTF16(value);
  };

  compressToBase64(data) {
    return LZString.compressToBase64(data);
  }

  decompressFromBase64(value) {
    return LZString.decompressFromBase64(value);
  }
}
