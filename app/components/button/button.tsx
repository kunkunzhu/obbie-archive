/** @format */

type ButtonProps = {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
};

export default function Button({ text, type }: ButtonProps) {
  return (
    <button
      type={type}
      id={type}
      style={{
        borderRadius: "2rem",
        padding: "0.7rem 2rem 0.7rem 2rem",
        fontSize: "1.2rem",
        backgroundColor: type == "submit" ? "palegreen" : "inherit",
      }}
    >
      {text}
    </button>
  );
}
