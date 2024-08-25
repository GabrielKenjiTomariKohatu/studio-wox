import React from 'react';

export default function Footer({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    return <footer style={{ minWidth: '100vw', background: '#363636' }}>{children}</footer>;
}
