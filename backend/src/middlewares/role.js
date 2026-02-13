export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        const role = req.user?.role;

        if (!role) {
            const error = new Error("Forbidden: Not Allowed");
            error.status = 403;
            return next(error);
        }
        if (!allowedRoles.includes(role)) {
            const error = new Error("Forbidden: Not Allowed");
            error.status = 403;
            return next(error);
        }
        next();
    };
};