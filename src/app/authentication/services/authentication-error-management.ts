export class AuthError extends Error {
  code: string;
  message: string;

  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }

  isError(message: string) {
    return this.message === message;
  }
}

const errorLogin: AuthError[] = [
  new AuthError('WRONG_PASS', 'auth/wrong-password'),
  new AuthError('EMAIL_NOT_FOUND', 'auth/user-not-found'),
];

const errorRegister: AuthError[] = [
  new AuthError('WEAK_PASS', 'auth/weak-password'),
  new AuthError('EMAIL_EXISTS', 'auth/email-already-in-use')
];

export class AutErrorService {
  static getRegisterError(error: string): AuthError | null {
    return errorRegister
      .find((authError: AuthError) => authError.isError(error));
  }

  static getLoginError(error: string): AuthError | null {
    return errorLogin
      .find((authError: AuthError) => authError.isError(error));
  }
}
