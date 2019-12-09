import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {
  secretKey ="chichico"

  constructor() {}

  encrypt( val :string) :string{
    return CryptoJS.AES.encrypt( val, this.secretKey.trim() ).toString()
  }

  decrypt( toDecrypt :string) :string{
    return CryptoJS.AES.decrypt( toDecrypt, this.secretKey.trim() ).toString(CryptoJS.enc.Utf8)
  }
}