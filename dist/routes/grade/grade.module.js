"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const grade_service_1 = require("./grade.service");
const grade_controller_1 = require("./grade.controller");
const services_module_1 = require("../../services/services.module");
let GradeModule = class GradeModule {
};
GradeModule = __decorate([
    common_1.Module({
        imports: [services_module_1.ServicesModule],
        providers: [grade_service_1.GradeControllerService],
        controllers: [grade_controller_1.GradeController]
    })
], GradeModule);
exports.GradeModule = GradeModule;
//# sourceMappingURL=grade.module.js.map