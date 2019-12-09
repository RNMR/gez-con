import { AuthenticationService } from './authentication.service';
import { MenuService } from './menu.service';
import { EncryptDecryptService } from './EcryptDecryptService';

export const SHARED_SERVICES = [
  AuthenticationService,
  MenuService,
  EncryptDecryptService,
]

// export * from './authentication.service';