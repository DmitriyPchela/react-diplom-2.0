class BaseError extends Error {
    constructor(params = {}) {
        super(params.message);

        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);

        this.data = params.data;
    }
}

class NotFoundError extends BaseError {
    constructor(params = {}) {
        super(params.message);
        this.message = params.message || 'Not Found';
    }
}
class UnauthorizedError extends BaseError {
    constructor(params = {}) {
        super(params.message);
        this.message = params.message || 'Permission denied';
    }
}
class ForbiddenError extends BaseError {
    constructor(params = {}) {
        super(params.message);
        this.message = params.message || 'Permission denied';
    }
}

module.exports = {
    BaseError,
    NotFoundError,
    ForbiddenError,
    UnauthorizedError,
};