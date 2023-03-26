import {createBrowserRouter} from 'react-router-dom';

const lazyLoadPage = (Page: string) => async () => {
    let Component = await import(`../Pages/${Page}/${Page}`);

    return { Component: Component.default };
}

const router = createBrowserRouter([
    {
        path: '/',
        lazy: lazyLoadPage('Welcome'),
    },
    {
        path: '/sign-in',
        lazy: lazyLoadPage('SignIn'),
    },
    {
        path: '/sign-up',
        lazy: lazyLoadPage('SignUp'),
    },
    {
        path: '/reset-password',
        lazy: lazyLoadPage('ResetPassword'),
    },
    {
        path: '/otp',
        lazy: lazyLoadPage('OTP'),
    },
    {
        path: '/confirm-new-password',
        lazy: lazyLoadPage('ConfirmNewPassword'),
    },
    {
        path: '*',
        lazy: lazyLoadPage('NotFound'),
    }
]);

export default router;
