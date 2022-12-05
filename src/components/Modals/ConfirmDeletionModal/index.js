import "./confirmModal.css";

const ConfirmModal = ({ text, Close, Delete }) => {
  const ConfirmDeletion = () => {
    Delete();
    CloseModal();
  };

  const CloseModal = () => {
    const modal = document.querySelector(".confirmModal");
    if (modal) {
      modal.classList.add("fadeOut");
      setTimeout(() => {
        Close();
      }, 300);
    }
  };
  const closeModalOnClick = e => {
    const elemClicked = e.target.classList.value;
    if (elemClicked)
      if (
        elemClicked.includes("Modal__container") ||
        elemClicked.includes("non") ||
        elemClicked.includes("closeIcon") ||
        elemClicked.includes("confirmModal__icon") ||
        elemClicked.includes("txt")
      ) {
        CloseModal();
      }
  };
  return (
    <div className="Modal__container" onClick={e => closeModalOnClick(e)}>
      <div className="confirmModal fadeIn">
        <div className="confirmModal__closeIcon">
          <img
            className="confirmModal__icon"
            src="images/closeIcon.svg"
            alt="closeModal"
            onClick={e => closeModalOnClick(e)}
          />{" "}
        </div>
        {/* title */}{" "}
        <div className="confirmModal__title">
          <h2> {text} </h2>{" "}
        </div>
        <div className="confirmModal__buttons">
          {" "}
          {/* button oui */}{" "}
          <button
            className="oui"
            onClick={() => {
              ConfirmDeletion();
            }}
          >
            <span> OUI </span>{" "}
          </button>{" "}
          {/* button non */}{" "}
          <button className="non" onClick={e => closeModalOnClick(e)}>
            <span className="txt"> NON </span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ConfirmModal;
