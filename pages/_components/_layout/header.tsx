import React from 'react';

export default function Header({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <header style={{ height: '100px', minWidth: '100vw', background: '#000000' }}>{children}</header>;
}
