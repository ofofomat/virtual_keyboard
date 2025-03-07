"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
const uuid_1 = require("uuid");
const func_1 = require("../utils/func");
let SessionService = class SessionService {
    sessionRepository;
    constructor(sessionRepository) {
        this.sessionRepository = sessionRepository;
    }
    async createSession() {
        const keyboardLayout = (0, func_1.generateKeyboardLayout)();
        const keyboardHash = (0, func_1.generateKeyboardHash)(keyboardLayout);
        const sessionId = (0, uuid_1.v4)();
        await this.sessionRepository.save({ id: sessionId, keyboard_hash: keyboardHash });
        const keyboard = keyboardLayout.map(pair => ({
            text: `${pair[0]} ou ${pair[1]}`,
            value: pair,
        }));
        return { sessionId, keyboard };
    }
    async validateLoginAttempt({ sessionId, passwordTyped }) {
        if (!passwordTyped) {
            throw new Error("Senha não providenciada!");
        }
        const session = await this.sessionRepository.findOne({ where: { id: sessionId, is_active: true } });
        if (session == null) {
            throw new Error("ID de sessão inválida!");
        }
        const receivedHash = (0, func_1.generateKeyboardHash)(passwordTyped);
        return receivedHash === session.keyboard_hash;
    }
    async invalidateSession(sessionId) {
        await this.sessionRepository.update(sessionId, { is_active: false });
    }
};
exports.SessionService = SessionService;
exports.SessionService = SessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Session)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SessionService);
//# sourceMappingURL=session.service.js.map