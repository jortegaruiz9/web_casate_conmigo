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
        className={`${inter.className} bg-myWhite p-4 rounded-lg w-full max-w-sm relative flex flex-col shadow-lg`}
      >
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-base">Selecciona tu talla</h4>
          <button onClick={() => setShowSizes(false)}>
            <span className="icon-[material-symbols--close-rounded] text-xl" />
          </button>
        </div>

        {isDoubleRing ? (
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-sm mb-2">Talla para él</h5>
              <div className="grid grid-cols-5 gap-1">
                {[
                  { us: 6, eu: 52 },
                  { us: 7, eu: 54 },
                  { us: 8, eu: 56 },
                  { us: 9, eu: 58 },
                  { us: 10, eu: 60 },
                  { us: 11, eu: 62 },
                  { us: 12, eu: 64 },
                  { us: 13, eu: 66 },
                  { us: 14, eu: 68 },
                ].map((size) => (
                  <button
                    key={size.us}
                    className={`border border-gray-300 rounded-md py-1.5 hover:bg-gray-100 flex flex-col items-center ${
                      selectedSize === size.us
                        ? "bg-gray-100 border-gray-400"
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
                    <span className="text-sm">{size.us}</span>
                    <span className="text-green-600 text-xs">{size.eu}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-medium text-sm mb-2">Talla para ella</h5>
              <div className="grid grid-cols-5 gap-1">
                {[
                  { us: 3, eu: 44 },
                  { us: 4, eu: 47 },
                  { us: 5, eu: 50 },
                  { us: 6, eu: 52 },
                  { us: 7, eu: 54 },
                  { us: 8, eu: 56 },
                  { us: 9, eu: 58 },
                  { us: 10, eu: 60 },
                  { us: 11, eu: 62 },
                  { us: 12, eu: 64 },
                  { us: 13, eu: 66 },
                  { us: 14, eu: 68 },
                ].map((size) => (
                  <button
                    key={size.us}
                    className={`border border-gray-300 rounded-md py-1.5 hover:bg-gray-100 flex flex-col items-center ${
                      selectedSizeWoman === size.us
                        ? "bg-gray-100 border-gray-400"
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
                    <span className="text-sm">{size.us}</span>
                    <span className="text-green-600 text-xs">{size.eu}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <div className="flex gap-2 mb-3">
              <h5 className="font-medium text-sm">Tallas US</h5>
              <h5 className="font-medium text-green-600 text-sm">/ EU</h5>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {[
                { us: 3, eu: 44 },
                { us: 4, eu: 47 },
                { us: 5, eu: 50 },
                { us: 6, eu: 52 },
                { us: 7, eu: 54 },
                { us: 8, eu: 56 },
                { us: 9, eu: 58 },
                { us: 10, eu: 60 },
                { us: 11, eu: 62 },
                { us: 12, eu: 64 },
                { us: 13, eu: 66 },
                { us: 14, eu: 68 },
              ].map((size) => (
                <button
                  key={size.us}
                  className={`border rounded-md py-1.5 hover:bg-gray-100 flex flex-col items-center ${
                    selectedSize === size.us
                      ? "bg-gray-100 border-gray-400"
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
                  <span className="text-green-600 text-xs">{size.eu}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-3">
          <button
            className="w-full py-2.5 px-4 bg-gray-100 rounded-md text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm"
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
