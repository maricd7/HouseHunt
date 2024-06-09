import React from "react";
import { CtaButton } from "../CtaButton";

interface AreYouSureModalProps {
  message: string;
  onCancel: () => void | Promise<void>;
  onConfirm: () => void | Promise<void>;
}

const AreYouSureModal = ({
  message,
  onCancel,
  onConfirm,
}: AreYouSureModalProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col gap-6 p-6 rounded-lg shadow-xl border border-gray-200 z-50 ">
      <h2 className="text-xl font-semibold text-gray-800">{message}</h2>
      <p className="text-gray-400">
        This action cannot be undone. Are you sure you want to proceed?
      </p>
      <div className="flex justify-end gap-4">
        <CtaButton text="Yes" type="button" onClick={onConfirm} />
        <button
          className="py-2 px-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 min-w-64 w-fit"
          onClick={onCancel}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default AreYouSureModal;
