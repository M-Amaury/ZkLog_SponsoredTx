'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import ProfilePopover from './ProfilePopover';

export default function Header() {

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link href="/route1">
          <Button variant="ghost">Marketplace</Button>
        </Link>
        <Link href="/route2">
          <Button variant="ghost">Collateralize Tokens</Button>
        </Link>
        <Link href="/route3">
          <Button variant="ghost">Sell Tokens</Button>
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <ProfilePopover />
      </div>
    </header>
  );
}
