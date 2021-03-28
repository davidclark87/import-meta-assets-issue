function helloWorld() {
  const imgSrc = new URL("../../assets/tick-icon.png", import.meta.url);
  const { href } = imgSrc;
  console.log(href);
}
helloWorld();
