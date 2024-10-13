import React, {
  Children,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
  visibleItemsCount: number;
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
}

type CarouselProviderProps = {
  children: ReactNode;
  initialIndex?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
};

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(1);

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVisibleItemsCount(3);
      } else {
        setVisibleItemsCount(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
        visibleItemsCount,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

type CarouselProps = {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
};

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex);
  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
    >
      <div className={`group/hover relative ${className}`}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </CarouselProvider>
  );
}

type CarouselNavigationProps = {
  className?: string;
  classNameButton?: string;
  alwaysShow?: boolean;
};

function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
}: CarouselNavigationProps) {
  const { index, setIndex, itemsCount, visibleItemsCount } = useCarousel();

  return (
    <div
      className={`pointer-events-none absolute left-[-12.5%] top-1/2 flex w-[125%] -translate-y-1/2 justify-between px-2 ${className}`}
    >
      <button
        type="button"
        className={`pointer-events-auto h-fit w-fit rounded-full p-2 transition-opacity duration-300 ${
          alwaysShow ? "opacity-100" : "opacity-0 group-hover/hover:opacity-100"
        } ${
          alwaysShow
            ? "disabled:opacity-40"
            : "disabled:group-hover/hover:opacity-40"
        } ${classNameButton}`}
        disabled={index === 0}
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
      >
        <span className="icon-[material-symbols-light--arrow-back-ios-new-rounded] stroke-zinc-600 dark:stroke-zinc-50 text-2xl" />
      </button>
      <button
        type="button"
        className={`pointer-events-auto p-2 transition-opacity duration-300 ${
          alwaysShow ? "opacity-100" : "opacity-0 group-hover/hover:opacity-100"
        } ${
          alwaysShow
            ? "disabled:opacity-40"
            : "disabled:group-hover/hover:opacity-40"
        } ${classNameButton}`}
        disabled={index + visibleItemsCount >= itemsCount}
        onClick={() => {
          if (index + visibleItemsCount < itemsCount) {
            setIndex(index + 1);
          }
        }}
      >
        <span className="icon-[material-symbols-light--arrow-back-ios-new-rounded] stroke-zinc-600 dark:stroke-zinc-50 text-2xl rotate-180" />
      </button>
    </div>
  );
}

type CarouselContentProps = {
  children: ReactNode;
  className?: string;
};

function CarouselContent({ children, className }: CarouselContentProps) {
  const { index, setItemsCount, visibleItemsCount } = useCarousel();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsLength = Children.count(children);

  useEffect(() => {
    if (!itemsLength) {
      return;
    }
    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  return (
    <div
      ref={containerRef}
      className={`flex transition-transform duration-300 ease-in-out ${className}`}
      style={{
        transform: `translateX(-${index * (100 / visibleItemsCount)}%)`,
      }}
    >
      {children}
    </div>
  );
}

type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemProps) {
  const { visibleItemsCount } = useCarousel();
  return (
    <div
      className={`w-full min-w-0 shrink-0 grow-0 ${
        visibleItemsCount === 1 ? "basis-full" : "basis-full md:basis-1/3"
      } overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
  useCarousel,
};
