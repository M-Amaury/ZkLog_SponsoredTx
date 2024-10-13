import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import ProfilePopover from './ProfilePopover';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <nav className="flex space-x-4">
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="/component1">
          <Button variant="ghost">Component 1</Button>
        </Link>
        <Link href="/component2">
          <Button variant="ghost">Component 2</Button>
        </Link>
      </nav>
      <div className="flex items-center">
        <ProfilePopover />
      </div>
    </header>
  );
}
