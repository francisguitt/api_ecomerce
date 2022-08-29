export const Auth = {
    private: (req, res, next) => {
        const success = true;

        if (!success) {
            next()
        } else {
            res.status(401).json({ msg: 'Não autorizado!' });
        }
    }
}