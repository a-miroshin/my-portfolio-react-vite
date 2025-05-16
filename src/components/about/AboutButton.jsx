import { useRef } from "react";
import AboutModal from "@components/about/AboutModal";

export default function AboutModalButton() {
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <button onClick={openDialog} id="about-button">
        About
      </button>

      <AboutModal ref={dialogRef} />
    </>
  );
}
