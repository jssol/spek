import Image from 'next/image'

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className, width = 128, height = 64 }) => {
  return (
    <>
      <Image
        src={'/images/header/logo.svg'}
        alt='logo'
        width={width}
        height={height}
        unoptimized={true}
        className={`${className}`}
      />
    </>
  )
}

export default Logo
