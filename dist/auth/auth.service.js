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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../services/user.service");
const user_interface_1 = require("../interfaces/user.interface");
const _ = require("lodash");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validate(username, password) {
        const user = await this.userService.findOne(username);
        if (user && user.password == password) {
            let data = _.omit(user.toObject(), "password");
            return data;
        }
        return null;
    }
    async login(user) {
        const payload = { username: user.username, sub: user._id };
        return {
            errors: false,
            statusCode: 200,
            message: "User Logged In",
            data: Object.assign({ access_token: this.jwtService.sign(payload) }, user)
        };
    }
    async signUp(user) {
        return this.userService.createOneOrMany(user).then((document) => {
            let data = _.omit(document.toObject(), "password");
            return {
                errors: false,
                statusCode: 201,
                message: "User created",
                data
            };
        });
    }
    async checkUsername(username) {
        return this.userService.findOne(username).then((document) => {
            if (!document) {
                throw new Error();
            }
            let data = _.omit(document.toObject(), "password");
            return {
                errors: false,
                statusCode: 201,
                message: "User Found",
                data
            };
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map