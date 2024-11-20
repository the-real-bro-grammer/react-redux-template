'use client';

import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import './index.scss';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <Provider store={store}>
                    <React.StrictMode>{children}</React.StrictMode>
                </Provider>
            </body>
        </html>
    );
}
