const welcomeMessage = (): void => console.log('Xush kelibsiz!');
welcomeMessage();

const throwError = (): never => {
    throw new Error('Xatolik yuz berdi');
};
