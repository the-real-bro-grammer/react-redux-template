import MainLayout from '@/layouts/MainLayout';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import '../index.scss';
import store from '../redux/store';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout
        ? Component.getLayout
        : (page: ReactElement) => <MainLayout children={page} />;

    return (
        <>
            <React.StrictMode>
                <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
            </React.StrictMode>
        </>
    );
}
