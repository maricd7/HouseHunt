"use client";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
  useCallback,
} from "react";
import { AreYouSureModal } from "../components";

interface ModalContextType {
  showModal: (
    message: string,
    onConfirm: () => void | null,
    onCancel?: () => void | null
  ) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modal, setModal] = useState<{
    isVisible: boolean;
    message: string;
    onConfirm: (() => void) | null;
    onCancel: (() => void) | null;
  }>({ isVisible: false, message: "", onConfirm: null, onCancel: null });

  const showModal = useCallback(
    (
      message: string,
      onConfirm: (() => void) | null,
      onCancel: (() => void) | null = null
    ) => {
      setModal({ isVisible: true, message, onConfirm, onCancel });
    },
    []
  );

  const hideModal = () => {
    if (modal.onCancel) modal.onCancel();
    setModal({
      isVisible: false,
      message: "",
      onConfirm: null,
      onCancel: null,
    });
  };

  const confirmModal = () => {
    if (modal.onConfirm) modal.onConfirm();
    hideModal();
  };

  return (
    <ModalContext.Provider value={{ showModal }}>
      {children}
      {modal.isVisible && (
        <AreYouSureModal
          message={modal.message}
          onConfirm={confirmModal}
          onCancel={hideModal}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }
  return context;
};
