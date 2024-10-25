import React, { useEffect, useRef, ReactNode } from "react";
import { TiTimesOutline } from "react-icons/ti";

const GenericModal = ({
  show,
  onClose,
  text,
  icon
}: {
  show: boolean;
  onClose: () => void;
  text: string,
  icon? : ReactNode
}) => {

  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (show && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [show]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 flex justify-center items-center bg-transparent outline-none border-none"
    >
      <div className="bg-[#011625] flex flex-col gap-8 p-6 rounded-lg justify-evenly">
        <div className="flex justify-end w-full">
          <TiTimesOutline
            size={30}
            color="#c73b2c"
            className="block cursor-pointer hover:scale-125"
            onClick={onClose}
          />
        </div>
        <div className="flex gap-3 items-center">
            {icon ? (
              icon
            ) : (
              ''
            )}
            <p className="text-2xl text-center font-bold text-white">
              {text}
            </p>
        </div>
      </div>
    </dialog>
  );
};

export default GenericModal;