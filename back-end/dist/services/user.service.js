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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
let UserService = UserService_1 = class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    logger = new common_1.Logger(UserService_1.name);
    async onModuleInit() {
        const count = await this.userRepository.count();
        if (count === 0) {
            this.logger.log('Seeding mock user...');
            await this.createUser({
                username: 'mock_user',
                name: 'Mock User',
                password: [
                    { numbers: [4, 6] },
                    { numbers: [7, 0] },
                    { numbers: [1, 5] },
                    { numbers: [8, 9] },
                    { numbers: [3, 2] },
                    { numbers: [4, 2] }
                ],
            });
        }
    }
    async createUser(createUserDto) {
        const { username, name, password } = createUserDto;
        const formattedPassword = password.map(pair => pair.numbers);
        const user = this.userRepository.create({ username, name, password: formattedPassword });
        return await this.userRepository.save(user);
    }
    async getUser(username) {
        return await this.userRepository.findOneBy({ username });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map