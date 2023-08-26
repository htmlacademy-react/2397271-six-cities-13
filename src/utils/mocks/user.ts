import { datatype, internet, name, system } from 'faker';
import { UserData } from '../../types/user';

const makeFakeUser = (): UserData =>
  ({
    name: `${name.firstName()} ${name.lastName()}`,
    avatarUrl: system.filePath(),
    isPro: datatype.boolean(),
    email: internet.email(),
    token: datatype.uuid(),
    id: datatype.number(),
  } as UserData);

export { makeFakeUser };
