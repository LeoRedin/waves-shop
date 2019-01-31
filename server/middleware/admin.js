let admin = (req, res, next) => {
    if (req.user.role === 0) {
        return res.send("VOCÊ NÃO É ADMINISTRADOR");
    }
    next();
};

module.exports = { admin };
