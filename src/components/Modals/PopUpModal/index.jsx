import "./PopUpModal.css";

const PopUpModal = props => {
  const {
    DoAction,
    close,
    title,
    sumbitButton = "Submit",
    cancelButton = "Cancel",
    children,
  } = props;

  const SumbitAction = () => {
    if (DoAction()) CloseModal();
  };

  const CloseModal = () => {
    const modal = document.querySelector(".popUpModel");
    if (modal) {
      modal.classList.add("fadeOut");
      setTimeout(() => {
        close();
      }, 300);
    }
  };

  const closeModalOnClick = e => {
    const elemClicked = e.target.classList.value;
    if (
      elemClicked.includes("Modal__container") ||
      elemClicked.includes("popUpModel__cancelButton") ||
      elemClicked.includes("popUpModel__closeIcon") ||
      elemClicked.includes("popUpModel__icon") ||
      elemClicked.includes("txt")
    )
      CloseModal();
  };

  return (
    <>
      <div className="Modal__container " onClick={e => closeModalOnClick(e)}>
        <div
          onKeyDown={e => {
            if (e.code === "Enter") SumbitAction();
          }}
          className="popUpModel flex_column fadeIn"
        >
          <div className="popUpModel__closeIcon">
            <img
              className="popUpModel__icon"
              src="images/closeIcon.svg"
              alt="closeModal"
              onClick={e => closeModalOnClick(e)}
            />
          </div>
          <div className="popUpModel__title">
            <span> {title} </span>
          </div>
          {/* Inputs */}
          <div className="popUpModel__inputs flex_column"> {children} </div>
          <div className="popUpModel__buttons">
            {/* button sumbit */}
            <button
              type="submit"
              className="popUpModel__sumbitButton"
              onClick={() => {
                SumbitAction();
              }}
            >
              <span> {sumbitButton} </span>
            </button>
            {/* button cancelButton */}
            <button
              className="popUpModel__cancelButton"
              onClick={e => closeModalOnClick(e)}
            >
              <span className="txt"> {cancelButton} </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpModal;
