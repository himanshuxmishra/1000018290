export const log = (message) => {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${message}`);
};
