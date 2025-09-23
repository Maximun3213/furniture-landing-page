'use client';

import { Signal, useComputed, useSignal, useSignalEffect } from '@preact/signals-react';
import React, { createContext, ReactNode, useContext, useLayoutEffect } from 'react';

interface AssetsContextType {
  fontsLoaded: Signal<boolean>;
  imagesLoaded: Signal<number>;
  assetsLoaded: Signal<boolean>;
  assetsProgress: Signal<number>;
  setFontsLoaded: () => void;
  setImagesLoaded: () => void;
  setImagesNeedLoading: () => void;
}

const AssetsContext = createContext<AssetsContextType | undefined>(undefined);

interface AssetsProviderProps {
  children: ReactNode;
}

export const AssetsProvider: React.FC<AssetsProviderProps> = ({ children }) => {
  const imagesNeedLoading = useSignal<number>(0);
  const imagesLoaded = useSignal<number>(0);
  const fontsLoaded = useSignal<boolean>(false);
  const assetsLoaded = useSignal<boolean>(false);

  const setImagesNeedLoading = () => {
    imagesNeedLoading.value += 1;
  };

  const setImagesLoaded = () => {
    imagesLoaded.value += 1;
  };

  useSignalEffect(() => {
    const imagesNeedLoad = document.querySelectorAll(
      '.imagePlaceHolder'
    ) as NodeListOf<HTMLImageElement>;
    if (imagesLoaded.value === imagesNeedLoad.length && fontsLoaded.value) {
      assetsLoaded.value = true;
    }
  });

  const assetsProgress = useComputed(() => {
    const requests = document.querySelectorAll('.imagePlaceHolder').length;
    const loadTo = imagesLoaded.value;

    return Math.min(
      Math.round(requests === 0 || loadTo === 0 ? 0 : (loadTo / requests) * 100),
      100
    );
  });

  const setFontsLoaded = () => {
    fontsLoaded.value = true;
  };

  useLayoutEffect(() => {
    void document.fonts.ready.then(() => {
      setFontsLoaded();
    });

    return (): void => {
      setFontsLoaded();
    };
  }, []);

  useSignalEffect(() => {
    console.log('assetsProgress', assetsProgress.value);
    if (assetsLoaded.value) {
      console.log('assetsLoaded');
    }
  });

  const value = {
    fontsLoaded,
    imagesLoaded,
    assetsLoaded,
    assetsProgress,
    setFontsLoaded,
    setImagesLoaded,
    setImagesNeedLoading,
  };

  return <AssetsContext.Provider value={value}>{children}</AssetsContext.Provider>;
};

export const useAssets = () => {
  const context = useContext(AssetsContext);
  if (context === undefined) {
    throw new Error('useAssets must be used within an AssetsProvider');
  }
  return context;
};
