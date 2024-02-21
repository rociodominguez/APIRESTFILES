const User = require("../api/models/user");
const { verifyJwt } = require("../config/jwt");

const verifying = (checking) => async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(400).json("No autorizado ✋");
        }

        const parsedToken = token.replace("Bearer ", "");
        const { id } = verifyJwt(parsedToken);

        const user = await User.findById(id);
        const checked = await checking(user);

        if (checked) {
            req.password = null;
            req.user = user;
            next();
        } else {
            return res.status(400).json("Acceso no permitido ❌");
        }

    } catch (error) {
        return res.status(400).json("Error en el token");
    }
};

const isAuth = verifying(async (user) => {
    return user !== null;
});

const isAdmin = verifying(async (user) => {
    return user && user.rol === "admin";
});

module.exports = { isAuth, isAdmin };
