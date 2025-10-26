"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const db_1 = require("./App/config/db");
const seedAdmin_1 = require("./App/utils/seedAdmin");
dotenv_1.default.config();
let server = null;
function connectToDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_1.prisma.$connect();
            yield (0, seedAdmin_1.seedAdmin)();
            console.log("*** DB connection successful!!");
        }
        catch (error) {
            console.log("*** DB connection failed!");
            process.exit(1);
        }
    });
}
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connectToDB();
            server = http_1.default.createServer(app_1.default);
            server.listen(process.env.PORT, () => {
                console.log(`The Server is Running on the Port ${process.env.PORT}`);
            });
        }
        catch (error) {
            console.error("❌ Error during server startup:", error);
            process.exit(1);
        }
    });
}
startServer();
