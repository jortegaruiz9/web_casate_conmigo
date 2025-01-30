"use client";
import { createPortal } from "react-dom";
import { inter } from "@/app/ui/fonts";
import { CategoryType } from "@/app/types/category";

interface SizeModalProps {
  showSizes: boolean;
  setShowSizes: (show: boolean) => void;
  selectedSize: number | null;
  setSelectedSize: (size: number | null) => void;
  category: CategoryType;
  selectedSizeWoman?: number | null;
  setSelectedSizeWoman?: (size: number | null) => void;
}

export default function SizeModal({
  showSizes,
  setShowSizes,
  selectedSize,
  setSelectedSize,
  category,
  selectedSizeWoman,
  setSelectedSizeWoman,
}: SizeModalProps) {
  if (!showSizes) return null;

  const isDoubleRing = category === "set" || category === "matrimonio";

  return createPortal(
    <div
      className="fixed inset-0 text-myZinc bg-black bg-opacity-50 flex items-center justify-center p-4"
      style={{ zIndex: 99999 }}
    >
      <div
        className={`${inter.className} bg-myWhite p-4 w-full max-w-sm relative flex flex-col shadow-lg max-h-[90vh] overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-base">Selecciona tu talla</h4>
          <button onClick={() => setShowSizes(false)}>
            <span className="icon-[material-symbols--close-rounded] text-xl" />
          </button>
        </div>

        {isDoubleRing ? (
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h5 className="font-medium text-sm mb-1.5 sm:mb-2">
                Talla para él
              </h5>
              <div className="grid grid-cols-6 sm:grid-cols-5 gap-0.5 sm:gap-1">
                {[
                  { us: 5, mm: 16.5 },
                  { us: 5.5, mm: 16.9 },
                  { us: 6, mm: 17.3 },
                  { us: 6.5, mm: 17.7 },
                  { us: 7, mm: 18.1 },
                  { us: 7.5, mm: 18.5 },
                  { us: 8, mm: 18.9 },
                  { us: 8.5, mm: 19.3 },
                  { us: 9, mm: 19.8 },
                  { us: 9.5, mm: 20.2 },
                  { us: 10, mm: 20.6 },
                  { us: 10.5, mm: 21.0 },
                  { us: 11, mm: 21.4 },
                  { us: 11.5, mm: 21.8 },
                  { us: 12, mm: 22.2 },
                  { us: 12.5, mm: 22.6 },
                  { us: 13, mm: 23.0 },
                  { us: 13.5, mm: 23.4 },
                  { us: 14, mm: 23.9 },
                ].map((size) => (
                  <button
                    key={size.us}
                    className={`border border-[#c7c2b8] py-1 sm:py-1.5 hover:bg-gray-100 flex flex-col items-center ${
                      selectedSize === size.us
                        ? "bg-[#c7c2b8] border-[#c7c2b8]"
                        : ""
                    }`}
                    onClick={() => {
                      if (selectedSize === size.us) {
                        setSelectedSize(null);
                      } else {
                        setSelectedSize(size.us);
                      }
                    }}
                  >
                    <span className="text-xs sm:text-sm">{size.us}</span>
                    <span className="text-[#9e8e73] text-[10px] sm:text-xs">
                      {size.mm}mm
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-medium text-sm mb-1.5 sm:mb-2">
                Talla para ella
              </h5>
              <div className="grid grid-cols-6 sm:grid-cols-5 gap-0.5 sm:gap-1">
                {[
                  { us: 3, mm: 14.8 },
                  { us: 3.5, mm: 15.2 },
                  { us: 4, mm: 15.6 },
                  { us: 4.5, mm: 16.0 },
                  { us: 5, mm: 16.5 },
                  { us: 5.5, mm: 16.9 },
                  { us: 6, mm: 17.3 },
                  { us: 6.5, mm: 17.7 },
                  { us: 7, mm: 18.1 },
                  { us: 7.5, mm: 18.5 },
                  { us: 8, mm: 18.9 },
                  { us: 8.5, mm: 19.3 },
                  { us: 9, mm: 19.8 },
                  { us: 9.5, mm: 20.2 },
                  { us: 10, mm: 20.6 },
                  { us: 10.5, mm: 21.0 },
                  { us: 11, mm: 21.4 },
                  { us: 11.5, mm: 21.8 },
                  { us: 12, mm: 22.2 },
                ].map((size) => (
                  <button
                    key={size.us}
                    className={`border border-[#c7c2b8] py-1 sm:py-1.5 hover:bg-gray-100 flex flex-col items-center ${
                      selectedSizeWoman === size.us
                        ? "bg-[#c7c2b8] border-[#c7c2b8]"
                        : ""
                    }`}
                    onClick={() => {
                      if (selectedSizeWoman === size.us) {
                        setSelectedSizeWoman?.(null);
                      } else {
                        setSelectedSizeWoman?.(size.us);
                      }
                    }}
                  >
                    <span className="text-xs sm:text-sm">{size.us}</span>
                    <span className="text-[#9e8e73] text-[10px] sm:text-xs">
                      {size.mm}mm
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <div className="flex gap-2 mb-3">
              <h5 className="font-medium text-sm">Tallas US</h5>
              <h5 className="font-medium text-[#9e8e73] text-sm">/ mm</h5>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {[
                { us: 3, mm: 14.8 },
                { us: 3.5, mm: 15.2 },
                { us: 4, mm: 15.6 },
                { us: 4.5, mm: 16.0 },
                { us: 5, mm: 16.5 },
                { us: 5.5, mm: 16.9 },
                { us: 6, mm: 17.3 },
                { us: 6.5, mm: 17.7 },
                { us: 7, mm: 18.1 },
                { us: 7.5, mm: 18.5 },
                { us: 8, mm: 18.9 },
                { us: 8.5, mm: 19.3 },
                { us: 9, mm: 19.8 },
                { us: 9.5, mm: 20.2 },
                { us: 10, mm: 20.6 },
                { us: 10.5, mm: 21.0 },
                { us: 11, mm: 21.4 },
                { us: 11.5, mm: 21.8 },
                { us: 12, mm: 22.2 },
              ].map((size) => (
                <button
                  key={size.us}
                  className={`border border-[#c7c2b8]  py-1.5 hover:bg-gray-100 flex flex-col items-center ${
                    selectedSize === size.us
                      ? "bg-[#c7c2b8] border-[#c7c2b8]"
                      : ""
                  }`}
                  onClick={() => {
                    if (selectedSize === size.us) {
                      setSelectedSize(null);
                    } else {
                      setSelectedSize(size.us);
                    }
                    setShowSizes(false);
                  }}
                >
                  <span className="text-sm">{size.us}</span>
                  <span className="text-[#9e8e73] text-xs">{size.mm}mm</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-3">
          <button
            className="w-full py-2.5 px-4 bg-myZinc text-white  text-center hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2 text-sm"
            onClick={() => {
              if (!selectedSize && (!selectedSizeWoman || !isDoubleRing)) {
                setSelectedSize(null);
                if (isDoubleRing) {
                  setSelectedSizeWoman?.(null);
                }
              }
              setShowSizes(false);
            }}
          >
            {isDoubleRing ? (
              <>
                {!(selectedSize && selectedSizeWoman) && (
                  <span className="icon-[material-symbols--question-mark-rounded] text-lg" />
                )}
                <span>
                  {selectedSize && selectedSizeWoman
                    ? "Aceptar"
                    : "No conozco mi talla"}
                </span>
              </>
            ) : (
              <>
                {!selectedSize && (
                  <span className="icon-[material-symbols--question-mark-rounded] text-lg" />
                )}
                <span>{selectedSize ? "Aceptar" : "No conozco mi talla"}</span>
              </>
            )}
          </button>
          <p className="text-xs text-zinc-600 mt-2 text-center">
            No te preocupes, al momento de comprar nuestro asesor te ayudará a
            encontrar tu talla perfecta.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
