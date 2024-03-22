const getPromise = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return null;
};

export default async function Posts() {
  await getPromise();

  return (
    <div>
      <li>lorem 1</li>
      <li>lorem 2</li>
      <li>lorem 3</li>
      <li>lorem 4</li>
      <li>lorem 5</li>
      <li>lorem 6</li>
      <li>lorem 7</li>
      <li>lorem 8</li>
    </div>
  );
}
