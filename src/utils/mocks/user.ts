import { name, datatype, system, internet } from 'faker';
import { UserData } from '../../types/offer';

const makeFakeUser = (): UserData =>
  ({
    name: `${name.firstName()} ${name.lastName()}`,
    avatarUrl: system.filePath(),
    isPro: datatype.boolean(),
    email: internet.email(),
  } as UserData);

export { makeFakeUser };
