'use client';

import { useAssets } from '@/animation/contexts/AssetsProvider';
import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import s from './styles.module.scss';
interface ImagePlaceHolderProps extends ImageProps {
  isFull?: boolean;
  className?: string;
}

function ImagePlaceHolder({
  src,
  alt,
  width,
  height,
  isFull = false,
  className,
}: ImagePlaceHolderProps): React.JSX.Element {
  const { setImagesLoaded } = useAssets();

  return (
    <div className={cn(s.imagePlaceHolder)}>
      <Image
        className={cn('imagePlaceHolder', className)}
        loading="eager"
        src={src}
        alt={alt}
        width={50}
        height={50}
      />
      <Image
        src={src}
        alt={alt}
        onLoad={(e) => {
          setImagesLoaded();
          (e.target as HTMLImageElement).classList.add(s.loaded);
        }}
        sizes={isFull ? '100vw' : `(min-width: ${width ?? 100}px) ${width ?? 100}px, 100vw`}
        width={width}
        height={height}
        className={cn(s.imagePlaceHolder_original)}
      />
    </div>
  );
}

export default ImagePlaceHolder;
