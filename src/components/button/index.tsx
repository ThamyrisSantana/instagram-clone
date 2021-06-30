import "./styles.css";

type ButtonType = {
  name: string;
};

export const Button = (props: ButtonType) => {
  return (
    <div>
      <button className="loginBtn" type="submit">
        Continuar como {props.name}{" "}
      </button>
    </div>
  );
};
