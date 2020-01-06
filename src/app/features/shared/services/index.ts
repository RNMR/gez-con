import { AuthenticationService } from './authentication.service';
// import { MenuService } from './menu.service';
import { EncryptDecryptService } from './EcryptDecryptService';
import { UsersService } from './users.service';

export const SHARED_SERVICES = [
  AuthenticationService,
  // MenuService,
  EncryptDecryptService,
  UsersService,
  
]

// export * from './authentication.service';