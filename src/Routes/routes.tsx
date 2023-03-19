import {createBrowserRouter} from 'react-router-dom';

const lazyLoadPage = (Page: string) => async () => {
    let Component = await import(`../Pages/${Page}/${Page}`);

    return { Component: Component.default };
}

const router = createBrowserRouter([
    {
        path: '/',
        lazy: lazyLoadPage('SignIn'),
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
        path: '/restore-password',
        lazy: lazyLoadPage('RestorePassword'),
    }
]);

export default router;
