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
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dtos/create-user.dto");
const edit_user_dto_1 = require("./dtos/edit-user.dto");
const user_status_enum_1 = require("./schemas/user-status.enum");
const user_schema_1 = require("./schemas/user.schema");
let UsersResolver = class UsersResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async getUsers() {
        return this.userService.getUsers();
    }
    async getUserById(_id) {
        return this.userService.getUserById(_id);
    }
    async getUserByEmail(email) {
        return this.userService.findUserByEmail(email);
    }
    async getUsersByStatus(status) {
        return this.userService.getUsersByStatus(status);
    }
    async createUser(createUser) {
        return this.userService.createUser(createUser);
    }
    async updateUser(updateUser) {
        return this.userService.updateUser(updateUser);
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Query)((returns) => [user_schema_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.Query)((returns) => user_schema_1.User),
    __param(0, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUserById", null);
__decorate([
    (0, graphql_1.Query)((returns) => user_schema_1.User),
    __param(0, (0, graphql_1.Args)('getUserByEmail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUserByEmail", null);
__decorate([
    (0, graphql_1.Query)((returns) => [user_schema_1.User]),
    __param(0, (0, graphql_1.Args)('getUsersByStatus', { type: () => user_status_enum_1.UserStatus })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsersByStatus", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => user_schema_1.User),
    __param(0, (0, graphql_1.Args)('createUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUser]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => user_schema_1.User),
    __param(0, (0, graphql_1.Args)('updateUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_dto_1.UpdateUser]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)((of) => user_schema_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
//# sourceMappingURL=users.resolver.js.map