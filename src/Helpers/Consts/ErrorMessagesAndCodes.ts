export class ErrorCodes {
	static readonly WrongPassword = 'auth/wrong-password';
	static readonly WeakPassword = 'auth/weak-password';
	static readonly MissingEmail = 'auth/missing-email';
	static readonly InvalidEmail = 'auth/invalid-email';
	static readonly UserNotFound = 'auth/user-not-found';
	static readonly EmailAlreadyInUse = 'auth/email-already-in-use';
	static readonly InternalError = 'auth/internal-error';
	static readonly InvalidActionCode = 'auth/invalid-action-code';
	static readonly WrongConfirmPassword = 'wrong-confirm-password';
}

export class ErrorMessages {
	static readonly [ErrorCodes.WrongPassword] = 'Wrong password';
	static readonly [ErrorCodes.WeakPassword] = 'Password must be at least 6 characters';
	static readonly [ErrorCodes.MissingEmail] = 'Please enter email';
	static readonly [ErrorCodes.InvalidEmail] = 'Please enter valid email';
	static readonly [ErrorCodes.UserNotFound] = 'User with this email does not exist';
	static readonly [ErrorCodes.EmailAlreadyInUse] = 'User with this email already exists';
	static readonly [ErrorCodes.InternalError] = 'Internal error! Please try again later';
	static readonly [ErrorCodes.InvalidActionCode] = 'Invalid OTP';
	static readonly [ErrorCodes.WrongConfirmPassword] = 'Confirm password does not match';
}
