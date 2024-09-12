import { registerEnumType } from '@nestjs/graphql';

export enum UserStatus {
  Activo = 'activo',
  Inactivo = 'inactivo',
  Suspendido = 'suspendido',
}

registerEnumType(UserStatus, {
  name: 'UserStatus',
  description: 'Los posibles estados de un usuario',
});
