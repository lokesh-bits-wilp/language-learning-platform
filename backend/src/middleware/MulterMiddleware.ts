import multer from "multer";

class MulterMiddleware {
    static storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname);
        },
        filename: (req, file, cb) => {
            cb(null, "../../networkConfig/" + file.originalname);
        }
    });
    static upload = multer({ storage: MulterMiddleware.storage });
}

export default MulterMiddleware;
