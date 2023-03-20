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
        path: '/sign-in-up',
        lazy: lazyLoadPage('SignInUp'),
    },
    {
        path: '/otp',
        lazy: lazyLoadPage('OTP'),
    },
    {
        path: '*',
        lazy: lazyLoadPage('NotFound'),
    }
]);

export default router;
