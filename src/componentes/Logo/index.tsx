type LogoProps = {
  src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Logo = ({ src }: LogoProps) => {
  return <img src={src} alt="Logo" />;
};

export default Logo;
