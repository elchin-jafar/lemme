export default function fakeUpload() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
}
