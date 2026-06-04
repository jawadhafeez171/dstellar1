import Image from 'next/image';

export function Logo() {
  return (
    <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        src="/assets/logo-white.webp"
        alt="Dstellar Logo"
        width={250}
        height={65}
        style={{ objectFit: 'contain', width: '224px', height: 'auto', margin: '-8px 0' }}
        priority
      />
    </div>
  );
}
