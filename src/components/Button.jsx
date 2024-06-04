function Button(props) {
  let count = 0;

  const handleClick = (e, name) => {
    if (count < 3) {
      count++;
      console.log(`${name}, you clicked me ${count} times`);
    } else {
      console.log(`Stop clicking me, ${name}`);
    }
    console.log(e);
  };

  const handleDoubleClick = (e) => (e.target.textContent = "OUCH! D:");

  return (
    <button
      onDoubleClick={(e) => handleDoubleClick(e)}
      onClick={(e) => handleClick(e, "Ricardo")}
    >
      Click me ._.
    </button>
  );
}

export default Button;
