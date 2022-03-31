import seed from './seed';

export async function connect() {
    await seed();
}
