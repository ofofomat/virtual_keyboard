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
exports.SessionController = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
let SessionController = class SessionController {
    sessionService;
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    async startSession(previousSessionId) {
        return await this.sessionService.createSession(previousSessionId);
    }
    async invalidateSession(sessionId) {
        return await this.sessionService.invalidateSession(sessionId);
    }
};
exports.SessionController = SessionController;
__decorate([
    (0, common_1.Post)('start'),
    __param(0, (0, common_1.Body)('previousSessionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "startSession", null);
__decorate([
    (0, common_1.Post)('invalidate'),
    __param(0, (0, common_1.Body)('sessionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "invalidateSession", null);
exports.SessionController = SessionController = __decorate([
    (0, common_1.Controller)('session'),
    __metadata("design:paramtypes", [services_1.SessionService])
], SessionController);
//# sourceMappingURL=session.controller.js.map