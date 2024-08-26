/** @format */
import "./modal.css";
import type { MouseEvent } from "react";
import { forwardRef, useEffect, useRef } from "react";
import CreateModalForm from "./create-modal-form";

type ModalProps = React.HTMLAttributes<HTMLDialogElement> & {
  closeOffClick?: boolean;
};

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, closeOffClick = true, ...props }, ref) => {
    useEffect(() => {
      let dialog = null as HTMLDialogElement | null;
      if (document) {
        dialog = document.querySelector("dialog");
        if (dialog) dialog.showModal();
      }
      return () => {
        if (dialog) dialog.close();
      };
    }, []);

    const onClick = closeOffClick ? clickHandler : undefined;

    return (
      <dialog ref={ref} onClick={onClick} {...props}>
        {children}
      </dialog>
    );
  }
);

const clickHandler = (e: MouseEvent<HTMLDialogElement>) => {
  const target = e.target as HTMLDialogElement;
  if (target.tagName !== "DIALOG") return;
  const rect = target.getBoundingClientRect();

  const clickedInDialog =
    rect.top - 25 <= e.clientY &&
    e.clientY <= rect.top + rect.height + 25 &&
    rect.left <= e.clientX + 25 &&
    e.clientX - 25 <= rect.left + rect.width;

  if (clickedInDialog === false && window) {
    window.location.href = window.location.href.replace(location.search, "");
  }
};

type Props = { title?: string };

export const CreateModal: React.FC<Props> = () => {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    let current = ref.current;
    if (current) {
      current.showModal();
    }
    return () => {
      if (current) current.close();
    };
  }, []);
  return (
    <Modal id="modal">
      <h1 className="title">adding new entry:</h1>
      <div className="content">
        <CreateModalForm />
      </div>
    </Modal>
  );
};
