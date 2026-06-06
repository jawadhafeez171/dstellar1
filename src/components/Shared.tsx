import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <Image
        src="/assets/logo-white.webp"
        alt="Dstellar Logo"
        width={250}
        height={65}
        style={{ objectFit: 'contain', width: '224px', height: 'auto', margin: '-8px 0' }}
        priority
      />
    </Link>
  );
}
