"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserStatus;
(function (UserStatus) {
    UserStatus["Activo"] = "activo";
    UserStatus["Inactivo"] = "inactivo";
    UserStatus["Suspendido"] = "suspendido";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
(0, graphql_1.registerEnumType)(UserStatus, {
    name: 'UserStatus',
    description: 'Los posibles estados de un usuario',
});
//# sourceMappingURL=user-status.enum.js.map