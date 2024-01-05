import {createBrowserRouter} from 'react-router-dom';

const lazyLoadPage = (Page: string) => async () => {
    let Component = await import(`../Pages/${Page}/${Page}`);

    return { Component: Component.default };
}

const router = createBrowserRouter([
    {
        path: `/${PROJECT_NAME}/`,
        lazy: lazyLoadPage('Welcome'),
    },
    {
        path: `/${PROJECT_NAME}/sign-in`,
        lazy: lazyLoadPage('SignIn'),
    },
    {
        path: `/${PROJECT_NAME}/sign-up`,
        lazy: lazyLoadPage('SignUp'),
    },
    {
        path: `/${PROJECT_NAME}/reset-password`,
        lazy: lazyLoadPage('ResetPassword'),
    },
    {
        path: `/${PROJECT_NAME}/otp`,
        lazy: lazyLoadPage('OTP'),
    },
    {
        path: `/${PROJECT_NAME}/confirm-new-password`,
        lazy: lazyLoadPage('ConfirmNewPassword'),
    },
    {
        path: `/${PROJECT_NAME}/*`,
        lazy: lazyLoadPage('NotFound'),
    }
]);

export default router;
