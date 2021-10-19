const emailTest = new RegExp(/\w+@\w+\.\w+/gmi);
const testMail = async (email: string): Promise<boolean> => {
    return emailTest.test(email);
};

export default testMail;