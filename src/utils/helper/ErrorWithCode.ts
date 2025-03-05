export class ErrorWithCode extends Error {
    private code: number;

    constructor(code: number, message: string) {
        super(message);
        this.code = code;
        return this;
    }

    getMessageTrans(t: (key: string) => string, refix?: string) {
        return t(`${refix ?? 'error'}.${this.code}`);
    }
}

window.ErrorWithCode = ErrorWithCode;