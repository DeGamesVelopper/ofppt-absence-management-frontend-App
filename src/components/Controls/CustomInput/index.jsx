import { SearchIcon } from "../../../Icons";
import "./customInput.css";

function CustomInput({
  className,
  value,
  setValue,
  placeholder,
  search = false,
  searchIconBgColor,
  filter = () => {},
  type = "text",
}) {
  return (
    <div className={`customInput__cantainer ${className}`}>
      <input
        className={`${search ? "pl" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyUpCapture={() => filter()}
        required
      />
      {search ? (
        <SearchIcon
          className="Icon customInput__searchIcon"
          style={{ backgroundColor: searchIconBgColor }}
        />
      ) : null}
    </div>
  );
}

export default CustomInput;
